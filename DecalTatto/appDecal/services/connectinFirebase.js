//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';



let firebaseConfig = {
  apiKey: "AIzaSyAtIFwmtgd0Rby3RxE6tObWTir-1L1WNKI",
  authDomain: "projetotadeu-7724d.firebaseapp.com",
  databaseURL: "https://projetotadeu-7724d-default-rtdb.firebaseio.com",
  projectId: "projetotadeu-7724d",
  storageBucket: "projetotadeu-7724d.appspot.com",
  messagingSenderId: "722467547160",
  appId: "1:722467547160:web:f2f615c6462624b20c7b6d"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}


export default firebase;