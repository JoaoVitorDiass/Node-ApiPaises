import express from "express"
import UsuarioRepository from "../repository/UsuarioRepository.js"

export default class Usuario {
    
    constructor(login, senha) {
        this.login = login
        this.senha = senha
    }

    buscar(conn) {
        const repo = new UsuarioRepository()
        return repo.buscar(conn, this)
    }

}