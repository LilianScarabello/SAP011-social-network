export default () => {
  const container = document.createElement("section");

  const template =`
    <form> 
      <label for="login">Login:</label>
      <input type="text" id="login" name="login">
      <label for="pwd">Senha:</label>
      <input type="password" id="pwd" name="pwd">  
    </form>
    <button type="botton">Entrar</button>
  `;

  container.innerHTML = template;

  return container;

}