![](image.png)
# MyNerdyHobby by Gützi-Gang


## Requirements

 - NodeJS 8.11 (developed in 8.11 and upwards, should work with earlier versions too)
 - Working internet access to connect to
   external MongoDB database

## Quickstart

    $ npm install && npm start
 That's it. The latter starts two concurrently running processes:

 - `nodemon server/server.js` live serving backend on port 4000
 - `ng serve` live serving frontend on port 4200

Entrypoint is at `http://localhost:4200`.

## Database access
We are using a free MongoDB cluster provided by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). The backend uses [mongoose](https://github.com/Automattic/mongoose) to communicate with the database. For debugging purposes, we used MongoDB compass to connect to the database:
```
mongodb+srv://mynerdyhobby:myn3rdyhobby@cluster0-qhia4.mongodb.net/admin
```
Alternative: MongoDB shell 3.6+ (password: `myn3rdyhobby`): 
```
mongo "mongodb+srv://cluster0-qhia4.mongodb.net/test" --username mynerdyhobby
```


## Backend features

 - REST api build on [express](https://github.com/expressjs/express)
 - based on model-controller-service pattern
 - token based authentication with [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
 - advanced role-based authorization
 - custom error handler middleware

## Frontend features
- Nerdy-Score to present experience on website
- Fancy Upvote Buttons with colored overlay
- profile containing users posts and Nerdy-Score
- tile design for better overview

## Note: 
The final report, including important information to not implemented features, can be found in another document in the Git. 
