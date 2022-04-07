const { showMessage, equality, inequality } = require("./utils/utils");

if ("esto es verdadero") {
	// Ejecuto esto
}

if ("esto es falso") {
	// esto NO se ejecuta
} else if ("esto es verdadero") {
	// Ejecuto esto
}

if ("esto es falso") {
	// esto NO se ejecuta
} else if ("esto es falso") {
	// Ejecuto NO esto
} else {
	// Se ejecuta esto
}

let perro;
let gato;


if (perro) {
	console.log(showMessage("Perro", "muy sociable", 4));
} else if (gato) {
	console.log(showMessage("Gato", "mañoso", 4));
}
let a = 1;
let b = "1";
let c = 2;
let d = "2"



/**
//- operadores		|				descripcion 					|			ejemplo				|		resultado	
----------------------------------------------------------------------------------
//!  		==					|		es igual									|		a == b					|  true			
----------------------------------------------------------------------------------
//!			===					|		es estrictamente igual		|										| false			
----------------------------------------------------------------------------------
//!			!=					|		Es distinto 							|		a != b					| false			
----------------------------------------------------------------------------------
//!			!==					|		Es estricamente distinto 	|		a !== b					| true			
----------------------------------------------------------------------------------
//!			<						|		menor qué									|		a < c						| 					
----------------------------------------------------------------------------------
//!			<=					|		menor o igual qué				 	|		c <= d					| 					
----------------------------------------------------------------------------------
//!			&&					|		operador and (y)			 	|	(a == 1 && c == 2)	| 					
----------------------------------------------------------------------------------
//!			||					|		operador or (o)				 	|		a || b						| 					
----------------------------------------------------------------------------------
//!			! 					|		operador not (no)			 	|	 !a									| 					
----------------------------------------------------------------------------------

 */
equality(a, b);
inequality(a,c)

if(a == 1 && c == 2)console.log('HOLA')


1 < 2 ? console.log('si es tru me ejecuto yo') : console.log('si es false me ejecuto yo') 

if(1 < 2){
	console.log("si es tru me ejecuto yo");
}else{
	console.log("si es false me ejecuto yo"); 
}