
import inicial from "./pages/login/index.js";
import cadastro from "./pages/cadastro/index.js";
import feed from "./pages/feed/index.js";
import post from "./pages/post/index.js";

const main = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case " ":
        main.appendChild(home());
        break;
      case "#cadastro":
        main.appendChild(cadastro());
        break;
      case "#feed":
        main.appendChild(feed());
        break;
      case "#post":
        main.appendChild(post());
        break;
      default:
        main.appendChild(home());
    }
  });
}

window.addEventListener("load", () => {
  main.appendChild(inicial());
  init();
});
