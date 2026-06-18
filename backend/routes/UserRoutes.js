import express from "express"
import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controllers/userController.js"

const router = express.Router()

router.get("/",getUser)
router.post("/",createUser)
router.get("/:id",getUserById)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

export default router