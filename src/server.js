const express = require('express')
const server = express()

//crinado a variavel e importando para nosso servidor
const nunjucks = require('nunjucks')

// configuar pasta public
server.use(express.static("public"))

nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//configuar caminhos da aplicação
//pagina inicial

server.get("/", (req, res) => {
  return res.render("index.html")
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.get("/search", (req, res) => {
  return res.render("search-results.html")
})

//porta do servidor
server.listen(3000)
