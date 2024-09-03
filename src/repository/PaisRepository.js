import express from "express"

export default class PaisRepository {

    async inserir(conn, pais) {

        let sql =`
            INSERT INTO public.pais
                (id, 
                sigla, 
                idioma, 
                nome)
            VALUES
                (nextval('pais_id_seq'::regclass), 
                '${pais.sigla}', 
                '${pais.idioma}', 
                '${pais.nome}');    
        `
        try {
            let result = await conn.query(sql, [])
            return result.rowCount > 0
        }
        catch( Ex ) {
            return false
        }
    }

    async buscar(conn, pais) {
        let sql =`
            select 
                t.sigla,
                t.idioma,
                t.nome 
            from public.pais t
            where t.id = ${pais.id}
        `

        try {
            let  result = await conn.query(sql, [])
            
            pais.sigla = result.rows[0].sigla
            pais.idioma = result.rows[0].idioma
            pais.nome = result.rows[0].nome

            console.log(pais)

            return result.rowCount > 0
        }
        catch( Ex ) {
            return false
        }
    }

    async buscarPorNome(conn, nome) {
        let sql =`
            select	t.id,
                t.sigla,
                t.idioma,
                t.nome
            from public.pais t
            where UPPER(t.nome) like '%${nome.toUpperCase()}%'
        `
        try {
            let result = await conn.query(sql, [])
            return result.rows
        }
        catch( Ex ) {
            return false
        }
    }
    async buscarPorIdioma(conn, idioma) {
        let sql =`
            select	t.id,
                t.sigla,
                t.idioma,
                t.nome
            from public.pais t
            where UPPER(t.idioma) like '%${idioma.toUpperCase()}%'
        `
        try {
            let result = await conn.query(sql, [])
            return result.rows
        }
        catch( Ex ) {
            return false
        }
    }
}