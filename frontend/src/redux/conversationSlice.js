import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
  name:"user",
  initialState:{
    conversations:[]
  },
  reducers:{
    setConversations:(state,action)=>{
      state.conversations=action.payload
    },
    addConversation:(state,action)=>{
      state.conversations.unshift(action.payload)    // unshift is a array operation to put something on the start
    }
  }
})

export const {setCoversations,addConversation} = conversationSlice.actions
export default conversationSlice.reducer;