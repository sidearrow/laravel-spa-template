build-develop:
	docker-compose build app web mysql

run-develop:
	docker-compose up app web mysql

#run-test-container:
#	cd docker && docker-compose -f ./docker-compose.yml up test-mysql test-redis
