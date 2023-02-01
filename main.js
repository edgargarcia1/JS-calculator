const numOp1 = document.getElementById("op1");
const operador = document.getElementById("operador");
const numOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

/**Creamos el evento al boton */
btnCalcular.addEventListener('click', calcular);

function calcular(){
    const opera = operador.value;
    const op1 = parseFloat(numOp1.value);
    const op2 = parseFloat(numOp2.value);

    if((opera == "+" || opera == "-" || opera == "*" || opera == "/") && !isNaN(op1) && !isNaN(op2) ) {

        let resultado;

        switch(opera){
            case "+": resultado = op1 + op2;
                break;
            case "-": resultado = op1 - op2;
                break;
            case "*": resultado = op1 * op2;
                break;
            case "/": resultado = op1 / op2;
                break;

        }
        pResultado.style="color:black";
        pResultado.innerText = "= " + resultado;
    }
    else{
        pResultado.style="color:red";
        pResultado.innerText = "Calculo imposible";
    }
}
