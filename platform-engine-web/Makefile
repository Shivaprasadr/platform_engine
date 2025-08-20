# Platform Engine Web - Development Commands
# ==========================================
# Usage: make <command>
# Example: make dev-start

# 🚀 QUICK START COMMANDS
# ----------------------
dev-start:
	@echo "🚀 Starting web app for development in background (with live reload)..."
	docker-compose up -d --build
	@echo "✅ Web development started in background!"
	@echo "📊 Next steps:"
	@echo "   • Check status: make dev-status"
	@echo "   • Follow logs: make dev-logs-live"
	@echo "   • Check container: make dev-shell"
	@echo "🌐 Access: http://localhost:3000"

dev-foreground:
	@echo "🚀 Starting web app for development with logs visible (with live reload)..."
	docker-compose up --build

dev-background:
	@echo "🚀 Starting web app in background (with live reload)..."
	docker-compose up -d --build
	@echo "✅ Web development started in background!"
	@echo "📊 Next steps:"
	@echo "   • Check status: make dev-status"
	@echo "   • Follow logs: make dev-logs-live"

local-start:
	@echo "🏠 Starting web app locally (without Docker)..."
	yarn run dev --port 3000

# 📦 SETUP COMMANDS
# ----------------
install-deps:
	@echo "📦 Installing project dependencies..."
	yarn install

setup-project:
	@echo "⚙️ Setting up project (install deps + build)..."
	yarn install
	yarn build

# 🔍 CODE QUALITY COMMANDS
# ------------------------
check-code:
	@echo "🔍 Checking code quality (linting)..."
	yarn lint

format-code:
	@echo "✨ Formatting code..."
	yarn format

check-format:
	@echo "🔍 Checking if code is properly formatted..."
	yarn format-check

build-app:
	@echo "🏗️ Building application for production..."
	yarn build

# 🔧 DEVELOPMENT TOOLS
# -------------------
dev-logs:
	@echo "📋 Showing development logs..."
	docker-compose logs

dev-logs-live:
	@echo "📋 Following development logs (Ctrl+C to stop)..."
	docker-compose logs -f

dev-status:
	@echo "📊 Checking development container status..."
	docker-compose ps

dev-shell:
	@echo "🐚 Opening shell inside development container..."
	docker-compose exec react-app sh

# 🔄 RESTART & RELOAD COMMANDS
# ---------------------------
dev-restart:
	@echo "🔄 Restarting development container..."
	docker-compose restart

dev-rebuild:
	@echo "🔨 Rebuilding development container in background (when package.json changes)..."
	docker-compose build --no-cache
	docker-compose up -d
	@echo "✅ Web development rebuilt and started in background!"
	@echo "📊 Next steps:"
	@echo "   • Check status: make dev-status"
	@echo "   • Follow logs: make dev-logs-live"

dev-stop:
	@echo "🛑 Stopping development container..."
	docker-compose down

# 🧹 CLEANUP COMMANDS
# ------------------
dev-clean:
	@echo "🧹 Cleaning up and restarting fresh in background..."
	docker-compose down --volumes --remove-orphans
	docker-compose up -d --build
	@echo "✅ Web development restarted clean in background!"
	@echo "📊 Next steps:"
	@echo "   • Check status: make dev-status"
	@echo "   • Follow logs: make dev-logs-live"

dev-reset:
	@echo "🔄 Complete reset in background (clean everything and start fresh)..."
	docker-compose down --volumes --remove-orphans
	docker-compose build --no-cache
	docker-compose up -d
	@echo "✅ Web development reset complete in background!"
	@echo "📊 Next steps:"
	@echo "   • Check status: make dev-status"
	@echo "   • Follow logs: make dev-logs-live"

# 📚 HELP COMMAND
# --------------
web-help:
	@echo ""
	@echo "🌐 Platform Engine Web - Available Commands"
	@echo "============================================"
	@echo ""
	@echo "🚀 QUICK START:"
	@echo "  dev-start      - Start development in background (live reload)"
	@echo "  dev-foreground - Start development with logs visible"
	@echo "  dev-background - Start development in background (alias)"
	@echo "  local-start    - Start locally without Docker"
	@echo ""
	@echo "📦 SETUP:"
	@echo "  install-deps   - Install project dependencies"
	@echo "  setup-project  - Complete project setup"
	@echo ""
	@echo "🔍 CODE QUALITY:"
	@echo "  check-code     - Run linting checks"
	@echo "  format-code    - Format all code"
	@echo "  build-app      - Build for production"
	@echo ""
	@echo "🔧 DEVELOPMENT TOOLS:"
	@echo "  dev-logs       - Show container logs"
	@echo "  dev-logs-live  - Follow logs in real-time"
	@echo "  dev-status     - Check container status"
	@echo "  dev-shell      - Open shell in container"
	@echo ""
	@echo "🔄 RESTART & RELOAD:"
	@echo "  dev-restart    - Restart container"
	@echo "  dev-rebuild    - Rebuild container (for package changes)"
	@echo "  dev-stop       - Stop development"
	@echo ""
	@echo "🧹 CLEANUP:"
	@echo "  dev-clean      - Clean restart"
	@echo "  dev-reset      - Complete reset"
	@echo ""
	@echo "💡 COMMON SCENARIOS:"
	@echo "  Starting work:        make dev-start (runs in background)"
	@echo "  Code changes:         (automatic reload)"
	@echo "  Package changes:      make dev-rebuild"
	@echo "  Container issues:     make dev-clean"
	@echo "  Fresh start:          make dev-reset"
	@echo "  See logs:             make dev-logs-live"
	@echo ""
	@echo "💡 NOTE: dev-start runs in BACKGROUND by default!"
	@echo "         Use dev-foreground to see logs in terminal"
	@echo ""
	@echo "🌐 Access: http://localhost:3000"
