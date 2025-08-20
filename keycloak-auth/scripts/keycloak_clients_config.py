from keycloak import KeycloakAdmin
import sys
import time
import os

# Keycloak server details - Use environment variables with fallbacks
KEYCLOAK_URL = os.getenv("KEYCLOAK_URL", "http://localhost:8080/")

# After setup, we should use platform_admin (since temp admin is deleted)
# Only use temp admin if we explicitly keep it
CREATE_PLATFORM_ADMIN = os.getenv("CREATE_PLATFORM_ADMIN", "true").lower() == "true"
KEEP_TEMP_ADMIN = os.getenv("KEEP_TEMP_ADMIN", "false").lower() == "true"

if CREATE_PLATFORM_ADMIN:
    # Use platform admin (this is the normal case after setup)
    ADMIN_USERNAME = os.getenv("PLATFORM_ADMIN_USER", "platform_admin")
    ADMIN_PASSWORD = os.getenv("PLATFORM_ADMIN_PASS", "platform_secure_password_2024")
else:
    # Only use temp admin if we explicitly didn't create platform admin
    ADMIN_USERNAME = os.getenv("KEYCLOAK_ADMIN_USER", "admin") 
    ADMIN_PASSWORD = os.getenv("KEYCLOAK_ADMIN_PASS", "change_me")

REALM_NAME = os.getenv("PLATFORM_REALM_NAME", "platform-engine-realm")

# Client configurations for Platform Engine
CLIENTS = [
    {
        "client_id": "platform-engine-web",
        "name": "Platform Engine Web Application",
        "description": "React TypeScript web application for Platform Engine",
        "redirect_uris": [
            "http://localhost:3000/*",
            "http://localhost:3000/auth/callback",
            "http://127.0.0.1:3000/*",
            "*"  # Wildcard for development - restrict in production
        ],
        "post_logout_redirect_uris": [
            "http://localhost:3000/",
            "http://127.0.0.1:3000/",
            "*"
        ],
        "web_origins": [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "*"
        ],
        "capabilities": {
            "standardFlowEnabled": True,
            "directAccessGrantsEnabled": True,
            "publicClient": True
        },
    },
    {
        "client_id": "platform-engine-api",
        "name": "Platform Engine API Service",
        "description": "Flask Python API service for Platform Engine",
        "redirect_uris": [
            "http://localhost:4000/*",
            "http://127.0.0.1:4000/*"
        ],
        "capabilities": {
            "standardFlowEnabled": True,
            "directAccessGrantsEnabled": True,
            "serviceAccountsEnabled": True,
            "publicClient": False
        },
    },
]

def login_to_keycloak_realm(username, password, realm, userrealm):
    """Wait until Keycloak is reachable and return an authenticated KeycloakAdmin instance."""
    for _ in range(20):  # Retry 20 times
        try:
            admin = KeycloakAdmin(
                server_url=KEYCLOAK_URL,
                username=username,
                password=password,
                realm_name=realm,
                user_realm_name=userrealm,
                verify=True,
            )
            print(f"Keycloak is ready! Logged in as '{username}' on realm '{realm}'.")
            return admin
        except Exception as e:
            print(f"Waiting for Keycloak to become available... Error: {e}")
            time.sleep(10)
    print("Keycloak did not become ready in time.", file=sys.stderr)
    sys.exit(1)
def configure_clients(admin):
    """Create and configure clients in the target realm."""
    try:
        admin.realm_name = REALM_NAME  # Switch to the target realm
        for client in CLIENTS:
            existing_clients = admin.get_clients()
            existing_client = next((c for c in existing_clients if c["clientId"] == client["client_id"]), None)

            if not existing_client:
                client_config = {
                    "clientId": client["client_id"],
                    "name": client.get("name", client["client_id"]),
                    "description": client.get("description", ""),
                    "enabled": True,
                    "redirectUris": client["redirect_uris"],
                    "webOrigins": client.get("web_origins", []),
                    "publicClient": client["capabilities"].get("publicClient", True),
                    "protocol": "openid-connect",
                    "attributes": {
                        "post.logout.redirect.uris": " ".join(client.get("post_logout_redirect_uris", [])),
                        "pkce.code.challenge.method": "S256",
                    },
                    **{k: v for k, v in client.get("capabilities", {}).items() if k != "publicClient"},
                }
                
                admin.create_client(client_config)
                print(f"Client '{client['client_id']}' created in realm '{REALM_NAME}'.")
            else:
                print(f"Client '{client['client_id']}' already exists in realm '{REALM_NAME}'. Updating...")
                update_config = {
                    "name": client.get("name", client["client_id"]),
                    "description": client.get("description", ""),
                    "redirectUris": client["redirect_uris"],
                    "webOrigins": client.get("web_origins", []),
                    "attributes": {
                        "post.logout.redirect.uris": " ".join(client.get("post_logout_redirect_uris", [])),
                        "pkce.code.challenge.method": "S256",
                    },
                    **{k: v for k, v in client.get("capabilities", {}).items() if k != "publicClient"},
                }
                
                admin.update_client(existing_client["id"], update_config)
                print(f"Client '{client['client_id']}' updated in realm '{REALM_NAME}'.")
    except Exception as e:
        print(f"Error configuring clients in realm '{REALM_NAME}': {e}", file=sys.stderr)
        sys.exit(1)

def main():
    # Log in as permanent admin to target realm
    permanent_admin = login_to_keycloak_realm(ADMIN_USERNAME, ADMIN_PASSWORD, REALM_NAME, "master")

    # Ensure the realm exists
    try:
        realms = permanent_admin.get_realms()
        if not any(realm["realm"] == REALM_NAME for realm in realms):
            permanent_admin.create_realm({"realm": REALM_NAME, "enabled": True})
            print(f"Realm '{REALM_NAME}' created.")
        else:
            print(f"Realm '{REALM_NAME}' already exists.")
    except Exception as e:
        print(f"Error creating or checking realm '{REALM_NAME}': {e}", file=sys.stderr)
        sys.exit(1)

    # Configure clients in the target realm
    configure_clients(permanent_admin)
    print("Platform Engine client configuration complete.")

if __name__ == "__main__":
    main()
