import express from "express"
import cors from "cors"
import db from "./config/database.js"
import ProprietarioRota from "./routes/proprietario_route.js"
import VeiculoRota from "./routes/veiculo_route.js"
import TipoRota from "./routes/tipo_route.js"

import Proprietario from "./models/proprietario_model.js"
import Veiculo from "./models/veiculo_model.js"
import tipo from "./models/tipo_model.js"
import { escape } from "mysql2"

const server = express()
server.use(express.json())
server.use(cors())

try {
    await db.authenticate()
    console.log("Conexão com o MySql estabelecida")
} catch (e) {
    console.log("Conexão com o MySql NÃO estabelecida")
}

server.use(ProprietarioRota)
server.use(VeiculoRota)
server.use(TipoRota)

server.listen(5000, () => console.log ("Server Executando em http://localhost:5000"

))
