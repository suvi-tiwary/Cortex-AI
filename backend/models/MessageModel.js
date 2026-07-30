import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
    role: {
        type: String,
        enum: ['user', 'ai', 'system', 'human', 'you'],
        default: 'user'
    },
    content: {
        type: String
    }
}, { timestamps: true })

const Message = mongoose.model("Message", MessageSchema)
export default Message