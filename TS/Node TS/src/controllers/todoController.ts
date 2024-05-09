import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new todo for a specific user
export const createTodo = async (req: Request, res: Response) => {
    const { userId, title, content } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(userId) },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newTodo = await prisma.todo.create({
            data: {
                title,
                content,
                user: { connect: { id: Number(userId) } },
            },
        });
       return res.status(201).json({ data: newTodo });
    } catch (error) {
        console.error('Error creating todo:', error); // Logging the error
       return res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all todos for a specific user
export const getAllTodosByUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(userId) },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const todos = await prisma.user.findUnique({
            where: { id: Number(userId) },
            select:{
                todos:true
            }
        });

        // const todos = await prisma.todo.findMany({
        //     where: { userId: Number(userId) },
        // });
       return res.status(200).json({ data: todos });
    } catch (error) {
        console.error('Error getting todos by user:', error); // Logging the error
       return res.status(500).json({ error: 'Internal server error' });
    }
};


export const getAllTodos = async (req: Request, res: Response) => {
    try {
        const todos = await prisma.todo.findMany();
       return res.status(200).json({ data: todos });
    } catch (error) {
        console.error('Error getting all todos:', error); // Logging the error
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a todo for a specific user
export const deleteTodo = async (req: Request, res: Response) => {
    const todoId = req.params.todoId;
    try {
        const todo = await prisma.todo.findUnique({
            where: { id: Number(todoId) },
        });
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        await prisma.todo.delete({
            where: { id: Number(todoId) },
        });
       return res.status(204).end();
    } catch (error) {
        console.error('Error deleting todo:', error); // Logging the error
       return res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a todo for a specific user
export const updateTodo = async (req: Request, res: Response) => {
    const todoId = req.params.todoId;
    const { title, content } = req.body;
    try {
        const todo = await prisma.todo.findUnique({
            where: { id: Number(todoId) },
        });
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        const updatedTodo = await prisma.todo.update({
            where: { id: Number(todoId) },
            data: { title, content },
        });
       return res.status(200).json({ data: updatedTodo });
    } catch (error) {
        console.error('Error updating todo:', error); // Logging the error
       return res.status(500).json({ error: 'Internal server error' });
    }
};
