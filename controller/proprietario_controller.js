import proprietario from "../models/proprietario_model.js"

export const getProprietarios = async(req, res) => {
    try {
        const proprietarios = await proprietario.findAll()
    } catch (e) {
        console.log("Error ao acessar a tabela proprietario")
    }
}
