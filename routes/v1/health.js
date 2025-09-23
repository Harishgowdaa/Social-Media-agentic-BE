import express from "express";
import agents from "../../core/v1/agents/agents.routes.js";

const router = express.Router();

router.use("/agentic", agents);

export default router;
