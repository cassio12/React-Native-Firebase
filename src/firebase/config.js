import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const  firebaseConfig  =  {
  apiKey : 'AIzaSyBOo3hc1fnTvgfPguKTkIqBR45glmB3D0o' ,
  authDomain : 'aula-exemplo-firebase.firebaseapp.com' ,
  databaseURL : 'https://aula-exemplo-firebase-default-rtdb.firebaseio.com' ,
  projectId : 'aula-exemplo-firebase' ,
  storageBucket : 'aula-exemplo-firebase.appspot.com' ,
  messagingSenderId : '1061716495547' ,
  appId : '1:1061716495547:web:d3fcd110de6010d97aad9e' ,
} ;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export  {  firebase  } ;