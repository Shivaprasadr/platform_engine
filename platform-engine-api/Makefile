start:
	poetry run python -m api.app

clean: ## Remove generated files.
	find . -type f -name '*.py[co]' -delete -o -type d -name __pycache__ -delete

lint: ## Lint all files.
	pre-commit run --all-files

## Docker Instructions

dev:
	@echo "🔌 Starting API development with logs visible..."
	docker-compose up --build

dev-background:
	@echo "🔌 Starting API development in background..."
	docker-compose up -d --build

start-docker:
	docker-compose up -d --build

start-docker-detached:
	docker-compose up -d

stop-docker:
	docker-compose down

status:
	docker-compose ps

logs:
	docker-compose logs -f

##makefile for cleanig up the docker containers and starting the docker containers
clean-docker:
	docker-compose down --volumes --remove-orphans
	docker-compose build --no-cache
	docker-compose up -d