# 📜 hszbook-frontend



> DISCLAIMER: To run hszbook-frontend you need dependency [hszbook-backend](https://github.com/timaxlucas/hszbook-backend)

![Schedule page](https://i.imgur.com/Z71KKXi.png)

## ✨ Quickstart

    npm install && npm start
    
    
## 🐋 Docker

Using nginx to serve in production

Building the image

    docker build . --tag hszbook-frontend
    
Creating and running container

    docker run -p 3000:80 --rm --name hszbook-frontend hszbook-frontend
