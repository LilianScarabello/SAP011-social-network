import { login } from '../../firebase/firebaseAuth.js'

export default () => {
  const container = document.createElement("section");

  const template = `
    <form> 
      <label for="login">Login:</label>
      <input id="email" type="text" placeholder="Digite seu email" autofocus="true" />
      <label for="pwd">Senha:</label>
      <input id="pwd" type="password" placeholder="Digite sua senha" />
      <input id="submitbtn" type="submit" value="Entrar" class"btn" />  
    </form>
  `;

  container.innerHTML = template;

  const submitBtn = container.querySelector("#submitbtn");

  submitBtn.addEventListener("click", () => {
    const email = container.querySelector("#email").value;
    const password = container.querySelector("#pwd").value;;

    login(email, password)
      .then( () => {
        //ir para o feed
        window.location.hash = '#feed';
      })
      .catch( () => {
         //erro na tela
         alert("erro ao logar");
      })
  })

  return container;

}