import {
  getTodosUsuarios,
  getUmUsuario,
  postAddUsuario,
  
} from "./funcoesAxios.js";
export const boxUsuarios = document.querySelector("[data-usuarios]");
export const cadNome = document.querySelector("[data-cadNome]");
export const cadEmail = document.querySelector("[data-cadEmail]");
export const cadSenha = document.querySelector("[data-cadSenha]");

const btnCadastrarUsuario = document.querySelector(
  "[data-botaoCadastrarUsuario]"
);
const btnAtualizarBanco = document.querySelector("[data-botaoAtualizarBanco]");
//botao de atualizar o banco de dados
btnAtualizarBanco.addEventListener("click", getTodosUsuarios);
// botao cadastrar usuarios
btnCadastrarUsuario.addEventListener("click", postAddUsuario);

