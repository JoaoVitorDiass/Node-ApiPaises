import express from "express"
import PaisRepository from "../repository/PaisRepository.js"

export default class Pais {
    
    constructor(id, sigla, idioma, nome) {
        this.id = id
        this.sigla = sigla
        this.idioma = idioma
        this.nome = nome
    }

    inserir(conn) {
        const repo = new PaisRepository()
        return repo.inserir(conn,this)
    }

    buscar(conn) {
        const repo = new PaisRepository()
        return repo.buscar(conn,this)
    }
    buscarPorNome(conn, nome) {
        const repo = new PaisRepository()
        return repo.buscarPorNome(conn, nome)
    }
    buscarPorIdioma(conn, idioma) {
        const repo = new PaisRepository()
        return repo.buscarPorIdioma(conn, idioma)
    }
}