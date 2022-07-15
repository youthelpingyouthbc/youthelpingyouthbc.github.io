const teamCircles = () => {
    let yhyLogo = document.querySelector('#team-yhylogo');
    let headShot = document.querySelectorAll('.small-circle');
    let logoOffset = 2;

    for (const i in headShot) {
       
    }
}

teamCircles()

// Testimonials animation

testimonials_starting_position = -2000;
testimonials_position = testimonials_starting_position;
function testimonials_animation() {
    testimonials = document.getElementById("testimonials");
    testimonials_position += 5;
    testimonials.style.transform = "translateX(" + testimonials_position +"px)";

    if (testimonials.style.transform == "translateX(300px)") {
        testimonials_position = testimonials_starting_position;
    }
}

function stop_testimonial_animation() {
    clearInterval(testimonials_interval);
}

function start_testimonial_animation() {
    testimonials_interval = setInterval(testimonials_animation, 25);
}

start_testimonial_animation()
// Testimonials animation ^^^