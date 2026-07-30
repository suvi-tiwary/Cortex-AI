
import { setMessage } from "../redux/messageSlice"
import api from "./axios"

export const getMessages = async(conversationId,dispatch)=>{
    try {
      const data = await api.get(`/chat/get-messages/${conversationId}`)
      dispatch(setMessage(data.data))
      console.log(data.data)
    } catch (error) {
      console.log(`get messages error ${error}`)
    }
}