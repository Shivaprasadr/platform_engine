import subprocess
import sys
import os

def run_script(script_name):
    try:
        print(f"Starting {script_name}...")
        result = subprocess.run(["python", script_name], check=True)
        print(f"{script_name} executed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error: {script_name} failed with exit code {e.returncode}.")
        sys.exit(e.returncode)

def main():
    print("=== Platform Engine Keycloak Setup ===")
    print("Setting up realm and clients for Platform Engine project...")
    
    run_script("keycloak_config.py")
    run_script("keycloak_clients_config.py")
    
    print("✅ Platform Engine Keycloak setup completed successfully!")
    print("Realm: platform-engine-realm")
    print("Clients: platform-engine-web, platform-engine-api")
    
    # Optionally run selenium tests
    if os.getenv("RUN_TESTS", "false").lower() == "true":
        print("Running the selenium test...")
        run_script("test_keycloak_config.py")
if __name__ == "__main__":
    main()
