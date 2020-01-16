docker run \
    --name postgres \
    -e POSTGRES_USER=denysrodrigues \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

    docker ps 
    docker exec -it postgres /bin/bash

docker run \
        --name adminer \
        -p 8080:8080 \
        --link postgres:postgres \
        -d \
        adminer




##------------MONDODB
docker run \
   --name mongodb \
   -p 27017:27017 \
   -e MONGO_INITDB_ROOT_UESRNAME=admin \
   -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
   -d \
   mongo:4

docker run \
   --name mongoclient \
   -p 3000:3000 \
   --link mongodb:mongodb \
   -d \
   mongoclient/mongoclient

sudo docker run \
--name mongoclient \
-p 3000:3000 \
-d \
-e MONGO_URL=mongodb://admin:senhadmin@mongodb:27017/admin \
--link mongodb:mongodb \
mongoclient/mongoclient
