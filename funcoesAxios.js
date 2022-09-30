const url = "http://localhost:3000/user";
import { boxUsuarios, cadNome, cadEmail, cadSenha } from "./index.js";

// buscar todos usuarios do banco
export function getTodosUsuarios() {
  axios
    .get(url)
    .then((result) => {
      const usuarios = result.data;

      Object.keys(usuarios).forEach((key) => {
        const idUser = usuarios[key].id;
        const nameUser = usuarios[key].nome;
        const emailUser = usuarios[key].email;
        boxUsuarios.innerHTML += `
        <li> ${idUser} O Usuario nome: ${nameUser} e email: ${emailUser}</li> `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// buscar um usuario
export function getUmUsuario(id) {
  axios
    .get(`${url}/${id}`)
    .then((resultado) => {
      const usuario = resultado.data[0][0];
      console.log(usuario);
    })
    .catch((error) => {
      console.log(error);
    });
}

//cadastrar um usuario
export let test = 0
export function postAddUsuario() {
  const nome = cadNome.value;
  const email = cadEmail.value;
  const senha = cadSenha.value;
  axios
    .post(`${url}`, { nome, email, senha })
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

}
