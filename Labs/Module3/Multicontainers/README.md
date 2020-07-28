## Running locally

### Requirements: 
1. Create a folder in `c:\data` (using Windows) or change this one for a folder or mount in Linux (Modify the docker-compose for this change).
2. Rename the file `docker-compose-local.yml` to `docker-compose.yml`. 
    -  If you haven't built the containers first try the following command: `docker-compose up --build` (This command build and run the images). 
    -  If you have already built the containers and you want to run locally, use `docker-compose.yml` and run this command: `docker-compose up` or detach with `docker-compose up -d`
3. Then browse to **http://localhost:3000** this will do a request to **http://node-server:3001/api/items**
4. Press (ctrl + c) twice to exit or docker stop all containers with `docker stop $(docker ps -a -q)` 

## Deploying to Azure Container Registry

1. Run `docker images` and copy image id to tag  
2. `docker login <yourcontainer>.azurecr.io`
3. `docker tag <tag-id> <yourcontainer>.azurecr.io/client:01`
4. `docker push <yourcontainer>.azurecr.io/client:01`
5. `docker tag <tag-id> <yourcontainer>.azurecr.io/server:01`
6. `docker push <yourcontainer>.azurecr.io/server:01`

## Deploying to Azure Web Apps

1. Use `docker-compose-azure-acr.yml`  or `docker-compose-azure-dockerhub.yml`
2. Create a path mapping in the portal or using az cli, with **media** as the name using azure files and pointing to **/data**