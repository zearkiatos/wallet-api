docker-dev:
	docker compose -f docker-compose.develop.yml up --build
	make docker-dev-db
	
docker-build:
	docker compose up --build

docker-down:
	docker compose down

docker-dev-db:
	docker exec -it wallet-api-mysql-1 sh /docker/mysql-entrypoint.sh

