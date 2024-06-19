import express from "express"
import { getVeiculos } from "../controller/veiculo_controller.js"

const router = express.Router()

router.get('/veiculo', getVeiculos)

export default router