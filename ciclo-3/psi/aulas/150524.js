// 1) Calcular, na mão, as expressões
/*

a) ["O","OI","OOI","OOOI"].map(x => x.concat(["A"]))
Resultado: ["OA","OIA","OOIA","OOOIA"]

b) [1,3,5,6,9].map(x => x*x)
Resultado: [1,9,25,36,81]

c) [1,2,3,4,5,6,7,8].map(x => x+1).filter(x => x%2 == 0)
Resultado: [2,4,6,8]

d) [-1,3,1,-5,2,8,-10].map(x => x > 0)
Resultado: [false,true,true,false,true,true,false]

e) [-1,3,1,-5,2,8,-10].filter(x => x > 0)
Resultado: [3,1,2,8]

*/

// 2) Implemente uma função que receba uma lista de strings e retorne o reverso de todas usando map.
const reverseString = function (ls) {
    let reversedLs = []
    ls.map(string => {
        let reversedString = ""
        for (let i = string.length - 1; i >= 0; i--) {
            reversedString += string[i]
        }
        reversedLs.push(reversedString)
    })
    return reversedLs
}
// 3) Implemente uma função que receba uma lista de strings e retorne uma nova lista apenas com as vogais
const vogals = function (ls) {
    let vogais = "aeiouAEIOU"
    let newVogais = []
    ls.map(string => {
        for (let char of string) {
            if (vogais.includes(char)) {
                newVogais.push(char)
            }
        }
    })
    return newVogais
}

// 4) Implemente uma função que receba uma lista de strings e retorne uma nova lista apenas com os tamanhos das palavras sem as vogais
const stringSize = function (ls) {
    let lsSizes = []
    let vogais = "aeiouAEIOU"
    ls.map(string => {
        let newString = ""
        for (let char of string) {
            if (!vogais.includes(char)) {
                newString += char
            }
        }
        lsSizes.push(newString.length)
        
    })
    return lsSizes
}

/*
5) Implemente o bifiltro no prototype do Object

Exemplo do bifiltro:

let a ={1:3, 2:10, 3:10, 4:10, 5:0}
a.bifiltro(x => x%2 == 1, x => x%2 == 0) = {3:10, 5:0}
*/
function bifiltro(f, g) {
    let keys = Object.keys(this)
    let aux = {}
    for (let i = 0; i < keys.length; i++) {
        if (f(keys[i]) && g(keys[i])) {
            aux[keys[i]] = this[keys[i]]
        }
    }
    return aux
}
function testeBiFiltro () {
    let a = {1:2, 2:3}
    let b = {2:10, 3:-4, 7:-1, 0:-1, 2:4}
    Object.prototype.bifiltro = bifiltro
    return b.bifiltro(x => x % 2 == 0, x => x > 0);
}

// fold
function fold(f, init) {
    for(let i=0;i < this.length; i++) {
        init = f(init,this[i])
    }
    return init
}
function testeFold() {
    Array.prototype.fold = fold
    // 0 + 1 -> 1 + 2 ...
    return [1, 2, 3, 4].fold(((x,y)=> x+y),0)
    // 1 -> 1*1 -> 1 * 2 ...
    // return [1, 2, 3, 4].fold(((x,y)=> x*y),1)
}

// unfold -> não existe em JS de forma síncrona -> tem que ter condição de parada e recebe exatamente 2 elementos -> a semente do qual vai ser gerado algo e a lista
const unfold = function (f, seed) {
    let lista = f(seed);
    if(lista.length === 0)
        return [seed]
    if (lista.length === 2) {
        return [lista[0]].concat(unfold(f,lista[1]))
    }
}
function f(x) {
    if(x>5)
        return []
    else   
        return [x,x+1]
}
function f2 (parada) {
    return x => {
        if (x > parada)
            return []
        else
            return [x,x+1]
    }
}


let strings = ["olá", "mundo", "teste", "si", "abacate"]
console.log(reverseString(strings));
console.log(vogals(strings));
console.log(stringSize(strings));
console.log(testeBiFiltro());
console.log(testeFold());
console.log(unfold(f2(6), 1).fold(((x,y) => x*y),1));

function bimap(f,g){
	let keys = Object.keys(this);
	let aux = {};
	for(let i=0; i < keys.length; i++){
		aux[f(keys[i])] = g(this[keys[i]]);
	}
	return aux;
}

function bifilter(f,g){
	let keys = Object.keys(this);
	let aux = {};
	for(let i=0; i < keys.length; i++){
		if(f(keys[i]) && g(this[keys[i]]))
			aux[keys[i]] = this[keys[i]];
	}
	return aux;
}

function fold(f,init){
	for(let i=0; i < this.length; i++){
		init = f(init,this[i]);
	}
	return init;
}

// //f tem que avisar pro unfold parar
// //f recebe uma seed e retorna uma lista
// //de exatamente dois elementos ou uma lista vazia.
// function unfold(f,seed){
// 	let lista = f(seed);
// 	if(lista.length === 0)
// 		return [];
// 	if(lista.length === 2){
// 		return [lista[0]].concat(unfold(f,lista[1]));
// 	}	
// }

function f (x) {
	if (x > 5) 
		return [];
	else
		return [x,x+1];
}

function f2 (parada) {
	return x => {
		if (x > parada) 
			return [];
		else
			return [x,x+1];
	}
}

function teste(){
	Array.prototype.fold = fold;
	console.log([1,2,3,4].fold(((x,y) => x+y),0));
	console.log([1,2,3,4,5].fold(((x,y) => x*y),1));
	
	console.log(unfold(f,1));
	let fat = f2(6);
	console.log(unfold(f2,1).fold(((x,y) => x*y),1));
}

// // ===================================================

// // 1) Calcular a soma de todos os numeros pares positivos usando fold (reduce) e unfold
// console.log(teste());