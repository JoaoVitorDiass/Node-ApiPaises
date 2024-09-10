import express from "express"

export default class UsuarioRepository {

    async buscar(conn, usuario) {

        let sql =`
            SELECT login, senha
            FROM public.usuario
            where upper(login) like upper('${usuario.login}')
            and senha like '${usuario.senha}';
        `


        try {
            let result = await conn.query(sql, [])
            return result.rowCount > 0
        }
        catch( Ex ) {
            return false
        }
    }
}