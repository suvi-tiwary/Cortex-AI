export const getCurrentUser = async(req,res)=>{
    try {
        return res.status(200).send(req.user)
    } catch (error) {
        return res.status(500).send(`error fetching current user ${error}`)
    }
}