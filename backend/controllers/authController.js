import redis from "../config/redis.js"
import User from "../models/userModel.js"
import {getAuth} from "firebase-admin/auth"
import {app} from "../config/firebase.js"

export const Login = async(req,res)=>{
    try {
        
    const {token}=req.body
    const decoded = await getAuth(app).verifyIdToken(token)
    console.log(decoded)
    let user = await User.findOne({firebaseuid:decoded.uid})

    if(!user){
        user =  await User.create({
        name:decoded.name,
        email:decoded.email, 
        firebaseuid:decoded.uid
       })
    }

    let sessionId = crypto.randomUUID()

    await redis.set(`sessionId-${sessionId}`,JSON.stringify({
        userid:user._id,
        name:user.name,
        email:user.email
    }),"EX",7*24*60*60)

    console.log("SESSION CREATED:", sessionId)

const testSession = await redis.get(`sessionId-${sessionId}`)
console.log("SESSION FROM REDIS:", testSession)

    res.cookie("sessionId",sessionId,{
        httpOnly:true,
        sameSite:"strict",
        secure:false,
        maxAge:7*24*60*60*1000
    })
    
    return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(`login with google error ${error}`)
    }

}

export const Logout = async(req,res)=>{
    try {
        const {sessionId} = req.cookie.sessionId
        await redis.del(`sessionId-${sessionId}`)
        await res.clearCookie("sessionId")
        return res.status(200).send("logout successful")
    } catch (error) {
        return req.status(500).send("Logout error")
    }
}