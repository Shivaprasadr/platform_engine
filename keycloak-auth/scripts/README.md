# Platform Engine Keycloak Automation

This directory contains automation scripts to set up Keycloak realm and clients for the Platform Engine project.

## What It Creates

### Realm: `platform-engine-realm`
- **Name**: Platform Engine Realm
- **Features**:
  - User registration enabled
  - Email-based login
  - Enhanced security settings
  - Brute force protection

### Clients
1. **`platform-engine-web`** - React TypeScript Web Application
   - Public client for frontend authentication
   - Redirect URIs configured for local development
   - PKCE enabled for security

2. **`platform-engine-api`** - Flask Python API Service
   - Confidential client for backend API
   - Service account enabled
   - Direct access grants enabled

### Users Created
- **`platform_admin`** - Master realm administrator
- **`platform_realm_admin`** - Platform realm administrator

## Usage

### Option 1: Manual Script Execution
```bash
# Navigate to the scripts directory
cd scripts

# Install dependencies
pip install -r requirements.txt

# Run the automation
python entrypoint.py
```

### Option 2: Using Make (Recommended)
```bash
# Start Keycloak first
make start-docker-detached

# Wait for Keycloak to be ready (about 30 seconds)
# Then run the automation
make setup-realm
```

### Option 3: Docker-based Setup
```bash
# Start Keycloak and run automation in one command
make setup-realm-docker
```

## Environment Variables

Create a `.env` file in the scripts directory with:

```bash
# Keycloak Connection
KEYCLOAK_URL=http://keycloak:8080/

# Initial Admin Credentials (from keycloak-auth/.env)
KEYCLOAK_ADMIN_USER=admin
KEYCLOAK_ADMIN_PASS=change_me

# Platform Engine Admin Credentials (will be created)
PLATFORM_ADMIN_USER=platform_admin
PLATFORM_ADMIN_PASS=platform_secure_password_2024

# Platform Engine Realm Configuration
PLATFORM_REALM_NAME=platform-engine-realm

# Optional: Run tests after setup
RUN_TESTS=false
```

## Scripts Description

1. **`keycloak_config.py`**: Sets up the realm, admin users, and basic configuration
2. **`keycloak_clients_config.py`**: Creates and configures the web and API clients
3. **`entrypoint.py`**: Orchestrates the execution of all scripts
4. **`test_keycloak_config.py`**: Optional Selenium tests for validation

## Troubleshooting

### Common Issues
1. **Connection refused**: Make sure Keycloak is running and accessible
2. **Authentication failed**: Verify admin credentials in `.env`
3. **Realm exists**: The scripts are idempotent and safe to re-run

### Verification
After running the automation, you can verify the setup by:
1. Visiting http://localhost:8080/admin
2. Logging in with the platform admin credentials
3. Checking that the `platform-engine-realm` exists
4. Verifying both clients are configured properly

## Production Considerations

For production deployment:
1. Change default passwords
2. Restrict redirect URIs to actual domain names
3. Enable SSL/TLS (`sslRequired: "all"`)
4. Enable email verification (`verifyEmail: true`)
5. Configure proper SMTP settings
6. Review and adjust security settings
