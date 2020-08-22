build-develop:
	cd docker && docker-compose -f ./docker-compose.yml build

run-develop:
	cd docker && docker-compose -f ./docker-compose.yml up
