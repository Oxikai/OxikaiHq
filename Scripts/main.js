/*function toggleSignUp() {
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
}*/

var paintList = ["paint-dragonshard.png", "resin-pimpcron.png"];
var printList = ["resin-axolotl.jpg", "resin-shrektopus.jpg", "resin-pimpcron.png", "Med pen.jpg"];

var scrollId = 0;

function imgEnlarge(source) {
    var con = document.getElementById("enIMG");
    var image = document.getElementById("imgbig");
    con.style.display = "block";
    image.src = `${source}`;
}

function hideIMG() {
    document.getElementById("enIMG").style.display = "none";
}

function scrollMedia(list, scroller, id) {
    var gallery = document.getElementById(id);
    scrollId += scroller;
    if(scrollId == list.length) {
        scrollId = 0;
    } else if(scrollId < 0) {
        scrollId = list.length - 1;
    }
    gallery.src = `../IMG/${list[scrollId]}`;
}