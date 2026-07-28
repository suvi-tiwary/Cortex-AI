import axios from "axios"
export const agent = async(req,res)=>{
    try {
        const prompt = req.body

        const data =  await axios.post("/chat/save-message",{
            "role":"user",
            content:prompt
        })
       

    } catch (error) {
        
    }
}