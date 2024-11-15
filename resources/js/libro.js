//funcion que permite unir dos textos
function datos(){
    let titulo  = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    // invocar la funcion unir
    let text = unir(titulo,autor);
    document.getElementById("mjs").innerHTML = text;

}

function unir(text1,text2){
    return "titulo:"+ text1+ "<br/>"+"Autor:"+text2;
}