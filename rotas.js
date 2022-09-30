const fc = require("./funcoesControladoras");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//buscar todos usuarios
app.get("/user", async (req, res) => {
  const result = await fc.buscarAll();
  res.json(result);
});

//buscar Um usuario
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  const usuario = await fc.buscarUmUsuario(id);
  return res.json(usuario);
});

// inserir
app.post("/user", async (req, res) => {
  const { nome, email, senha } = req.body;

  await fc.inserir(nome, email, senha);
});

app.listen(port, () => {
  console.log(`rodando na porta: ${port}`);
});
