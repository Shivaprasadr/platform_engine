from keycloak import KeycloakAdmin
import time
import sys
import os

# Keycloak server details - Use environment variables with fallbacks
KEYCLOAK_URL = os.getenv("KEYCLOAK_URL", "http://localhost:8080/")
TEMP_ADMIN_USERNAME = os.getenv("KEYCLOAK_ADMIN_USER", "admin")
TEMP_ADMIN_PASSWORD = os.getenv("KEYCLOAK_ADMIN_PASS", "change_me")
PERM_ADMIN_USERNAME = os.getenv("PLATFORM_ADMIN_USER", "platform_admin")
PERM_ADMIN_PASSWORD = os.getenv("PLATFORM_ADMIN_PASS", "platform_secure_password_2024")
REALM_ADMIN_USERNAME = os.getenv("REALM_ADMIN_USER", "platform_realm_admin")
REALM_ADMIN_PASSWORD = os.getenv("REALM_ADMIN_PASS", "platform_realm_secure_2024")
REALM_NAME = os.getenv("PLATFORM_REALM_NAME", "platform-engine-realm")

# Configuration flags
CREATE_PLATFORM_ADMIN = os.getenv("CREATE_PLATFORM_ADMIN", "true").lower() == "true"
KEEP_TEMP_ADMIN = os.getenv("KEEP_TEMP_ADMIN", "false").lower() == "true"

def determine_admin_credentials():
    """
    Smart admin credential selection based on what exists.
    Returns (username, password) for the admin that should be used.
    """
    # First try platform_admin if we're supposed to create one
    if CREATE_PLATFORM_ADMIN:
        try:
            admin = KeycloakAdmin(
                server_url=KEYCLOAK_URL,
                username=PERM_ADMIN_USERNAME,
                password=PERM_ADMIN_PASSWORD,
                realm_name="master",
                verify=True,
            )
            # Try a simple operation to verify the admin works
            admin.get_realms()
            print(f"🔍 Found existing platform admin '{PERM_ADMIN_USERNAME}', using it.")
            return PERM_ADMIN_USERNAME, PERM_ADMIN_PASSWORD
        except Exception as e:
            print(f"🔍 Platform admin '{PERM_ADMIN_USERNAME}' not accessible ({str(e)[:50]}...), trying temp admin...")

    # Fallback to temp admin
    try:
        admin = KeycloakAdmin(
            server_url=KEYCLOAK_URL,
            username=TEMP_ADMIN_USERNAME,
            password=TEMP_ADMIN_PASSWORD,
            realm_name="master",
            verify=True,
        )
        # Try a simple operation to verify the admin works
        admin.get_realms()
        print(f"🔍 Using temp admin '{TEMP_ADMIN_USERNAME}' for setup.")
        return TEMP_ADMIN_USERNAME, TEMP_ADMIN_PASSWORD
    except Exception as e:
        print(f"❌ Neither platform admin nor temp admin accessible! Error: {e}")
        print("💡 Suggestions:")
        print(f"   1. Ensure Keycloak is running")
        print(f"   2. Check admin credentials in environment variables")
        print(f"   3. If this is a fresh setup, ensure temp admin exists")
        print(f"   4. If setup was completed before, platform_admin should exist")
        sys.exit(1)

def wait_for_keycloak(username, password, realm="master"):
    """Wait until Keycloak is reachable and return an authenticated KeycloakAdmin instance."""
    for _ in range(20):  # Retry 20 times
        try:
            admin = KeycloakAdmin(
                server_url=KEYCLOAK_URL,
                username=username,
                password=password,
                realm_name=realm,
                verify=True,
            )
            print(f"Keycloak is ready! Logged in as '{username}' on realm '{realm}'.")
            return admin
        except Exception as e:
            print(f"Waiting for Keycloak to become available... Error: {e}")
            time.sleep(10)
    print("Keycloak did not become ready in time.", file=sys.stderr)
    sys.exit(1)

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
def create_user(userinstance, username, password, realmname):
    """Create a user on mentioned realm"""
    try:
        if not username or not username.strip():
            print(f"Warning: Username is empty or invalid: '{username}'")
            return
            
        users = userinstance.get_users({"username": username})
        if not users:
            user_data = {
                "username": username.strip(),
                "enabled": True,
                "credentials": [
                    {"type": "password", "value": password, "temporary": False}
                ],
            }
            userinstance.create_user(user_data)
            print(f"user '{username}' created on realm '{realmname}'.")
        else:
            print(f"user '{username}' already exists.")

    except Exception as e:
        print(f"Error creating user '{username}': {e}", file=sys.stderr)
        # Don't exit, just continue
        print("Continuing with setup...")

