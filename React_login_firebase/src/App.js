import React, { Component } from 'react';
import firebase from './fireConnection';
/*
export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      nomeInput:'',
      idadeInput:'',
      token: 'Carregando...',
      nome: '',
      idade:''
    };

    this.cadastrar = this.cadastrar.bind(this);
  
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

    /*Olheiro "on"
    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    } )
    

    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    } );

    firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });

  }

  cadastrar(e){
    //Inserindo um novo dado!
    //firebase.database().ref('token').set(this.state.tokenInput);
    //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput);
    //remover um dado especifico
    //firebase.database().ref('usuarios').child(1).child('cargo').remove();
    
    let usuarios = firebase.database().ref('usuarios');
    let chave = usuarios.push().key;
    usuarios.child(chave).set({
      nome: this.state.nomeInput,
      idade: this.state.idadeInput
    });

    e.preventDefault();
  }

  render(){
    const {token, nome, idade} = this.state;
    return(
      <div>

        <form onSubmit={this.cadastrar}>
          <input type="text" value={this.state.nomeInput} 
              onChange={(e) => this.setState({nomeInput: e.target.value})} /><br/>

          <input type="text" value={this.state.idadeInput} 
              onChange={(e) => this.setState({idadeInput: e.target.value})} /><br/>
              
            <button type="submit" >Cadastrar</button>
        </form>
        <h1> Token:{token}  </h1>
        <h1>Nome:{nome} </h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}



//trabalhar com Listas
export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      lista:[]
      
    };
  

    firebase.database().ref('usuarios').on('value', (snapshot) =>{
      let state = this.state;
      state.lista=[];

      snapshot.forEach((childItem) => {
        state.lista.push({
          key: childItem.key, 
          nome: childItem.val().nome,
          idade: childItem.val().idade
        })
      });
      this.setState(state);
    });

  

  }

  
  render(){
    return(
      <div>
        {this.state.lista.map((item) =>{
          return(
            <div>
              <h3>ID: {item.key} </h3>
              <h1>Olá {item.nome} </h1>
              <h2>Idade. {item.idade} </h2>
            </div>
          );
        })}

      </div>
    );
  }
}
*/

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      senha:'',
      user:null
      
    };
    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.auth = this.auth.bind(this);
    this.sair = this.sair.bind(this);

  }

  componentDidMount(){
    this.auth();
  }

  auth(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user: user});
      }

    })
  }

  cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) => {

        alert('Codigo de error: ' + error.code);
    });


  }

  logar(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) => {

        alert('Codigo de error: ' + error.code);
    });

  }
  sair(){
    firebase.auth().signOut()
    .then(()=>{
      this.setState({user: null});
      alert('Deslogado com sucesso!');
    })
  }



  
  render(){
    return(
      <div>
        {this.state.user ?
          <div>
            <p>Painel Admin</p>
            <p>Seja bem vindo :)</p>
            <p> {this.state.user.email} </p>
            <button onClick={this.sair} >Sair</button>  
          </div>
          :
          <div>
            <h1>Seja Bem vindo</h1>
            <label>Email:</label> <br/>
            <input type="text" value={this.state.email} onChange={(e) =>
              this.setState({email: e.target.value})} /> <br/>

            <label>Senha:</label> <br/>
            <input type="text" value={this.state.senha} onChange={(e) =>
              this.setState({senha: e.target.value})} /><br/>

              <button onClick={this.cadastrar} >Cadastrar</button><br/>
              <button onClick={this.logar} >Logar</button>
        </div>
        }
        
      </div>
    );
  }
}