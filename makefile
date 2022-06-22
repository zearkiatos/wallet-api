docker-dev:
	docker compose -f docker-compose.develop.yml up --build
	
docker-build:
	docker compose up --build

docker-down:
	docker compose down