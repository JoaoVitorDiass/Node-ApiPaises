
import jwt from "jsonwebtoken";
import conn from "../utils/Conexao.js"
import Usuario from "../entities/Usuario.js";

export default class UsuarioController
{   
    async login (request, response) {
        let { login, senha } = request.body;
        if(login && senha) {
            const usuario = new Usuario(login, senha)
            let result = await usuario.buscar(conn)
            if( result ) {
                let token = jwt.sign({login},SECRET,{expiresIn:600});
                response.status(200).json({msg:'Login realizado com sucesso', token });
            }
            else {
                response.json({msg:'Dados inválidos'});
            }
        }
        else {
            response.json({msg:'Dados inválidos'});
        }
    }
}