phonenumber();

function phonenumber() {
    let contactNumber = document.getElementById("cNumber").innerHTML;
    contactNumber = contactNumber.replace(/\s/g, '');

    document.getElementById("cNumber").setAttribute('href', "tel:+45" + contactNumber);
}