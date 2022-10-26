// let opcion;

// do{
//     opcion = parseInt(prompt("¿Que deseas hacer? 1-Ver el clima 2-Ver las noticias 3-Salir"))

//     switch(opcion){
//         case 1:
//             console.log("Ver el clima")
//             break
//         case 2:
//             console.log("Ver las noticias")
//             break
//         case 3:
//             console.log("Salir")
//             break
//         default:
//             console.log("No ha elegido ninguna opcion")
//             alert("No ha elegido ninguna opcion, intente de nuevo.")
//         break
//     }
// }while(opcion!=3)

    do{

        var opcion = prompt("¿Que deseas hacer?: \n 1) Ver el clima \n 2) Ver las noticias \n 3) Ver resultados deportivos \n 4-salir");

        if (opcion == 1) {
            alert("Elegiste ver el clima")
        }
        else if (opcion == 2) {
            alert("Elegiste ver las noticias")
        }
        else if (opcion == 3) {
            alert("Elegiste ver resultados deportivos")
        }else if(opcion==4){
            console.log("salir")
        }
        else {
            alert("No seleccionaste ninguna opcion, ingrese nuevamente");
            
        }
    }while(opcion!=4)
