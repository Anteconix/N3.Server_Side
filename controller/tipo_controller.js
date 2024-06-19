import tipo from "../models/tipo_model.js"

export const getTipos = async(req, res) => {
    try {
        const tipos = await tipo.findAll()
    } catch (e) {
        console.log("Error ao acessar a tabela tipo")
    }
}
