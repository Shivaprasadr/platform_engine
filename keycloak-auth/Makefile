start-docker:
	docker-compose up -d

start-docker-detached:
	docker-compose up -d

setup-realm:
	cd scripts && python entrypoint.py

setup-realm-docker:
	docker-compose -f docker-compose.yaml -f docker-compose.setup.yaml up -d --build setup-keycloak

stop-docker:
	docker-compose down

status:
	docker-compose ps

logs:
	docker-compose logs -f

clean-docker:
	docker-compose down --volumes --remove-orphans
	docker-compose build --no-cache
	docker-compose up -d