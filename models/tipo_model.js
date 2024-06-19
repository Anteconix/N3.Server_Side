import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Tipo = db.define('tipo', {
    id_tipo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING(200)
    },
})

export default Tipo