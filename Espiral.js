function espiral(num) {
    /*Este if es solo para verificar que el numero ingresado sea impar,
    en caso de que sea un numero par, retorna 1 con el fin de evitar el un
    error de RangeError stack size exceed, lo cual hace un llamado recursivo del metodo
    el cual no es usado, personalmente mas que un error es un Warning.*/
    if (num%2==0) {
        document.getElementById('ans').innerHTML="Ingrese un numero impar";
        return 1;
    }
    else{
        if(num <= 1)
        return 1;
    }

    
    var topDer= (num*num);
    var topIzq=topDer-(num-1);
    var botIzq=topIzq-(num-1);
    var botDer=botIzq-(num-1);
    var total = topDer+topIzq+botIzq+botDer;
    
    total = total + espiral(num-2);

    document.getElementById('ans').innerHTML=total;
    return total;
}