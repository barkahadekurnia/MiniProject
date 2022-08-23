import dotenv from "dotenv"
import express from "express"
dotenv.config()

const app = express()

const port = process.env.PORT || 3008

app.listen(port,()=>console.log(`Server listening port ${port}`))