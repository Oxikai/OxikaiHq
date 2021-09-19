var r = 255;
var g = 0;
var b = 0;

//setInterval("rgbText(r, g, b)", 500);
rgbText(r, g, b);

function rgbText(r, g, b) {
    if (r > 0) {
        r-= 1;
        g+= 1;
    } else if (g > 0) {
        g--;
        b++;
    } else if (b > 0) {
        b--;
        r++;
    }
    
    document.getElementById("html").style.color = `rgb(${r}, ${g}, ${b})`;
    
    console.log(`RGB: ${r}, ${g}, ${b}`);
    setInterval("rgbText(r, g, b)", 500);
}