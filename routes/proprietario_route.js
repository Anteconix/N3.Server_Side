import express from "express"
import { getProprietarios } from "../controller/proprietario_controller.js"

const router = express.Router()

router.get('/proprietario', getProprietarios)

export default router