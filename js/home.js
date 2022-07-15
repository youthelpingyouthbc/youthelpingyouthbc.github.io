function increase_impact_counter() {
    impact_1_text = document.getElementById("impact_1").innerHTML;
    impact_1_final = 500000;
    if (parseInt(impact_1_text) !== parseInt(impact_1_final)) {
        document.getElementById("impact_1").innerHTML = parseInt(impact_1_text) + (impact_1_final*0.01);
    }

    impact_2_text = document.getElementById("impact_2").innerHTML;
    impact_2_final = 100;
    if (parseInt(impact_2_text) !== parseInt(impact_2_final)) {
        document.getElementById("impact_2").innerHTML = parseInt(impact_2_text) + (impact_2_final*0.01);
    }

    impact_3_text = document.getElementById("impact_3").innerHTML;
    impact_3_final = 10;
    if (parseInt(impact_3_text) !== parseInt(impact_3_final)) {
        document.getElementById("impact_3").innerHTML = parseInt(impact_3_text) + (impact_3_final*0.1);
    }

    impact_4_text = document.getElementById("impact_4").innerHTML;
    impact_4_final = 4000;
    if (parseInt(impact_4_text) !== parseInt(impact_4_final)) {
        document.getElementById("impact_4").innerHTML = parseInt(impact_4_text) + (impact_4_final*0.01);
    }
}

function impact_counter() {
    setInterval(increase_impact_counter, 300);
}


window.onscroll = function(event) {
    impact_section_y = document.getElementById("impact_containers").getBoundingClientRect().top - document.body.getBoundingClientRect().top - 500

    if (impact_section_y <= scrollY) {
        impact_counter()
    }
};