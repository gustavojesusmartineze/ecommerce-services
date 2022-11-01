# JVM - e-commerce website
This challenge consists in designing and implementing a new system intended to be used in an e-commerce website to present some products. This simple system is composed of 2 services, each of them exposing a number of specific REST endpoints.


## 1 - Build the images
```
docker compose build
```

## 2 - Run the containers
```
docker compose up -d
```

### 2.1 - Check status of the containers
```
docker compose ps
```

### 2.2 - Check logs for errors
```
docker compose logs
```

## 3 - Set data before continue
### 3.1 - Run migration from console
```
npm run migrations:run
```
### 3.2 - Run DB Seeders
```
npm run migrations:seed
```

## 4 - Now you can use the available endpoints 
You can use this [postman file](postman_collection.json)

### Login
```
POST http://localhost/api/auth/login

JSON DATA {
	"username": "sbarenski2",
	"password": "notasafepassword"
}
```

### Users
**List:**
```
GET http://localhost/api/user
```
**Show:**
```
GET http://localhost/api/user/{id}
```
**Create:**
```
POST http://localhost/api/user/

JSON DATA
{
	"name": "Gustavo Martinez",
	"username": "gustavomartinez",
	"password": "notasafepassword"
}
```
### Users - Auth
**Login:**
All users from seeder have same password: `notasafepassword`
```
POST http://localhost/api/auth/login

JSON DATA
{
	"username": "mspellsworth4",
	"password": "notasafepassword"
}
```

### Products
**Show:**
```
GET http://localhost/api/product/{product_id}
```

### Reviews
**Show:**
```
GET http://localhost/api/review/{product_id}
```
**Create:**
```
POST http://localhost/api/review/{product_id}
JSON DATA
{
	"score": 5
}
```
**Update:**
```
PUT http://localhost/api/review/{product_id}
JSON DATA
{
	"score": 2
}
```
**Delete:**
```
DELETE http://localhost/api/review/{product_id}
```