def assign_user_role(userinstance, username, userrole):
    """Assign the 'realm-admin' role to the permanent admin in the new realm."""
    try:
        # Get the user ID of the permanent admin
        user_id = userinstance.get_user_id(username)
        
        # Assign the 'admin' role for the master realm
        master_realm_roles = userinstance.get_realm_roles()
        master_realm_admin_role = next(
            (role for role in master_realm_roles if role["name"] == userrole), None
        )
        if master_realm_admin_role:
            userinstance.assign_realm_roles(user_id, [master_realm_admin_role])
            print(f"Master realm-admin role assigned to '{username}'.")

    except Exception as e:
        print(f"Error assigning user role: {e}", file=sys.stderr)
        # Don't exit for role assignment issues
        print("Continuing with setup...")


def check_existing_setup(admin):
    """Check what already exists in Keycloak to avoid conflicts."""
    setup_status = {
        "platform_admin_exists": False,
        "realm_exists": False,
        "realm_admin_exists": False
    }
    
    try:
        # Check if platform_admin user exists
        users = admin.get_users({"username": PERM_ADMIN_USERNAME})
        setup_status["platform_admin_exists"] = len(users) > 0
        
        # Check if our realm exists
        realms = admin.get_realms()
        setup_status["realm_exists"] = any(realm["realm"] == REALM_NAME for realm in realms)
        
        # If realm exists, check for realm admin
        if setup_status["realm_exists"]:
            try:
                realm_admin = admin
                realm_admin.realm_name = REALM_NAME
                realm_users = realm_admin.get_users({"username": REALM_ADMIN_USERNAME})
                setup_status["realm_admin_exists"] = len(realm_users) > 0
            except Exception:
                setup_status["realm_admin_exists"] = False
                
    except Exception as e:
        print(f"Warning: Could not check existing setup: {e}")
    
    return setup_status

def delete_temporary_admin(temp_admin):
    """Delete the temporary admin account."""
    try:
        users = temp_admin.get_users({"username": TEMP_ADMIN_USERNAME})
        if users:
            temp_admin_id = temp_admin.get_user_id(TEMP_ADMIN_USERNAME)
            temp_admin.delete_user(temp_admin_id)
            print(f"Temporary admin '{TEMP_ADMIN_USERNAME}' deleted.")
        else:
            print(f"Temporary admin '{TEMP_ADMIN_USERNAME}' does not exist.")
    except Exception as e:
        print(f"Error deleting temporary admin: {e}", file=sys.stderr)
        print("Continuing with setup...")

def configure_keycloak(permanent_admin):
    """Configure Keycloak with realms, clients, and admin user."""
    try:
        # Create Realm
        if not any(realm["realm"] == REALM_NAME for realm in permanent_admin.get_realms()):
            permanent_admin.create_realm({"realm": REALM_NAME, "enabled": True})
            print(f"Realm '{REALM_NAME}' created.")
        else:
            print(f"Realm '{REALM_NAME}' already exists.")

        # Wait for the realm to be fully available
        time.sleep(5)  

        print(f"Realm '{REALM_NAME}' created with enhanced security settings.")
        
        # Enable additional security features
        permanent_admin.update_realm(
            REALM_NAME,
            {
                "enabled": True,
                "registrationAllowed": True,
                "registrationEmailAsUsername": True,
                "duplicateEmailsAllowed": False,
                "loginWithEmailAllowed": True,
                "verifyEmail": False,  # Set to True in production
                "sslRequired": "none",  # Set to "all" in production
                "bruteForceProtected": True,
                "maxFailureWaitSeconds": 900,
                "minimumQuickLoginWaitSeconds": 60,
                "waitIncrementSeconds": 60,
                "quickLoginCheckMilliSeconds": 1000,
                "maxDeltaTimeSeconds": 43200,
                "failureFactor": 30,
            },
        )
        print(f"Enhanced security settings applied to realm '{REALM_NAME}'.")

    except Exception as e:
        print(f"Error configuring Keycloak: {e}", file=sys.stderr)
        sys.exit(1)

