docker-dev-db-mysql:
	docker compose -f docker-compose.develop.yml up --build -d
	make docker-dev-mysql

docker-dev-db-mssql:
	docker compose -f docker-compose.develop.yml up --build
	make docker-dev-mssql

	
docker-build:
	docker compose up --build

docker-down:
	docker compose down

docker-dev-mysql:
	docker exec -it mysql sh /docker/mysql-entrypoint.sh

docker-dev-mssql:
	docker exec -it mssql sh /docker/mssql-entrypoint.sh

