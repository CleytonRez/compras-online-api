import express from "express"
import comprasControllers from "./controllers/comprasControllers"

const app = express()
app.use(express.json())

comprasControllers(app)


app.listen(3000)
