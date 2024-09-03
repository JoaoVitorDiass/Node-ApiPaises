import express, { response } from "express"
import paisRoute from "./src/routes/paisRoute.js"

const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    return res.status(200).send("Server running on port 8081")
})

app.use(paisRoute)

app.listen(8081, () => {
    console.log("Server running on port 8081")
})