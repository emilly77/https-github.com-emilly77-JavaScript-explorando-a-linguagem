console.log('Trabalhando com listas');
const listaDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro');
listaDestinos.push(`Curitiba`) //adicionando um item na lista 

listaDestinos.splice(1,1); 

console.log("Destinos possiveis:");
console.log(listaDestinos);
console.log(listaDestinos[1], listaDestinos[0]);

