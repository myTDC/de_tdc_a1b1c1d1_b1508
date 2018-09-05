import * as firebase from "firebase";

import { FirebaseConfig } from "./keys.js";

firebase.initializeApp(FirebaseConfig);

export const dbRef = firebase.database().ref();

//System related database references
export const articlesRef_3P = dbRef.child("articles-by3p");
export const articlesRef_Team = dbRef.child("articles-byteam");
export const articlesRef_Users = dbRef.child("articles-byusers");

//User related Database references
export const usersRef = dbRef.child("users");

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const pushRef = firebase.messaging();

//Method to get the data with the current userID
export const getUserRef = (uID) => {
	return dbRef.child('users/' + uID);
}