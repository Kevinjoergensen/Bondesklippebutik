
load();
function load() {
    let title = $("#singleaboutTitle").load("index.html #aboutTitle").innerHTML;
    document.getElementById("singleaboutTitle").innerHTML = title;
    let text = $("#singleaboutText").load("index.html #aboutText").innerHTML;
    document.getElementById("singleaboutText").innerHTML = text;

}