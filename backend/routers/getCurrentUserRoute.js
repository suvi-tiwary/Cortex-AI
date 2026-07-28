import express from "express"
import { getCurrentUser } from "../controllers/getCurrentUser.js"


const getCurrentUserRoute = express.Router()

getCurrentUserRoute.get("/me",getCurrentUser)
export default getCurrentUserRoute
