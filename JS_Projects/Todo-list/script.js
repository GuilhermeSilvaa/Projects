//Buscar dentro da div app a UL
var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];


function renderTodos(){

	listElement.innerHTML = '';

	for(todo of todos){

		console.log(todo);
		//criou li
		var todoElement = document.createElement('li');
		//variavel que armazena o texto cada vez que passa
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');


		var posicao = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deletarTodo('+ posicao +')');

		

		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);

		//inserir na tela
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		//passar tudo pra dentro dotodoElement que é o UL
		listElement.appendChild(todoElement);



	}
}

renderTodos();

function adicionarTodo(){

	if (inputElement.value == '') {
		alert('Digite alguma tarefa!');
		return false;
	}else{
		var todoText = inputElement.value;
		todos.push(todoText);
		inputElement.value = '';
		renderTodos();
		salvarDados();
	}
}


buttonElement.onclick = adicionarTodo;

function deletarTodo(posicao){
	//splice remove algo da lista passando a posicao e o item do array
	todos.splice(posicao, 1);
	renderTodos();
	salvarDados();

}

function salvarDados(){
	localStorage.setItem('lista_todos', JSON.stringify(todos));
}