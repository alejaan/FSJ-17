/**
 * if-else - if-else if- else - switch
 * operador ternario
 */

// verificando si la persona es mayor de edad 

    let edad = prompt("ingrese su edad"); // con el prompt solicitamos datos desde el navegador

    if(edad >= 18){
        //imprimiendo un mensaje en html
        document.write("sos mayor de edad");
    }else{
        document.write("sos menor de edad :)");
    }

    //operador ternario = de manera mas optimizada para trabajar el if-else

    //verificar si el numero esta en el rango entre 50 y 150

    let numero = prompt("ingresa un numero");
    //if = ? si la condicion la cumple mandamos un cierto codigo
    document.write(numero >= 50 && numero <= 150 ? "estas en el rango" : "no estas en el rango");

    //si lo vemos con el if seria asi 

    /*if(numero >= 50 && numero <= 150){
        document.write("estas en el rango");
    }else{
        document.write("no estas en el rango");
    }*/

    // Estructuras de if-else if-else (Multiples de contidiciones)
    
    let forma_pago = prompt("ingrese la forma de pago");

    if(forma_pago == "tarjeta de credito"){
        document.write("pepe me esta pagando con tarjeta de credito");
    }else if(forma_pago == "Bitcoin"){
        document.write("pepe me esta pagando con bitcoin");
    }else if(forma_pago == "Paypal"){
        document.write("pepe me esta pagando con Paypal");
    }else{
        document.write("pepe me pago con efectivo")
    }

    //Estructura Switch

    let estacion_anio = prompt("que estacion del año te gusta mas?");

    switch(estacion_anio){
        case "invierno":
            document.write("te gusta el invierno");
            break; // si el caso se cumple, se sale del switch para no evaluar los demas casos

        case "primavera":
            document.write("te gusta la primavera");
            break; // si el caso se cumple, se sale del switch para no evaluar los demas casos

        case "otoño":
            document.write("te gusta el otoño");
            break; // si el caso se cumple, se sale del switch para no evaluar los demas casos

        case "Verano":
            document.write("te gusta el Verano");
            break; // si el caso se cumple, se sale del switch para no evaluar los demas casos

        default:
            document.write("ingresa una estacion del año");
    }

    