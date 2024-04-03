/*const sidebarToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarToggle.classList.toggle('active');
});*/

const divider = "-".repeat(29)+"\n";

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

function toLeft(input){
    const space = 29-(input.length);
    return input + " ".repeat(space) + "\n";
}

function toRight(input){
    const space = 29-(input.length);
    return " ".repeat(space) + input + "\n";
}

function toBT(input) {
    var output = "rawbt:" + input;
    output = output.replaceAll(" ", "%20");
    output = output.replaceAll("\n", "%0A");
    return output;
}