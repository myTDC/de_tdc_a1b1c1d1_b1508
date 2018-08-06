import * as firebase from "firebase";

import { FirebaseConfig } from "./keys.js";

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

export const articlesRef = databaseRef.child("articles");
export const profileRef = databaseRef.child("users/user_profile");
export const usrTodoRef = databaseRef.child("users/user_todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();