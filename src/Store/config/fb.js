import * as firebase from "firebase";

import { FirebaseConfig } from "./keys.js";

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

export const articlesRef_Team = databaseRef.child("articles-byteam");
export const articlesRef_Users = databaseRef.child("articles-byusers");
export const articlesRef_3P = databaseRef.child("articles-by3p");
export const profileRef = databaseRef.child("users/user_profile");
export const usrTodoRef = databaseRef.child("users/user_todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();