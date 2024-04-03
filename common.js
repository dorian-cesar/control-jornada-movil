/*const sidebarToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarToggle.classList.toggle('active');
});*/

const divider = "-----------------------------\n";

function toColumn(left,right){
    const space = 29-(left.length+right.length);
    return left + " ".repeat(space) + right + "\n";
}

function toBT(input) {
    var output = "rawbt:" + input;
    output = output.replaceAll(" ", "%20");
    output = output.replaceAll("\n", "%0A");
    return output;
}