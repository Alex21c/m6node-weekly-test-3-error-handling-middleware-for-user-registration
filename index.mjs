import express from 'express';
import morgan from 'morgan';
import ErrorHandlingMiddleware from './Middlewares/ErrorHandlingMiddleware.mjs';
import UserController from './Controllers/User.Controller.mjs';
// Create a Server
const server = new express();
const PORT = 4000;

server.use(express.urlencoded({extended: true}));
server.use(morgan('tiny'));
server.post('/register-user', ErrorHandlingMiddleware, UserController.storeUserInfoIntoDB);

server.listen(PORT, ()=>{
  console.log(`Server is up and running at port ${PORT}`);
})