function validateForm() {

    if (document.getElementById("sname").value == "") {
        alert("Please enter Student Name");
        return false;
    }

    if (document.getElementById("mobile").value.length != 10) {
        alert("Please enter valid 10-digit mobile number");
        return false;
    }

    if (document.getElementById("class").value == "") {
        alert("Please select class");
        return false;
    }

    alert("Admission Form Submitted Successfully!");
    return true;
}
