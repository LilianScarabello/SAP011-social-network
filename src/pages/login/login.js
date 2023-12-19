import { login } from '../../firebase/firebaseAuth.js';
import './login.css';
import '../register/register.js';

export default () => {
  const container = document.createElement('section');

  const template = `
    <form class=boxOne> 
    <img src="./assets/SweetHub.png" alt="SweetHub Image" class="logo">
    <div class=containerLogin>
      <label for="login">Login:</label>
      <input id="email" class="inputLogin" type="text" placeholder=" Digite seu email" autofocus="true" />
      <label for="pwd">Senha:</label>
      <input id="pwd" class="inputLogin" type="password" placeholder=" Digite sua senha" />
      <input id="submitbtn" type="submit" value="Entrar" class"btn" />
      <p>Não tem um cadastro?<br>Clique no botão abaixo e cadastre-se</p>
      <button id="registerBtn">Cadastrar</button> 
    </div>
    </form>
  `;

  container.innerHTML = template;

  const submitBtn = container.querySelector('#submitbtn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#pwd').value;
    console.log(email, password);

    login(email, password)
      .then(() => {
        // ir para o feed
        window.location.hash = '#feed';
      })
      .catch(() => {
        // erro na tela
        alert('erro ao logar');
      });
  });

  const registerBtn = container.querySelector('#registerBtn');

  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#cadastro';
  });

  return container;
};
