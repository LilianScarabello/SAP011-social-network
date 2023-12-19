import inicial from './pages/login/login.js';
import cadastro from './pages/register/register.js';
import feed from './pages/feed/feed.js';
import post from './pages/post/post.js';

const main = document.querySelector('#root');

function verificaHash() {
  main.innerHTML = '';
  switch (window.location.hash) {
    case ' ':
      main.appendChild(inicial());
      break;
    case '#cadastro':
      main.appendChild(cadastro());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    case '#post':
      main.appendChild(post());
      break;
    default:
      main.appendChild(inicial());
  }
}
const init = () => {
  window.addEventListener('hashchange', () => {
    verificaHash();
  });
};
window.addEventListener('load', () => {
  verificaHash();
  init();
});
