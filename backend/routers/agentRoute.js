import express from "express"
import { agent } from "../controllers/agentController.js"


const agentRouter = express.Router()

agentRouter.post("/agent",agent)
export default agentRouter
