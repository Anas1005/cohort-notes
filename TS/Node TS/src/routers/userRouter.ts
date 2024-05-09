// import express from 'express';
// import {
//   createUser,
//   getUserByEmail,
//   updateUserAgeByName,
//   deleteUserByEmail,
// } from '../controllers/userController.js';
 

// const router = express.Router();

// router.post('/create', createUser);
// router.get('/users/:email', getUserByEmail);
// router.patch('/users/:name', updateUserAgeByName);
// router.delete('/users/:email', deleteUserByEmail);

// export default router;



import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// Routes for handling user operations
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

export default router;

