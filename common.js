/*const sidebarToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarToggle.classList.toggle('active');
});*/

// Repite el caracter 29 veces para crear un divisor
const divider = "-".repeat(29)+"\n";

// Imprime texto en columna izquiera y derecha, calculando el espaciado
// Si uno de los textos supera los 14 caracteres, se corta
function toColumn(left,right){
    if(left.length>14){
        left = left.substring(0,14);
    }
    if(right.length>14){
        right = right.substring(0,14);
    }
    const space = 29-(left.length+right.length);
    return left + " ".repeat(space) + right + "\n";
}

// Imprime a la izquierda y agrega nueva linea
function toLeft(input){
    return input + "\n";
}

// Imprime a la derecha calculando el espacio
function toRight(input){
    const space = 29-(input.length);
    return " ".repeat(space) + input + "\n";
}

// Convierte un string a una referencia valida de RawBT
function toBT(input) {
    var output = "rawbt:" + input;
    output = output.replaceAll(" ", "%20");
    output = output.replaceAll("\n", "%0A");
    return output;
}