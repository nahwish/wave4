// VAR vs LET
var saludarConVar = "hey, hola var --->";
let saludarConLet = "hey, hola let --->";

if (true) {
	var saludarConVar = "hey var, sobreescribo el mensaje <----";
	let saludarConLet = "hey let sobreescribo el mensaje <----";

	let mostrarMsj = "mostrar mensaje con let";
	console.log(mostrarMsj);

	console.log(saludarConLet);
	console.log(saludarConVar);
}
// console.log(mostrarMsj);

 console.log(saludarConVar);
 console.log(saludarConLet);
