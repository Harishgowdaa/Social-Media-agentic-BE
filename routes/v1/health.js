import express from "express";
import agents from "../../core/v1/User/user.routes.js";

const router = express.Router();

router.use("/agentic", agents);

export default router;
