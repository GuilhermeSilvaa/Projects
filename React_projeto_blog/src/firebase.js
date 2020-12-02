import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

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


class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);

        //Referenciando a database pra acessar em outros locais
        this.app = app.database();

        this.storage = app.storage();

    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }
    async register(nome, email, password){
       await  app.auth().createUserWithEmailAndPassword(email, password)

       const uid = app.auth().currentUser.uid;

       return app.database().ref('usuarios').child(uid).set({
           nome: nome 
       })
    }
    logout(){
        return app.auth().signOut();
    }

    isInitialized(){
        return new Promise (resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }
    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }

    getCurrentUid(){
        return app.auth().currentUser && app.auth().currentUser.uid
    }

    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }

        const uid = app.auth().currentUser.uid;
        await app.database().ref('usuarios').child(uid).once('value').then(callback);

    }


}

export default new Firebase();