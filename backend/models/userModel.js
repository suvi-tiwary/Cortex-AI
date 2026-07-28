import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String,
    unique:true
  },
  firebaseuid:{
    type:String
  }
},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User