export default () => {
  const container = document.createElement("section");

  const template = `
      <form> 
        <label for="name">Nome:</label>
        <input type="text" id="login">
        <label for="email">E-mail:</label>
        <input type="text" id="email">
        <label for="pwd">Senha:</label>
        <input type="password" id="pwd">  
        <label for="pwd">Confirmar senha:</label>
        <input type="password" id="pwdConf">  
      </form>
      <button type="botton">Cadastrar</button>
    `;

  container.innerHTML = template;

  return container;

}