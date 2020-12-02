import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDFYakggZJAkB_gEP2DEghU5vDuBFn9pm4",
    authDomain: "reactapp-dc35a.firebaseapp.com",
    databaseURL: "https://reactapp-dc35a.firebaseio.com",
    projectId: "reactapp-dc35a",
    storageBucket: "reactapp-dc35a.appspot.com",
    messagingSenderId: "37094255525",
    appId: "1:37094255525:web:25f0404d7ab684c262564c",
    measurementId: "G-R2FKBCYHSJ"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;