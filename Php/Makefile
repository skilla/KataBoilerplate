COLOR_NC           := \033[0m
COLOR_WHITE        := \033[1;37m
COLOR_BLACK        := \033[0;30m
COLOR_BLUE         := \033[0;34m
COLOR_LIGHT_BLUE   := \033[1;34m
COLOR_GREEN        := \033[0;32m
COLOR_LIGHT_GREEN  := \033[1;32m
COLOR_CYAN         := \033[0;36m
COLOR_LIGHT_CYAN   := \033[1;36m
COLOR_RED          := \033[0;31m
COLOR_LIGHT_RED    := \033[1;31m
COLOR_PURPLE       := \033[0;35m
COLOR_LIGHT_PURPLE := \033[1;35m
COLOR_BROWN        := \033[0;33m
COLOR_YELLOW       := \033[1;33m
COLOR_GRAY         := \033[0;30m
COLOR_LIGHT_GRAY   := \033[0;37m

include .env

.PHONY: help
help:
	@echo ""
	@echo "$(COLOR_GREEN)Environment configuration:$(COLOR_NC)"
	@echo ""
	@echo "   $(COLOR_BROWN)APP           $(COLOR_PURPLE)-> $(COLOR_LIGHT_GRAY)$(APP)$(COLOR_NC)"
	@echo "   $(COLOR_BROWN)ENV           $(COLOR_PURPLE)-> $(COLOR_LIGHT_GRAY)$(ENV)$(COLOR_NC)"
	@echo ""
	@echo "$(COLOR_GREEN)Make commands:$(COLOR_NC)"
	@echo ""
	@echo "   $(COLOR_YELLOW)help          $(COLOR_PURPLE)-> $(COLOR_CYAN)Show this help$(COLOR_NC)"
	@echo "   $(COLOR_YELLOW)install       $(COLOR_PURPLE)-> $(COLOR_CYAN)Install all resources for launch apache with php$(COLOR_NC)"
	@echo ""

.PHONY: start
install:
	docker pull php:7.4-fpm
	docker build -t phpforkatas:latest .
	docker run -it --rm --name php4Katas -v "$PWD":/var/www/html -w /var/www/html -p 8080:80 phpforkatas composer require phpunit/phpunit --dev

run:
	docker run -it --rm --name php4Katas -v "$PWD":/var/www/html -w /var/www/html -p 8080:80 phpforkatas apache2ctl -D FOREGROUND

