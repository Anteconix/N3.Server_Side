import express from "express"
import { getTipos } from "../controller/tipo_controller.js"

const router = express.Router()

router.get('/tipo', getTipos)

export default router