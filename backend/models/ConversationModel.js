import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    title:{
        type:String,
        default:"New Chat"
    },
    userId:{
        type:String
    },
    message:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
            }
          ]
    }
,{timestamps:true})


const Conversation = mongoose.model("Conversation",ConversationSchema)
export default Conversation