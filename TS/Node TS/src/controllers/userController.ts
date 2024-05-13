
//----------------------------------------------------------MongoDB------------------------------------------------------

// import { Request, Response } from 'express';
// import User from '../models/userModel.js';

// async function createUser(req: Request, res: Response) {
//   const { name, email, age } = req.body;

//   try {
//     const newUser = new User({ name, email, age });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully', user: newUser });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// async function getUserByEmail(req: Request, res: Response) {
//   const { email } = req.params;

//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       res.status(200).json({ user });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error finding user by email:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// async function updateUserAgeByName(req: Request, res: Response) {
//   const { name } = req.params;
//   const { age } = req.body;

//   try {
//     await User.updateOne({ name }, { age });
//     res.status(200).json({ message: 'User age updated successfully' });
//   } catch (error) {
//     console.error('Error updating user age:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// async function deleteUserByEmail(req: Request, res: Response) {
//   const { email } = req.params;

//   try {
//     await User.deleteOne({ email });
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// export { createUser, getUserByEmail, updateUserAgeByName, deleteUserByEmail };
   






//----------------------------------------------Prisma----------------------------------
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

// Zod is primarily used for data validation and schema definition in TypeScript applications, offering:

// - Input Validation
// - API Request Validation
// - Form Validation
// - Database Model Validation
// - Configuration Validation
// - Type Inference


//Here it is used for valdating creatUser request for time-being..

// Create a new user
const UserSchema = z.object({
  username: z.string().min(3).max(30), // Example validation rules
  email: z.string().email(),
});

// Define the type for the user input data using Zod inference
type CreateUserType = z.infer<typeof UserSchema>;

export const createUser = async (req: Request, res: Response) => {
  // const { username, email } = req.body;

  // Validate the user input data against the Zod schema
  try {
    const validatedInput: CreateUserType = UserSchema.parse(req.body);

    // If validation passes, create the new user in the database
    const newUser = await prisma.user.create({
      data: validatedInput,
    });

    return res.status(201).json({ data: newUser });
  } catch (error) {
    console.error('Error creating user:', error); // Logging the error

    // If validation fails, return a 400 error response with details
    return res.status(400).json({ error: 'Invalid user data', details: error });
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        todos: true,
      },
    });
    return res.status(200).json({ data: users });
  } catch (error) {
    console.error('Error getting all users:', error); // Logging the error
    return res.status(500).json({ error: 'Internal server error' });
  }
};


// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      return res.status(200).json({ data: user });
    }
  } catch (error) {
    console.error('Error getting user by ID:', error); // Logging the error
    return res.status(500).json({ error: 'Internal server error' });
  }
};




// Update user by ID
export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { username, email },
    });
    return res.status(200).json({ data: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error); // Logging the error
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete user by ID
export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.status(204).end();
  } catch (error) {
    console.error('Error deleting user:', error); // Logging the error
    return res.status(500).json({ error: 'Internal server error' });
  }
};