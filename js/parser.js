holiday();

function holiday() {
    let tekst = document.getElementById("ferie").innerHTML;
    if (tekst == null || tekst.length < 1 || tekst == "ingen ferie" || tekst == "Ingen ferie") {
        document.getElementById("ferierow").style = "visibility: hidden"
    }
}
// phonenumber();

// function phonenumber() {
//     let contactNumber = document.getElementById("cNumber").innerHTML;
//     contactNumber = contactNumber.replace(/\s/g, '');

//     document.getElementById("cNumber").setAttribute('href', "tel:+45" + contactNumber);
// }

todaysDay();


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

    document.getElementById(n).style.cssText = "color: #a51b28; font-weight: bold";
};

