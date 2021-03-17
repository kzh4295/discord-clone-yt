import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA5dHzpaofiNPvg46XIklVYR4SqH6YDN50",
  authDomain: "discord-clone-yt-a5199.firebaseapp.com",
  projectId: "discord-clone-yt-a5199",
  storageBucket: "discord-clone-yt-a5199.appspot.com",
  messagingSenderId: "217957626863",
  appId: "1:217957626863:web:2371207ec23419ebe77c1a",
  measurementId: "G-GXQEELYTTT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
