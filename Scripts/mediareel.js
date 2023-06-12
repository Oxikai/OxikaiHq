var IMAGENUM = 1;

function enlargeIMG(IMAGENUM) {
    document.getElementById("enlarged").innerHTML = `<img id="enlargedIMG" src="IMG/${IMAGENUM}.png" width="800px" height="450px" style="display: block; position: fixed; left:30%; top:30%; transition: all 0.2s;"><img src="IMG/XButton.png" id="XButton" width="50px" style="display: block; position: fixed; left:80%; top:30%;" onclick="closeEnlarge();">`;
    document.getElementById("enlarged").style = "width: 100%; height: 550px; background-color: rgba(100, 100, 100, 0.4); position: fixed; left:0%; top:23%; transition: all 0.2s";
}

function closeEnlarge() {
    document.getElementById("enlarged").innerHTML = `<img id="enlargedIMG" src="IMG/${IMAGENUM}.png" width="0px" height="0px" style="display: none; transition: all 0.2s")><img src="IMG/XButton.png" id="XButton" width="50px" style="display: none;" onclick="closeEnlarge();">`;
    document.getElementById("enlarged").style = "background-color: rgba(100, 100, 100, 0); position: fixed; left:0%; top:23%;";
}

function imgscroll(IMAGENUM) {
    console.log(IMAGENUM);
    if(IMAGENUM > 2) {
        document.getElementById("arrowRight").style="visibility: hidden";
    } else if (IMAGENUM < 2) {
        document.getElementById("arrowLeft").style="visibility: hidden";
    }
    else if (IMAGENUM != 1 && IMAGENUM != 3) {
        document.getElementById("arrowLeft").style="visibility: visible";
        document.getElementById("arrowRight").style="visibility: visible";
    }

    console.log(IMAGENUM);

    if (IMAGENUM == 1) {
        document.getElementById("mediaIMGEx").innerText = 'The newest Alfred update. Now with a "go to" command, which takes you directly to website url\'s.';
    }
    if (IMAGENUM == 2) {
        document.getElementById("mediaIMGEx").innerText = 'A sneek peek at my newest block-based coding program.';
    }
    if (IMAGENUM == 3) {
        document.getElementById("mediaIMGEx").innerText = 'The Evolution of Personalities program is underway!';
    }

    document.getElementById("ReelIMG").outerHTML = `<img src="IMG/${IMAGENUM}.png" alt="Media Reel Image" id="ReelIMG" class="text">`;
    IMAGENUM = IMAGENUM;
}