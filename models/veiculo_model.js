import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Veiculo = db.define('veiculo', {
    cpf: {
        type: Sequelize.STRING(7),
        primaryKey: true
    },
    modelo_veiculo: {
        type: Sequelize.STRING(200)
    },
    preco_veiculo: {
        type: Sequelize.FLOAT(10)
    },
})

export default Veiculo