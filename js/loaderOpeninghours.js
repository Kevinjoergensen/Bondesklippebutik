load();
todaysDay();

function load() {
    let title = $("#singleopeningtitle").load("index.html #oTitle").innerHTML;
    document.getElementById("singleopeningtitle").innerHTML = title;
    
    let mandag = $("#monday").load("index.html #monday").innerHTML;
    document.getElementById("monday").innerHTML = mandag;
    let tirsdag = $("#tuesday").load("index.html #tuesday").innerHTML;
    document.getElementById("tuesday").innerHTML = tirsdag;
    let onsdag = $("#wednesday").load("index.html #wednesday").innerHTML;
    document.getElementById("wednesday").innerHTML = onsdag;
    let torsdag = $("#thursday").load("index.html #thursday").innerHTML;
    document.getElementById("thursday").innerHTML = torsdag;
    let fredag = $("#friday").load("index.html #friday").innerHTML;
    document.getElementById("friday").innerHTML = fredag;
    let lørdag = $("#saturday").load("index.html #saturday").innerHTML;
    document.getElementById("saturday").innerHTML = lørdag;
    let søndag = $("#sunday").load("index.html #sunday").innerHTML;
    document.getElementById("sunday").innerHTML = søndag;
    let ferie = $("#oferie").load("index.html #ferie");
    document.getElementById("oferie").innerHTML = ferie;

}


function todaysDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    var n = weekday[d.getDay()];

    document.getElementById(n).style.cssText = "color: #a51b28";
};


function holiday() {
    let tekst = document.getElementById("ferie").innerHTML;
    if (tekst == null || tekst.length < 1 || tekst == "ingen ferie" || tekst == "Ingen ferie") {
        document.getElementById("ferierow").style = "visibility: hidden"
    }
}