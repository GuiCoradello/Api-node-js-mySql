require("dotenv").config({ path: "var.env" });
// conexão ao banco de dados
async function conexao() {
  if (global.connection && global.connection.state !== "disconnected") {
    return global.connection;
  }
  const mysql = require("mysql2/promise");
  const root = process.env.ROOT;
  const senha = process.env.SENHA;
  const servidor = process.env.SERVIDOR;
  const porta = process.env.PORTA;
  const dbNOME = process.env.NOME_BANCO;
  const connection = await mysql.createConnection(
    ` mysql://${root}:${senha}@${servidor}:${porta}/${dbNOME}` //infos do baco de dados
  );
  console.log("conectado ao Mysql");
  global.connection = connection;
  return connection;
}

// funçoes de acesso ao banco

// buscar todos usurarios
async function buscarTodosUsruarios() {
  const connect = await conexao();
  const query = "SELECT * FROM usuarios ;";
  const [usuarios] = await connect.query(query);
  return usuarios;
}

//buscar um usuario
async function buscarUsuario(id) {
  const connect = await conexao();
  const query = "SELECT * FROM usuarios WHere id = ?;";

  return await connect.query(query, id);
}

// inserir usuarios
async function addUsuario(nome, email, senha) {
  const connect = await conexao();
  const query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ? );";
  const valores = [nome, email, senha];

  console.log(await connect.query(query, valores));
  await connect.query(query, valores);
}

//Atualizar usuario
async function atualizarUsuario(id, info) {
  const connect = await conexao();
  const query = "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id=?";
  const valores = [info.nome, info.email, info.senha, id];
  await connect.query(query, valores);
}

// deletar usuario
async function deletarUsuario(id) {
  const connect = await conexao();
  const query = "DELETE FROM usuarios WHERE id =?";
  const idUsuario = Number(id);
  await connect.query(query, idUsuario);
}

module.exports = {
  buscarTodosUsruarios,
  addUsuario,
  atualizarUsuario,
  deletarUsuario,
  buscarUsuario,
};
