import express from "express"
import { Login, Logout } from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/login",Login)
authRouter.get("/logout",Logout)
export default authRouter
