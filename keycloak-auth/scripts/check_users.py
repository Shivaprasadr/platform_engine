from keycloak import KeycloakAdmin

try:
    admin = KeycloakAdmin(
        server_url='http://localhost:8080/',
        username='platform_admin',
        password='platform_secure_password_2024',
        realm_name='platform-engine-realm',
        user_realm_name='master',
        verify=True,
    )
    users = admin.get_users()
    print('Users in platform-engine-realm:')
    for user in users:
        print(f'  - {user["username"]} (enabled: {user["enabled"]})')
except Exception as e:
    print(f'Error: {e}')
