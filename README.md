# How To Generate a Random Key

Terminal inside node-jwt directory...
##### 256-bit key

`openssl rand -hex 256 > secret256.key`

##### 512-bit key

`openssl rand -hex 512 > secret512.key`

## Usage

`node index.js`


## Postman 

Get Token -> POST `localhost:3000/login`

Send Token -> GET `localhost:3000/privateStuff`
Authorization tab => Bearer Auth => Paste token