import { setConversations } from "../redux/conversationSlice"
import api from "./axios"

export const getConversations = async(dispatch)=>{
    try {
      const data = await api.get("/chat/get-conversations")
      dispatch(setConversations(data.data))
      console.log(data.data)
    } catch (error) {
      console.log(`get conversation error ${error}`)
    }
}