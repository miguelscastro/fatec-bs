function map1(lista,f){
	let aux = [];
	for(let i=0; i < lista.length; i++){
		aux.push(f(lista[i]));
	}
	return aux;
}

function map2(lista, f){
	if(lista.length === 0){
		return [];
	}else{
		[x, ...xs] = lista
		return [f(x)].concat(map2(xs,f));
	}
}

//map3 = f => { ... }
//map2(xs,f) = xs.map3(f)
function map3(f){
	if(this.length === 0){
		return [];
	}else{
		[x, ...xs] = this
		return [f(x)].concat(xs.map3(f));
	}
}

//f tem que ser funçao injetora
//g qualquer funçao
function bimap(f,g){
	let keys = Object.keys(this);
	let aux = {};
	for(let idx=0; idx < keys.length; idx++){
		aux[f(keys[idx])] = g(this[keys[idx]]);
	}
	return aux;
}

function teste(){
	//console.log(map2([1,2,3,4],x => 5*x)); //funcao
	//console.log([1,2,3,4].map(x => 5*x)); //metodo
	
	//Pseudoclasse, prototype: Vai carregar as informações
	//de uma pseudoclasse
	Array.prototype.map3 = map3;
	Object.prototype.bimap = bimap;

	console.log([1,2,3,4].map3(x => 2*x));
	
	let obj = {1:3, 3:5, 7:8};
	
	console.log(obj.bimap(x => parseInt(x)+1, x => parseInt(x)+3));
	
}