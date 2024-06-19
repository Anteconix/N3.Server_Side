import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Proprietario = db.define('proprietario', {
    cpf: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(200)
    },
    fone: {
        type: Sequelize.INTEGER
    },
})

export default Proprietario