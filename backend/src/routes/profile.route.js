import express from "express"
import {showProfile,editProfile} from "../controllers/profile.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

router.get("/me", protectRoute ,showProfile);
router.post("/me/editProfile",protectRoute,editProfile)

export default router