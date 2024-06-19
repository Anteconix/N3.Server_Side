import {Sequelize} from "sequelize"

const db = new Sequelize('carro', 'root','',{
    host:'localhost',
    dialect:'mysql'
})
export default db