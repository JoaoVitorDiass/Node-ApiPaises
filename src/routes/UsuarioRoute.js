import * as express from "express";
import UsuarioController from "../controllers/UsuarioController.js"

const uroutes = express.Router();
const usuarioController = new UsuarioController();

//autentica o usuario
uroutes.post("/login", usuarioController.login);

export default uroutes