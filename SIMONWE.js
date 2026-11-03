function verificar(){
    let EDAD = document.getElementById("edad").value;

    if (EDAD ==="" )
        {
            alert ("porfa ingresa un numero w");
            return;
        }
        else if(EDAD<=0){
            alert("JAJAJA, CHISTOSO , PON UN NUMERO VALIDO MAMÓN")
        }
         else if(EDAD>=18){
                alert ("BIENVENIDO A LA ADULTEZ, ERES MAYOR DE EDAD")
        } else {
            alert ("Aun eres joven w, disfruta ser menor de edad")
        }
        
}       