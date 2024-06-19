import veiculo from "../models/veiculo_model.js"

export const getVeiculos = async(req, res) => {
    try {
        const veiculos = await veiculo.findAll()
    } catch (e) {
        console.log("Error ao acessar a tabela veiculo")
    }
}
