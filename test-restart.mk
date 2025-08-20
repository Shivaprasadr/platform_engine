# Platform Engine - Restart Commands
# ==================================

.DEFAULT_GOAL := help

# 🔄 RESTART COMMANDS
# ------------------
restart-web:
	@echo "♻️  Restarting web service..."
	docker-compose restart platform-engine-web

restart-api:
	@echo "♻️  Restarting API service..."
	docker-compose restart platform-engine-api

restart-auth:
	@echo "♻️  Restarting Keycloak service..."
	docker-compose restart keycloak

restart-all:
	@echo "♻️  Restarting all services..."
	docker-compose restart

# 📋 LOG COMMANDS
# --------------
web-logs:
	@echo "📋 Web service logs:"
	docker-compose logs --tail=50 platform-engine-web

api-logs:
	@echo "📋 API service logs:"
	docker-compose logs --tail=50 platform-engine-api

# 🚀 START COMMANDS
# ----------------
quick-start:
	@echo "🚀 Starting platform..."
	docker-compose up -d --build

# 🛑 STOP COMMANDS
# ---------------
stop-all:
	@echo "🛑 Stopping all services..."
	docker-compose down

# 📊 STATUS COMMANDS
# -----------------
check-status:
	@echo "📊 Platform status:"
	docker-compose ps

# 📚 HELP
# -------
help:
	@echo ""
	@echo "🚀 Platform Engine Commands"
	@echo "=========================="
	@echo ""
	@echo "🔄 Restart:"
	@echo "  restart-web    - Restart web service"
	@echo "  restart-api    - Restart API service"
	@echo "  restart-auth   - Restart Keycloak"
	@echo "  restart-all    - Restart all services"
	@echo ""
	@echo "📋 Logs:"
	@echo "  web-logs       - Show web logs"
	@echo "  api-logs       - Show API logs"
	@echo ""
	@echo "🚀 Platform:"
	@echo "  quick-start    - Start platform"
	@echo "  stop-all       - Stop all services"
	@echo "  check-status   - Show status"
	@echo ""

.PHONY: help restart-web restart-api restart-auth restart-all web-logs api-logs quick-start stop-all check-status
