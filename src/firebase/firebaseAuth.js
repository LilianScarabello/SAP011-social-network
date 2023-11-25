import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig.js"

const auth = getAuth(app);

export function login(email,password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function cadastrar(email,password) {
  return createUserWithEmailAndPassword(auth, email, password)
}