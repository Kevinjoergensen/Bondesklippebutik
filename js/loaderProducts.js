load();

function load() {
    let content = $("#pTable").load("index.html #pList");
    document.getElementById("pTable").innerHTML = content;


}