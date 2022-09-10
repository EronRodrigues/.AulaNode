const express = require('express')
const cors = require('cors')
const app = express()
const contatos = require("./contatos")
const usuarios = require("./usuarios")

const port = process.env.PORT
app.use(express.json())
app.use(cors())
app.use('/contatos', contatos)
app.use('/usuarios', usuarios)

app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`)
})