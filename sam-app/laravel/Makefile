build-laravel:
	composer install --optimize-autoloader --no-dev
	php artisan config:clear
	cp -r * $(ARTIFACTS_DIR)

build-artisan:
	composer install --optimize-autoloader
	php artisan config:clear
	cp -r * $(ARTIFACTS_DIR)

build-handler:
	composer install --optimize-autoloader --no-dev
	php artisan config:clear
	cp -r * $(ARTIFACTS_DIR)