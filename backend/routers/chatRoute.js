import express from "express"
import { createConversation, getConversations, getMessages, saveMessage, updateConversation } from "../controllers/chatController.js"


const chatRouter = express.Router()

chatRouter.get("/create-conversation",createConversation)
chatRouter.post("/update-conversation",updateConversation)
chatRouter.get("/get-conversations",getConversations)
chatRouter.post("/save-message",saveMessage)
chatRouter.get("/get-messages/:conversationId",getMessages)

export default chatRouter