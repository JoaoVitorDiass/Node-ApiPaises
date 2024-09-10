import express from "express"
import PaisController from "../controllers/PaisController.js"
import Auth from "../filter/Auth.js"

const paisRoute = express.Router()
const paisController = new PaisController() 

paisRoute.post("/pais/inserir/", Auth, paisController.inserir)
paisRoute.get("/pais/buscar/:id", Auth, paisController.buscar)
paisRoute.get("/pais/buscar/nome/:nome", Auth, paisController.buscarPorNome)
paisRoute.get("/pais/buscar/idioma/:idioma", Auth, paisController.buscarPorIdioma)

export default paisRoute