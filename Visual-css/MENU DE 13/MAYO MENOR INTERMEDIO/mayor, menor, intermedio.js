function float(){ /*UTLIZAMOS EL FLOAT PARA PODER UTILIZAR NUMERO DECIMALES */
    var a1 = parseFloat(document.ernum.Numero1.value);
    var a2 = parseFloat(document.ernum.Numero2.value);/*ACA SE PASAN A DEFINIR LAS VARIABLES  */
    var a3 = parseFloat(document.ernum.Numero3.value);
   
if(a1<a2 & a2<a3){ /* PROBABILIDAD 1*/
    document.ernum.mayor.value=a3;
    document.ernum.intermedio.value=a2;
    document.ernum.menor.value=a1;
}
else if(a1>a2 & a2>a3){ /* PROBABILIDAD 2*/
    document.ernum.mayor.value=a1;
    document.ernum.intermedio.value=a2;
    document.ernum.menor.value=a3;
}
else if(a1>a3 & a3>a2){ /* PROBABILIDAD 3*/
    document.ernum.mayor.value=a1;
    document.ernum.intermedio.value=a3;
    document.ernum.menor.value=a2;
}
else if(a1>a2 & a2>a3){  /* PROBABILIDAD 4*/
    document.ernum.mayor.value=a1;
    document.ernum.intermedio.value=a3;
    document.ernum.menor.value=a3;
}
else if(a1>a2 & a2<a3){ /* PROBABILIDAD 5*/
    document.ernum.mayor.value=a1
    document.ernum.intermedio.value=a3
    document.ernum.menor.value=a2
}
else if(a1<a3 & a3>1){ /* PROBABILIDAD 6*/
    document.ernum.mayor.value=a2
    document.ernum.intermedio.value=a3
    document.ernum.menor.value=a1
}
if(a1==a2 & a3<a2){
    alert("EL NUMERO 1 ES IGUAL AL NUMERO 2 EL NUMERO DIFERENTE ES EL 3")
}
else if(a1==a2 & a3>a2){
    alert("EL NUMERO 1 ES IGUAL AL NUMERO 2 EL NUMERO DIFERENTE ES EL 3")
}
if(a1==a3 & a3<a2){
     alert("EL NUMERO 1 ES IGUAL AL NUMERO 3 EL NUMERO DIFERENTE ES EL 2")
}
else if(a1==a3 & a3>a2){
    alert("EL NUMERO 1 ES IGUAL AL NUMERO 3 EL NUMERO DIFERENTE ES EL 2")
}
if(a2==a3 & a3<a1){
    alert("EL NUMERO 2 ES IGUAL AL 3 EL NUMERO DIFERENTE ES EL 1")
}
if(a2==a3 & a3>a1){
    alert("EL NUMERO 2 ES IGUAL AL 3 EL NUMERO DIFERENTE ES EL 1")
}
}