load();

function load() {
    let title = $("#singlecTitle").load("index.html #cTitle");
    document.getElementById("singlecTitle").innerHTML = title;

    let description = $("#singlecText").load("index.html #cText");
    document.getElementById("singlecText").innerHTML = description;
    

    let phonenumber = $("#singlecNumber").load("index.html #cNumber");
    document.getElementById("singlecNumber").innerHTML = phonenumber;
    setTimeout(()=>{
console.log(pn)
        document.getElementById("singlecNumber").setAttribute('href', "tel:+45" + pn);
    },2000)
}