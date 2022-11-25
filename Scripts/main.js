function toggleSignUp() {
    var DOCID = document.getElementById("signupform");
    if(DOCID.style.display == "none") {
        DOCID.style.display = "block";
    } else {
        DOCID.style.display = "none";
    }
    //document.getElementById(signupform).style.display = "block";
}

function toggleSignIn() {
    var DOCID = document.getElementById("signinform");
    if(DOCID.style.display == "none") {
        DOCID.style.display = "block";
    } else {
        DOCID.style.display = "none";
    }
    //document.getElementById(signupform).style.display = "block";
}