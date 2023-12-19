import {
  collection, query, onSnapshot, orderBy, doc, updateDoc, addDoc, deleteDoc,
} from 'firebase/firestore';
import { db } from './firebaseConfig.js';

export function readPosts(exibirPosts) {
  const q = query(collection(db, 'posts'), orderBy('date', 'asc'));

  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((document) => {
      const obj = {
        textDoPost: document.data().text,
        datePost: document.data().date,
        id: document.id,
      };
      posts.push(obj);
    });

    exibirPosts(posts);
  });
}

export function atualizarPost(postId, newtext) {
  const postRef = doc(db, 'posts', postId);
  return updateDoc(postRef, {
    text: newtext,
  });
}

export function gravarPost(textDoPost) {
  addDoc(collection(db, 'posts'), {
    text: textDoPost,
    date: new Date(),
  });
}

export function deletePost(id) {
  deleteDoc(doc(db, 'posts', id));
}
