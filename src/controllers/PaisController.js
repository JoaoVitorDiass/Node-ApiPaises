import express from "express"
import conn from "../utils/Conexao.js"
import Pais from "../entities/Pais.js"

export default class PaisController {

    async inserir(req, res) {
        const pais = new Pais(
            req.body.id,
            req.body.sigla,
            req.body.idioma,
            req.body.pais
        )
        let result = await pais.inserir(conn)
        return result ? res.status(201).send("Criado com sucesso!") : res.status(500).send("Erro ao cadastrar!")
    }

    async buscar(req, res) {
        const pais = new Pais(
            req.params.id
        )
        let result = await pais.buscar(conn)
        return result ? res.status(200).send(pais) : res.status(500).send("Erro ao buscar Pais!")
    }
    async buscarPorNome(req, res) {
        const pais = new Pais()
        let result = await pais.buscarPorNome(conn, req.params.nome)
        return result && result.length > 0 ? res.status(200).send(result) : res.status(500).send("Erro ao buscar paises por nome")
    }
    async buscarPorIdioma(req, res) {
        const pais = new Pais()
        let result = await pais.buscarPorIdioma(conn, req.params.idioma)
        return result && result.length > 0 ? res.status(200).send(result) : res.status(500).send("Erro ao buscar paises por idioma")
    }

}