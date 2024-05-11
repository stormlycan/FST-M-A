import express from 'express';
import { test } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.get("/", test)

export default userRoutes;