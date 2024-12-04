import express from "express";
import { findAllUser,register } from "../controller/auth.controller.js";

const router = express.Router();


router.get('/findAllUser',findAllUser);
router.post("/register",register);
router.post("/login",login);

export default router;
