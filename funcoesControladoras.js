const db = require("./db");


//buscar usuarios
async function buscarAll() {
  const usuarios = await db.buscarTodosUsruarios();
  return usuarios;
}

//buscar usuario
async function buscarUmUsuario(id) {
  const usuario = await db.buscarUsuario(id);

  return usuario;
}

//inserir usuarios

async function inserir(nome, email, senha) {
  await db.addUsuario(nome, email, senha);
}

// atualizar usuario
async function atualizar(id, info) {
  // info deve ser pasada em obj{"nome","email","senha"}
  await db.atualizarUsuario(id, info);
}
//deletar usuario

async function deletar(id) {
  await db.deletarUsuario(id);
}




module.exports = {
  buscarAll,
  inserir,
  atualizar,
  deletar,
  buscarUmUsuario
};
