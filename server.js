import express, { response } from "express"
import paisRoute from "./src/routes/paisRoute.js"
import usuarioRoute from "./src/routes/UsuarioRoute.js"

global.SECRET = 'ehotrikas';

const app = express()
app.use(express.json())

app.use(paisRoute)
app.use(usuarioRoute)

app.get("/", (req, res)=>{
    return res.status(200).send("Server running on port 8081")
})

app.listen(8081, () => {
    console.log("Server running on port 8081")
})