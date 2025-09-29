# Docker Practice Project

## Using `mongo` and `mongo-express` docker images

### Commands to create containers

Run backend API in vs code
```
node server.js
```
Create specific network
```
docker network create mongo-network
```

Create mongo container
```
docker run -d ^
-p 27017:27017 ^
--name mongo ^
--network mongo-network ^
-e MONGO_INITDB_ROOT_USERNAME=admin ^
-e MONGO_INITDB_ROOT_PASSWORD=amar ^
mongo
```

Create mongo-express container
```
docker run -d ^
-p 8081:8081 ^
--name mongo-express ^
--network mongo-network ^
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin ^
-e ME_CONFIG_MONGODB_ADMINPASSWORD=amar ^
-e ME_CONFIG_MONGODB_URL="mongodb://admin:amar@mongo:27017" ^
mongo-express
```

Access `http://localhost:8081` in browser and enter `Username = admin` & `Password = pass` (default) to sign in to MongoDB UI.

Access `http://localhost:5050` in browser to interact with UI where you can add user and see all users.

## UI Screenshots

### Docker Practice UI
![Docker Practice UI](./Docker%20Practice%20UI.png)

### MongoDB UI
![MongoDB UI](./MongoDB%20UI.png)
