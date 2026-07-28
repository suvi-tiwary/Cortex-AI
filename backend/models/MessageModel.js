import mongoose, { model, Mongoose } from "mongoose";

const MessageSchema = new mongoose.Schema({
    Conversation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Conversation'
    },
    role:{
        type:String,
        enum:['you',"ai"]
    },
    content:{
        type:String
    }


},{timestamps:true})

const Message = mongoose.model("Message",MessageSchema)
export default Message