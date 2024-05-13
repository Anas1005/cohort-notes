import express from 'express';
import { createTodo, getAllTodos, getAllTodosByUser, deleteTodo, updateTodo } from '../controllers/todoController.js';


const router = express.Router();

// Create a new todo
router.post('/', createTodo);


router.get('/', getAllTodos);


// Get all todos for a specific user

router.get('/:userId', getAllTodosByUser);


// Delete a todo
router.delete('/:todoId', deleteTodo);

// Update a todo
router.put('/:todoId', updateTodo);

export default router;
