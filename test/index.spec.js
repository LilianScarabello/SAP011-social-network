// importamos la funcion que vamos a testear
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  deleteDoc, doc, updateDoc, addDoc, collection, onSnapshot, orderBy, query,
} from 'firebase/firestore';
import { login, cadastrar } from '../src/firebase/firebaseAuth.js';
import {
  atualizarPost, deletePost, gravarPost, readPosts,
} from '../src/firebase/firebaseFirestore.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  orderBy: jest.fn(),
  query: jest.fn(),
  onSnapshot: jest.fn(),
  deleteDoc: jest.fn(),
  doc: jest.fn(),
  updateDoc: jest.fn(),
  addDoc: jest.fn(),
}));

describe('login', () => {
  it('verificar se a função signInWithEmailAndPassword esta sendo chamada e passando os parametros corretos. ', () => {
    const email = 'teste@teste.com';
    const password = '12345678';
    login(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});
describe('cadastrar', () => {
  it('Verificar se a função createUserWithEmailAndPassword esta sendo chamada e passando os parametros corretos.', () => {
    const email = 'teste@teste.com';
    const password = '12345678';
    cadastrar(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});
describe('deletePost', () => {
  it('Verificar se a função deleteDoc esta sendo chamada e deletando o posts selecionado', () => {
    const id = '12345';
    deletePost(id);
    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', id);
  });
});
describe('atualizarPost', () => {
  it('Verificar se a função updateDoc esta sendo chamada e esta atualizando o post selecionado', () => {
    const postId = '12345';
    const newText = 'novotexto';
    atualizarPost(postId, newText);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', postId);
    expect(updateDoc).toHaveBeenCalledWith(undefined, { text: newText });
  });
});
describe('gravarPost', () => {
  it('Verificar se a função addDoC esta sendo chamada e gravando o post', () => {
    const textDoPost = 'textogravado';
    gravarPost(textDoPost);
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith(undefined, 'posts');
    expect(addDoc).toHaveBeenCalledWith(collection(), {
      text: textDoPost,
      date: expect.any(Date),
    });
  });
});

describe('readPosts', () => {
  it('should call onSnapshot with the correct query', () => {
    // Mockando a resposta do Firebase Firestore
    const mockSnapshot = {
      forEach: jest.fn(),
    };
    onSnapshot.mockImplementationOnce((q, callback) => {
      callback(mockSnapshot);
    });

    // Chamando a função readPosts
    readPosts((posts) => {
      // Verificando se a função exibirPosts foi chamada com os posts corretos
      expect(posts).toEqual([]);
    });

    // Verificando se as funções do Firestore foram chamadas corretamente
    expect(collection).toHaveBeenCalledWith(undefined, 'posts');
    expect(orderBy).toHaveBeenCalledWith('date', 'asc');
    expect(query).toHaveBeenCalled();
    expect(onSnapshot).toHaveBeenCalled();
  });
});