def ensure_realm_management_client(instance):
    """Ensure the 'realm-management' client exists in the specific logged in realm."""
    try:
        #instance.realm_name = REALM_NAME
        clients = instance.get_clients()
        realm_mgmt_client = next(
            (client for client in clients if client["clientId"] == "realm-management"), None
        )

        if not realm_mgmt_client:
            # Realm-management client does not exist, create it
            instance.create_client(
                {
                    "clientId": "realm-management",
                    "enabled": True,
                    "publicClient": False,
                    "protocol": "openid-connect",
                    "serviceAccountsEnabled": True,
                    "directAccessGrantsEnabled": True,
                }
            )
            print(f"'realm-management' client created in '{REALM_NAME}'.")
        else:
            print(f"'realm-management' client already exists in '{REALM_NAME}'.")

    except Exception as e:
        print(f"Error ensuring 'realm-management' client: {e}", file=sys.stderr)
        sys.exit(1)

def ensure_realm_management_roles(realm_admin):
    """Ensure required roles exist in the realm-management client."""
    try:
        clients = realm_admin.get_clients()
        realm_mgmt_client = next(
            (client for client in clients if client["clientId"] == "realm-management"), None
        )
        if not realm_mgmt_client:
            print(f"Error: 'realm-management' client not found in '{REALM_NAME}'!", file=sys.stderr)
            sys.exit(1)

        realm_mgmt_client_id = realm_mgmt_client["id"]
        realm_roles = realm_admin.get_client_roles(realm_mgmt_client_id)

        required_roles = ["realm-admin", "manage-users", "manage-clients"]
        existing_roles = [role["name"] for role in realm_roles]

        for role_name in required_roles:
            if role_name not in existing_roles:
                realm_admin.create_client_role(realm_mgmt_client_id, {"name": role_name})
                print(f"Created role '{role_name}' in 'realm-management' client of '{REALM_NAME}'.")

    except Exception as e:
        print(f"Error ensuring realm management roles: {e}", file=sys.stderr)
        sys.exit(1)
