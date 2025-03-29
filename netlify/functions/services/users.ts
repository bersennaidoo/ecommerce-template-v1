import { prisma } from '../db/prisma';
import { User } from '../models/User';
//import bcrypt from "bcrypt";
import { sign } from 'jsonwebtoken';
import  env  from '../config/env';

const createUser = async (user: any) => {
  try {
    /*const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(user.password, salt);*/
    const createdUser: any = await prisma.user.create({ data: { ...user } });
    return createdUser;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error(`Failed to retrieve users: ${error.message}`);
  }
};

const getUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new Error(`User not found`);
    }
    return user;
  } catch (error) {
    throw new Error(`Failed to retrieve user: ${error.message}`);
  }
};

const updateUser = async (id: string, user: User) => {
  try {
    const updatedUser = await prisma.user.update({ where: { id }, data: user });
    return updatedUser;
  } catch (error) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
};

const deleteUser = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (error) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
};

const login = async (user: any) => {
  try {
    const foundUser: any = await prisma.user.findFirst({ where: { email: user.email } });
    if (!foundUser) {
      throw new Error(`User not found`);
    }
    //const result = bcrypt.compareSync(user.password, foundUser.password);
    if (foundUser.password !== user.password) {
      throw new Error(`Invalid password`);
    }
    const token = sign({ userId: foundUser.id }, env.JWT_SECRET, { expiresIn: '1h' });
    console.log(token)
    return token;
  } catch (error) {
    throw new Error(`Failed to login: ${error.message}`);
  }
};

export { createUser, getUsers, getUser, updateUser, deleteUser, login };