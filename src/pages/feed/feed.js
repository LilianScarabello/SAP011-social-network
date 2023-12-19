import {
  readPosts, atualizarPost, gravarPost, deletePost,
} from '../../firebase/firebaseFirestore.js';

export default () => {
  const container = document.createElement('section');

  const template = `
      <h1> Uma web para você se deliciar</h1>
      <textarea id="textPost"></textarea>
      <button id="addPost">Postar</button>
      <section id="posts"></section>
    `;

  container.innerHTML = template;

  const postBtn = container.querySelector('#addPost');
  const textArea = container.querySelector('#textPost');
  console.log(postBtn);
  postBtn.addEventListener('click', () => {
    gravarPost(textArea.value);
  });

  function mostrarPosts(posts) {
    const templatePost = posts.map((post) => `<p id="postid-${post.id}">${post.textDoPost}</p>
    <button id="edit-${post.id}" class="edit-btn" data-postid="${post.id}">Editar</button>
    <button id="save-${post.id}" class="save-btn" data-postid="${post.id}">Salvar</button>
    <button id="delete-${post.id}" class="del-btn" data-postid="${post.id}">Excluir</button>`);
    container.querySelector('#posts').innerHTML = templatePost.join('');

    const savePost = container.querySelectorAll('.save-btn');
    savePost.forEach((saveBtn) => {
      saveBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.target.dataset.postid;
        console.log(id, saveBtn, container.querySelector(`#postid-${id}`).textContent);
        container.querySelector(`#postid-${id}`).setAttribute('contenteditable', false);
        const novoTexto = container.querySelector(`#postid-${id}`).textContent;
        atualizarPost(id, novoTexto);
      });
    });

    const editionBtns = container.querySelectorAll('.edit-btn');
    console.log(editionBtns);
    editionBtns.forEach((editBtn) => {
      editBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.target.dataset.postid;
        container.querySelector(`#postid-${id}`).setAttribute('contenteditable', true);
        container.querySelector(`#postid-${id}`).focus();
      });
    });

    const delPost = container.querySelectorAll('.del-btn');
    console.log(delPost);
    delPost.forEach((delBtn) => {
      delBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.target.dataset.postid;
        console.log(delBtn, id);
        if (window.confirm('Deseja realmente excluir esse post?')) {
          deletePost(id);
        }
      });
    });
  }
  readPosts(mostrarPosts);

  return container;
};
