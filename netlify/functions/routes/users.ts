import express, { Router, Request, Response } from 'express';
import { createUser, getUsers, getUser, updateUser, deleteUser, login } from '../services/users';
//import { createUser, getUsers, getUser, updateUser, deleteUser } from '../services/users';
import { User } from '../models/User';

export const router: Router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    const user: any = req.body;
    const createdUser: any = await createUser(user);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const user: any = req.body;
    const token = await login(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve users' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve user' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const updatedUser = await updateUser(id, user);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteUser(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
});
