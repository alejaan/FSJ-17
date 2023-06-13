//Comentario en un so la linea

/** Asignacion de variables
 * 
 * Let y var (palabra reservada)
 * 
 * Let: Las variables no se pueden utilizar su nombre mas de una vez y le podemos asignar un dato o no (se trabaja de manera local)
 * Var:  Las variables se pueden sobredeclarar y podemos asignarle un dato o no (Se trabaja de manera Global)
 */

    // Declarando variables
    let nombre = "Maria"
    let variable; 

    //Let nombre = "Juana"
    var apellido
    // estamos sobredeclarando la variable
    var apellido = "hernandez";
    //llamando variables
    nombre; //maria
    nombre = "juana"
    nombre; //juana
    apellido


/** Definiendo una costante cons
 */

    const PI = 3.1416; // valor estico
    const num = 25;

    //imprimiendo javascript por medio de la consola
    console.log(PI); 

    //Tipos de datos 
    let cadena = "hola chicos!";
    let enteros = 25; // int
    let decimal = 36.2 // double
    let dato = true; //boleano
    let dato2 = false; //boleano

    let arreglo_frutas = Array("Manzana", "Uva", "Naranja");
    let arreglo_productos = ["camisas",5,true,25.2];
    console.log(arreglo_productos);
    

    let animal = {
      //atributo => valor

      nombre: "pepe",
      edad: 5,
      raza: "angora",
      color: "Cafe y blanco"
    }
    console.log(animal);
    //imprimiento una posicion en especifico del arreglo
    console.log(arreglo_frutas[1]);

    //imprimiento un atributo en especifico del objeto
    console.log(animal.nombre);
    //tipo de dato nulo
    let telefono = nulo;
    let correo; //undefined


