import api from "./axios"

export const getConversations = async()=>{
    try {
      const data = await api.get("/get-conversations")
      console.log(data)
    } catch (error) {
      console.log("get conversation error")
    }
}