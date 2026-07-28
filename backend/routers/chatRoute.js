import express from "express"
import { createConversation, getConversations, saveMessage, updateConversation } from "../controllers/chatController.js"

const chatRouter = express.Router()

chatRouter.get("/create-conversation",createConversation)
chatRouter.post("/update-conversation",updateConversation)
chatRouter.get("/get-conversations",getConversations)
chatRouter.post("/save-message",saveMessage)

export default chatRouter