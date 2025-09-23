import express from "express";
import AgentsController from "./agents.controller.js";
const router = express.Router();

router.get("/GoogleSignIn",AgentsController.signIn);

export default router;
