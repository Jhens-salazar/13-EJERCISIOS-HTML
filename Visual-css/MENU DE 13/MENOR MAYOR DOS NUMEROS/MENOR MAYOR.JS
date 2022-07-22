function float(){
    var a1 = parseFloat(document.maymen.numero1.value);
    var a2 = parseFloat(document.maymen.numero2.value);

    if(a1<a2){
        document.maymen.mayor.value=a2;
        document.maymen.menor.value=a1;
    }
    else if(a1>a2){
        document.maymen.mayor.value=a1;
        document.maymen.menor.value=a2;
    }
    if(a1==a2){
        alert("LOS NUMEROS SON IGUALES")
    }
    else if(a2==a1){
        alert("LOS NUMEROS SON IGUALES")
        }
    }
