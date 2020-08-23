curl -c cookie -X POST -H "Content-Type: application/json" -d '{"userId": "admin", "password": "password"}' localhost/login | jq
