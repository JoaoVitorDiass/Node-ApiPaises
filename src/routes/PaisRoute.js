import express from "express"
import PaisController from "../controllers/PaisController.js"

const paisRoute = express.Router()
const paisController = new PaisController() 

paisRoute.post("/pais/inserir/", paisController.inserir)
paisRoute.get("/pais/buscar/:id", paisController.buscar)
paisRoute.get("/pais/buscar/nome/:nome", paisController.buscarPorNome)
paisRoute.get("/pais/buscar/idioma/:idioma", paisController.buscarPorIdioma)

export default paisRoute