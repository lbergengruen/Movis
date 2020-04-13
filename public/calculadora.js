var buffer = ""
var actual="0"
var operacion=""
flag=false

function insertElement(value){
    if (!flag){
        if (actual === "0"){
            actual = value
        } else {
            actual=actual.concat(value)
        }
    } else{
        actual = value
        flag = false
    }
    
    imprimir(actual)
}

function reset(){
    actual = "0"
    operacion = ""
    buffer=""
    flag=false
    imprimir(actual)
}

function cambiarSigno(){
    if(!flag){
        if(actual.charAt(0) == '-'){
            actual = actual.substring(1)
        } else{
            actual = "-".concat(actual)
        }
        imprimir(actual)
    } else {
        flag=false
        actual=buffer
        buffer=""
        if(actual.charAt(0) == '-'){
            actual = actual.substring(1)
        } else{
            actual = "-".concat(actual)
        }
        imprimir(actual)
    }
}

function transformarPorcentaje(){
    if (!flag){
        if (actual.charAt(actual.length-1) != '%'){
            var per = parseFloat(actual)/100
            actual = String(per).concat('%')
        } else{
            var per = (parseFloat(actual.substring(0, actual.length-1))*100).toFixed(2)
            actual = per.toString()
        }
    } else {
        actual = buffer
        buffer = ""
        flag = false
        if (actual.charAt(actual.length-1) != '%'){
            var per = parseFloat(actual)/100
            actual = String(per).concat('%')
        } else{
            var per = (parseFloat(actual.substring(0, actual.length-1))*100).toFixed(2)
            actual = per.toString()
        }
    }
    imprimir(actual)
}

function dividir(){
    if (!flag){
        equals()
        actual="0"
        operacion="/"
    } else{
        actual="0"
        operacion="/"
        flag=false
    }
    
}

function multiplicar(){
    if (!flag){
        equals()
        actual="0"
        operacion="x"
    } else{
        actual="0"
        operacion="x"
        flag=false
    }
}

function restar(){
    if (!flag){
        equals()
        actual="0"
        operacion="-"
    } else{
        actual="0"
        operacion="-"
        flag=false
    }
}

function sumar(){
    if (!flag){
        equals()
        actual="0"
        operacion="+"
    } else{
        actual="0"
        operacion="+"
        flag=false
    }
}

function decimal(){
    if (!flag){
        if (!actual.includes(".")){
            actual=actual+"."
        }
    } else{
        actual = buffer
        buffer = ""
        flag = false
        if (!actual.includes(".")){
            actual=actual+"."
        }
    }
    
    imprimir(actual)
}

function equals(value){
    flag=(value==true)
    if (buffer==""){
        buffer=actual
        actual="0"
    } else{
        switch (operacion){
            case "/":
                buffer=(parseFloat(buffer) / parseFloat(actual)).toFixed(2)
                break;
            case "x":
                buffer=(parseFloat(buffer) * parseFloat(actual)).toFixed(2)
                break;
            case "+":
                buffer=(parseFloat(buffer) + parseFloat(actual)).toFixed(2)
                break;
            case "-":
                buffer=(parseFloat(buffer) - parseFloat(actual)).toFixed(2)
                break;
            default:
                buffer=actual
                break;
        }
    }
    imprimir(buffer)
}

function imprimir(valor){
    document.getElementById("resultado_numerico").innerText = valor
}