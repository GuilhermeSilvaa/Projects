//var nome = "Guilherme";

//função entrar
/*
function entrar(){

	var area = document.getElementById('area');
	var texto = prompt('digite seu nome?');

	if (texto == '' || texto == null){
		alert('Digite seu nome novamente!');
		area.innerHTML = 'Bem vindo...';

	}else{

		area.innerHTML = 'Bem vindo ' + texto;
	}

}

function entrar2(nome){
	var area = document.getElementById('area2');
	var texto = prompt('digite seu sobrenome?');
 
	area.innerHTML = nome + " " + texto;

}
*/
//--------------------------------------
/*
x = 0;

while(x < 10){
	document.write("</br> o valor do X: " + x);

	x++;

}


document.write("</br></br></br> O X esta valendo: " +x + "</br>");


for(a = 0; a < 10; a++){
	document.write("</br> o valor do A: " + a);

}
*/
/*

document.write("</br> escolha o seu pedido: </br>")
document.write("</br> 0 - gelado / 1 - sumo </br>")
document.write("</br> 2- coca cola / 3 - agua gelada </br>")

function pedir(){
	x = prompt("O que deseja pedir?");

	switch(x){

		case "0":
			alert("Voce pediu um gelado");
			break;
		case "1":
			alert("Voce pediu um sumo");
			break;
		case "2":
			alert("Voce pediu uma cola gelada");
			break;
		case "3":
			alert("voce pediu uma agua natural");
			break;
		default:
			alert("Ops não temos essa opcao!")
			break;


	}

}

function apertoumouse(){
	console.log("O mouse foi apertado");
}

function solteiOmouse(){
	console.log("Soltei o botao do mouse");
}
function passouOmouse(){
	console.log("Voce passou o mouse por cima do botao!");
}
function tirouOmouse(){
	console.log("Voce esta mexendo o mouse pelo botao!");
}
function movendoMouse(){
	console.log("Voce esta mexendo sobre o botao!");
}
function onClick(){
	console.log("Voce clicou no botao!");
}

function botaoDireito(){
	console.log("Voce clicou com o botao direito do rato");
}

 function tecladoApertado(event){
 	console.log("teclado apertado! "+ event.shiftKey);

 }

 function soltouOteclado(event){
 	console.log("soltou o teclado!");
 }
 function apertounoteclado(event){
 	console.log("apertou uma tecla!");
 }

 function carregou(){
 	alert('Pagina foi carregada!');
 }
  function focado(){
 	console.log("Campo focado!");
 }
 function desfocado(){
 	console.log("desfocou o campo!");
 }
 function opcaoSelecionada(objeto){
 	console.log('Cidade selecionada: ' + objeto.value);

 }
 */
//1 Criar o balao
//2 Estourar o balao
//3Carregar o jogo

var total = 0;

function criarBalao(){
	var balao = document.createElement("div");
	balao.setAttribute("class", "balao");

	var x = Math.floor(Math.random() * 600);
	var y = Math.floor(Math.random() * 400);

	balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
	balao.setAttribute("onClick", "estourar(this)");

	document.body.appendChild(balao);

}

function estourar(objeto){
	document.body.removeChild(objeto);

	total++;
	var score = document.getElementById('total');
	score.innerHTML = "Baloes estourados: " + total;
}

function carregarJogo(){
	setInterval(criarBalao, 1000);
}