def main():
    print("🚀 Starting Platform Engine Keycloak Setup...")
    
    print(f"🔧 Configuration:")
    print(f"   - Create Platform Admin: {CREATE_PLATFORM_ADMIN}")
    print(f"   - Keep Temp Admin: {KEEP_TEMP_ADMIN}")
    
    # Step 1: Smart admin selection - use the right admin based on what exists
    print("🔍 Determining which admin to use...")
    admin_username, admin_password = determine_admin_credentials()
    
    # Step 2: Connect with the determined admin
    admin = wait_for_keycloak(admin_username, admin_password)
    
    # Step 3: Check existing setup
    print("🔍 Checking existing setup...")
    setup_status = check_existing_setup(admin)
    
    print(f"📊 Setup Status:")
    print(f"   - Platform Admin: {'✅ EXISTS' if setup_status['platform_admin_exists'] else '❌ MISSING'}")
    print(f"   - Realm: {'✅ EXISTS' if setup_status['realm_exists'] else '❌ MISSING'}")
    print(f"   - Realm Admin: {'✅ EXISTS' if setup_status['realm_admin_exists'] else '❌ MISSING'}")

    # Step 4: Determine working admin for operations
    working_admin = admin
    if setup_status["platform_admin_exists"] and admin_username != PERM_ADMIN_USERNAME:
        # Switch to platform admin if it exists and we're not already using it
        try:
            working_admin = KeycloakAdmin(
                server_url=KEYCLOAK_URL,
                username=PERM_ADMIN_USERNAME,
                password=PERM_ADMIN_PASSWORD,
                realm_name="master",
                verify=True,
            )
            print(f"🔄 Switched to platform admin '{PERM_ADMIN_USERNAME}' for operations.")
        except:
            print(f"⚠️ Could not switch to platform admin, continuing with '{admin_username}'.")

    # Step 5: Create platform admin if requested and needed
    if CREATE_PLATFORM_ADMIN and not setup_status["platform_admin_exists"]:
        print(f"📝 Creating permanent platform admin user '{PERM_ADMIN_USERNAME}'...")
        create_user(working_admin, PERM_ADMIN_USERNAME, PERM_ADMIN_PASSWORD, "master")
        assign_user_role(admin, PERM_ADMIN_USERNAME, "admin")
        working_admin = admin  # Use temp admin until we clean up
    elif CREATE_PLATFORM_ADMIN and setup_status["platform_admin_exists"]:
        print(f"✅ Platform admin '{PERM_ADMIN_USERNAME}' already exists, skipping creation.")
        working_admin = admin
    else:
        print(f"⏭️ Skipping platform admin creation (using '{TEMP_ADMIN_USERNAME}' only).")
        working_admin = admin

    # Step 4: Configure realm if needed
    if not setup_status["realm_exists"]:
        print(f"🏗️ Creating realm '{REALM_NAME}'...")
        configure_keycloak(working_admin)
    else:
        print(f"✅ Realm '{REALM_NAME}' already exists, skipping creation.")

    # Step 5: Create realm-specific admin if needed
    if not setup_status["realm_admin_exists"]:
        print("👤 Creating realm-specific admin user...")
        try:
            # Switch context to the platform realm for user creation
            realm_admin = working_admin
            realm_admin.realm_name = REALM_NAME  # Switch context to platform realm
            
            realm_admin.create_user({
                "username": REALM_ADMIN_USERNAME,
                "enabled": True,
                "email": "admin@platform-engine.local",
                "emailVerified": True,
                "credentials": [
                    {"type": "password", "value": REALM_ADMIN_PASSWORD, "temporary": False}
                ],
            })
            print(f"✅ Realm-specific admin user '{REALM_ADMIN_USERNAME}' created.")
        except Exception as e:
            print(f"⚠️ Note: Could not create realm admin user: {e}. This is optional and can be done manually.")
    else:
        print(f"✅ Realm admin '{REALM_ADMIN_USERNAME}' already exists, skipping creation.")

    # Step 6: Ensure realm-management client exists
    print("🔧 Ensuring realm-management client...")
    ensure_realm_management_client(working_admin)

    # Step 9: Clean up temporary admin if requested (only if using temp admin currently)
    # Check if platform admin was successfully created (either existed before or was created now)
    platform_admin_now_exists = setup_status["platform_admin_exists"] or (
        CREATE_PLATFORM_ADMIN and not setup_status["platform_admin_exists"]  # Was created this run
    )
    
    should_delete_temp = (
        not KEEP_TEMP_ADMIN and 
        CREATE_PLATFORM_ADMIN and 
        admin_username == TEMP_ADMIN_USERNAME and  # Only if we're currently using temp admin
        platform_admin_now_exists  # And platform admin exists (was created or already existed)
    )
    
    if should_delete_temp:
        print(f"🗑️ Deleting temporary admin '{TEMP_ADMIN_USERNAME}'...")
        delete_temporary_admin(working_admin)
        print(f"✅ Temporary admin '{TEMP_ADMIN_USERNAME}' has been deleted.")
        print("⚠️  Note: After deletion, use 'platform_admin' for future operations.")

    print("\n🎉 Platform Engine Keycloak configuration complete!")
    print("=" * 60)
    
    # Show current admin credentials (adjust based on what was deleted)
    print("🔑 Current Admin Credentials:")
    if KEEP_TEMP_ADMIN or (admin_username == TEMP_ADMIN_USERNAME and not should_delete_temp):
        print(f"   Master admin: {TEMP_ADMIN_USERNAME} / {TEMP_ADMIN_PASSWORD}")
    if CREATE_PLATFORM_ADMIN:
        print(f"   Platform admin: {PERM_ADMIN_USERNAME} / {PERM_ADMIN_PASSWORD}")
        if should_delete_temp:
            print(f"🗑️  Temporary admin: {TEMP_ADMIN_USERNAME} (DELETED - use platform_admin instead)")
    print(f"   Realm admin: {REALM_ADMIN_USERNAME} / {REALM_ADMIN_PASSWORD}")
    print(f"🏠 Realm: {REALM_NAME}")
    print(f"🌐 Keycloak URL: {KEYCLOAK_URL}")
    
    # Show next steps
    print("\n💡 Next Steps:")
    if CREATE_PLATFORM_ADMIN and setup_status["platform_admin_exists"]:
        print(f"   - Use '{PERM_ADMIN_USERNAME}' for subsequent runs of this script")
        print(f"   - Use '{PERM_ADMIN_USERNAME}' for keycloak_clients_config.py")
    print(f"   - Run client configuration: python keycloak_clients_config.py")
    print("=" * 60)

if __name__ == "__main__":
    main()
