function letras(string){//Solo letras
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz" "';//Caracteres validos
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
    //Retornar valor filtrado
    return out;
}
function encriptarTexto(){
    var texto = document.getElementById("ingresarTexto").value.toLowerCase();
    //i afecta a mayusculas como minusculas
    //g afecta a todo la linea u oracion
    //m afecta a mustiples lineas o parrafos
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("notFound").style.display = "none";
    document.getElementById("mensajeIngresarTexto").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";    
}
function desencriptarTexto(){
    var texto = document.getElementById("ingresarTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("notFound").style.display = "none";
    document.getElementById("mensajeIngresarTexto").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copiarTexto(){
    var codigoACopiar = document.getElementById('mensajeIngresarTexto');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    /*alert("Texto copiado");*/
}
