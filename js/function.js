var operador1, operador2, operacao, estado;
var disp;


function reset() {
	operador1 = "0";
	operador2 = "0";
	operacao =  null;
	estado = 1;
	disp.value = "0"; 
}

//Inicializar a página....
function inicializa_pagina(){
	disp = document.getElementById('display');
	reset();

}


function btnClick(objeto){
	var me = objeto.value;
    
    //Resetar a calculadora..
    if(me == 'C'){
       reset();
       return;
    }

    //Quando que cricar em = , operações usando switch
    if(me == '='){
       var res;

       switch (operacao){
       	case '+':
       	   res = parseFloat(operador1) + parseFloat(operador2);
       	   break;

       	   case '-':
       	   res = parseFloat(operador1) - parseFloat(operador2);
       	   break;

       	   case '*':
       	   res = parseFloat(operador1) * parseFloat(operador2);
       	   break;

       	   case '/':
       	   res = parseFloat(operador1) / parseFloat(operador2);
       	   break;
       }

       disp.value = res.toString();
       estado = 1;
       return;
    }
    
    //Condição para quando digita + - * /
    if((me == '+') || (me == '-') || (me == '*') || (me == '/')){
    	operacao = me;
    	estado = 2;
    	return;

    }

    //Condição para entradas dos numeros...
	if((me == '.') || (me >= '0') && (me <= '9')){
		if(estado == 1){
			operador1 += me;
			disp.value = parseFloat(operador1).toString();

		}else if(estado == 2){
			operador2 += me;
			disp.value = parseFloat(operador2).toString();

		}

	}
	
}