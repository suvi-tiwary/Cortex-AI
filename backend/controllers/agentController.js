import Message from "../models/MessageModel.js"
import Conversation from "../models/ConversationModel.js"
import { graph } from "../graph/graph.js"

export const agent = async (req, res) => {
    try {
        const { prompt, conversationId } = req.body

        // Save user message directly (avoid server-side HTTP to protected route)
        const message = await Message.create({
            role: "user",
            content: prompt,
            conversationId
        })

        // Append message id to conversation messages
        if (conversationId) {
            await Conversation.findByIdAndUpdate(conversationId, {
                $push: { message: message._id }
            })
        }

        const result = await graph.invoke({
            conversationId,
            prompt
        })

          const aiMessage = await Message.create({
            role: "ai",
            content: result.ai,
            conversationId
        })

        // Append message id to conversation messages
        if (conversationId) {
            await Conversation.findByIdAndUpdate(conversationId, {
                $push: { message: aiMessage._id }
            })
        }

        return res.status(200).send(result.ai)
    } catch (error) {

        return res.status(500).json(`agent error ${error}`)
    }
}