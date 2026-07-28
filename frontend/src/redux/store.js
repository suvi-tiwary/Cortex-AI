import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../redux/userSlice'
import conversationReducer from "./conversationSlice"

export default configureStore({
  reducer: {
    user:userReducer,
    conversation:conversationReducer
  },
})