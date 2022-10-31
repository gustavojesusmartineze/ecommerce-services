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
