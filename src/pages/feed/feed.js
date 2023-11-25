import { readPosts } from '../../firebase/firebaseFirestore.js';

export default () => {
  const container = document.createElement("section");

  const template = `
      <h1>Uma web para voçê se deliciar</h1>
    `;

  container.innerHTML = template;

  container.addEventListener('load', () => {
    readPosts();
  })

  return container;

}