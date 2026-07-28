import redis from "../config/redis.js"


export const protect = async(req,res,next)=>{
      try {
        const sessionId = req.cookies?.sessionId
        if(!sessionId){
            return res.status(400).send("unauthorized, plz login to continue")
        }
        let session =  await redis.get(`sessionId-${sessionId}`)
        if(!session){
            return res.status(400).send("session expired")
        }
        
        req.user = JSON.parse(session)
        console.log("req.user:",req.user)
        next()
      } catch (error) {
        return res.status(500).send("protect middleware error")
      }
}