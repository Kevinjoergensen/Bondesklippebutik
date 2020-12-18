
todaysOpeningHours();

function todaysOpeningHours() {
    let now = new Date();
    console.log(now)
    let time;
    let next = nextOpenday(now);
    let nextOpen = getOpeningHoursForDate(next).split(/ - /)
    let nextMonth = next.getMonth() +1;
    if (getOpeningHoursForDate(now) == "Lukket") {
        time = "Lukket"
        document.getElementById('toastStatus').innerHTML = "Vi har lukket."
        document.getElementById('openingHours').innerHTML = "Vi åbner igen d. " + next.getDate() + "/" + next.getMonth() + " kl. " + nextOpen[0]+"."; 
        document.getElementById('callAction').innerHTML = "Ring når vi åbner og bestil tid på tlf: ";
    } else {
        let now = new Date();
        time = getOpeningHoursForDate(now).split(/ - /);
        
        let startTime = new Date();
        let endTime = new Date();
        startTime.setHours(time[0].slice(0, 2), time[0].slice(3, 5), 0);
        endTime.setHours(time[1].slice(0, 2), time[1].slice(3, 5), 0);
        now = new Date();
        if (startTime < now && endTime > now) {
            document.getElementById('toastStatus').innerHTML = "Vi har åbent!"
            document.getElementById('openingHours').innerHTML = "Vi har åben " + getOpeningHoursForDate(now) + " idag."
            document.getElementById('callAction').innerHTML = "Ring og bestil en tid på tlf: "; 
        } else if (now > startTime && now < endTime) {
            document.getElementById('toastStatus').innerHTML = "Vi åbner snart."
            document.getElementById('openingHours').innerHTML = "Vi åbner klokken " + time[0] + ".";
            document.getElementById('callAction').innerHTML = "Ring til os når vi åbner på tlf: ";
        } else if (now > endTime && now > startTime) {
            document.getElementById('toastStatus').innerHTML = "Vi har lukket."
            document.getElementById('openingHours').innerHTML = "Vi åbner igen d. " + next.getDate() + "/" + nextMonth + " kl. " + nextOpen[0]+"."; 
            document.getElementById('callAction').innerHTML = "Ring når vi åbner og bestil tid på tlf: ";
        } else {
            document.getElementById('toastStatus').innerHTML = "Bestil en tid"
            document.getElementById('openingHours').innerHTML = "Vi åbner igen d. " + next.getDate() + "/" + nextMonth + " kl. " + nextOpen[0]+"."; 
            document.getElementById('callAction').innerHTML = "Ring når vi åbner og bestil tid på tlf: ";
        }
    }
}


function getOpeningHoursForDate(date) {
    let d = new Date(date);
    let weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    var n = weekday[d.getDay()];
    return document.getElementById(n).innerHTML;
};

function nextOpenday(date) {
    var d = date;
    let found = false;
    let index = 1;

    while (!found) {
        d.setDate(date.getDate() + index)
        if (getOpeningHoursForDate(d) !== "Lukket") {
            found = true;
        }
    }
    
    return d;
}