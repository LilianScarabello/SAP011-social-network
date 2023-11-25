import { cadastrar } from "../../firebase/firebaseAuth.js"

export default () => {
  const container = document.createElement("section");

  const template = `
      <form> 
        <label for="name">Nome:</label>
        <input id="nome" type="text" placeholder="Digite seu nome" />
        <label for="email">E-mail:</label>
        <input id="email" type="text" placeholder="Digite seu email" autofocus="true" />
        <label for="pwd">Senha:</label>
        <input id="pwd" type="password" placeholder="Digite uma senha" />    
        <input id="submitbtn" type="submit" value="Cadastrar" class"btn" /> 
      </form>
    `;

  container.innerHTML = template;

  const submitBtn = container.querySelector("#submitbtn");
  submitBtn.addEventListener("click", (e) => { 
    e.preventDefault()
    const email = container.querySelector("#email").value;
    const password = container.querySelector("#pwd").value;
    console.log(email,password)

    cadastrar (email, password)
    .then( () => {
      window.location.hash = '#feed';
    })
    .catch( () => {
       alert("erro ao cadastrar o usuario");
    })
  })

  return container;

}