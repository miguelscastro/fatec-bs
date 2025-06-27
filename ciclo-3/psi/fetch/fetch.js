class Ok {
	constructor(x){
		this.x = x;
	}
	
	//f = x => acao Ok que depende x. O retorno
	//vai ser um novo objeto Ok com o valor atualizado.
	then(f){
		return f(this.x);
	}
}

function pure(x){
	return new Ok(x);
}

function teste(){
	const a = new Ok(5);
	a.then(x => pure(x+1))
	 .then(y => pure(2*y))
	 .then(z => console.log(z));
}

function createTodo(todoJson){
	let userId = todoJson.userId;
	let title = todoJson.title;
	let comp = todoJson.completed;
	let id = todoJson.id;
	let tbody = document.querySelector("#tbody");
	let tdId = document.createElement("td");
	let tdt = document.createElement("td");
	let tdc = document.createElement("td");
	let tdu = document.createElement("td");
	let tr = document.createElement("tr");
	tdId.innerHTML = id;
	tdu.innerHTML = userId;
	tdt.innerHTML = title;
	tdc.innerHTML = comp;
	tr.appendChild(tdId);
	tr.appendChild(tdc);
	tr.appendChild(tdt);
	tr.appendChild(tdu);
	tbody.appendChild(tr);
}

function testeFetch(){
	let id = document.querySelector("#txt").value;
	fetch('https://jsonplaceholder.typicode.com/todos/'+id)
      .then(response => response.json())
      .then(json => createTodo(json))
	  .catch(error => alert("Nao rolou"));
}

function main(){
	document.querySelector("#btnok")
		.addEventListener("click", evt => {
			teste();
		});
	document.querySelector("#btnfetch")
		.addEventListener("click", evt => {
			testeFetch();
		});
}

window.onload=main;