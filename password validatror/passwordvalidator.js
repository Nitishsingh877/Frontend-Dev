function validatepassword() {
    var passin = document.getElementById("passin");
    var passout = document.getElementById("passout");
    var datavalidation = document.getElementById("final-result");

    var passin = passin.value;
    var passout = passout.value;
 if(passin==passout) {
        datavalidation.innerText = "Password Matched. Password validation Successful."
    }
    else {
        datavalidation.innerText = "Password didn't match. Password validation unsuccessful"
    }

}