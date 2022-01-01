

function show_mobile_nav() {
    mobile_nav_bar = document.getElementById("mobile_nav_id");
    nav_blur = document.getElementById('nav_blur');
    nav_cross = document.getElementById('nav_cross');
    nav_ham = document.getElementById('nav_ham');
    if (mobile_nav_bar.style.right == "0px") { // Hide nav bar
        mobile_nav_bar.style.right = "-100%";
        nav_blur.style.display = "none";
        nav_ham.style.display = "block";
        nav_cross.style.display = "none";
    }
    else { // Show nav bar
        mobile_nav_bar.style.right = "0px";
        nav_blur.style.display = "block";
        nav_ham.style.display = "none";
        nav_cross.style.display = "block";
    }
}

var i = 0;
var txt = 'ORLDWIDE // MARCH 18 - 20TH';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing_animation").innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    }
}

typeWriter();