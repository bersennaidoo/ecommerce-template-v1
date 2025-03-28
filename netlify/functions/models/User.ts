import { z } from 'zod';

export type User = {
  id?: string
  email?: string
  password?: string
  name?: string
};