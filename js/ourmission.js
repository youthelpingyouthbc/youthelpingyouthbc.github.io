// Team animation
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addOrbitAnimation() {
    
    let members = document.body.querySelectorAll('.member_container');
    for (let i=0; i<members.length; i++) {
        members[i].classList.add("inner_orbit");
        await sleep(1000);
    }
}

const teamCircles = () => {
    // Maybe no animation??? just have the heads float near the logo? or just orbit and not go in
    team = {
        "members":[
            {
                name: "Trinity Ma",
                department: "",
                position: "President",
                image: "imgs/members/Trinity_Ma.jpg",
                position_x:  "25%",
                position_y:  "0px"
            },
            {
                name: "Donald Lee",
                department: "IT",
                position: "Head of IT",
                image: "imgs/members/Donald_Lee.jpg",
                position_x:  "65%",
                position_y:  "0px"
            },
            {
                name: "Cathy Ha",
                department: "Events",
                position: "Events Manager",
                image: "imgs/members/Cathy Ha.jpg",
                position_x:  "25%",
                position_y:  "-150px"
            },
            {
                name: "Emily Qin",
                department: "HR",
                position: "Head of HR",
                image: "imgs/members/emily_qin.JPG",
                position_x:  "65%",
                position_y:  "-150px"
            },
            {
                name: "Ramika De Silva",
                department: "Marketing",
                position: "Head of Marketing",
                image: "imgs/members/Ramika_De_Silva.PNG",
                position_x:  "45%",
                position_y:  "-250px"
            },
            // INNER CORNERS
            {
                name: "Trinity Ma",
                department: "",
                position: "President",
                image: "imgs/members/Trinity_Ma.jpg",
                position_x:  "45%",
                position_y:  "150px"
            },{
                name: "Donald Lee",
                department: "IT",
                position: "Head of IT",
                image: "imgs/members/Donald_Lee.jpg",
                position_x:  "60%",
                position_y:  "150px"
            },
            {
                name: "Cathy Ha",
                department: "Events",
                position: "Events Manager",
                image: "imgs/members/Cathy Ha.jpg",
                position_x:  "57%",
                position_y:  "-250px"
            },
            {
                name: "Emily Qin",
                department: "HR",
                position: "Head of HR",
                image: "imgs/members/emily_qin.JPG",
                position_x:  "32%",
                position_y:  "-250px"
            },
            {
                name: "Ramika De Silva",
                department: "Marketing",
                position: "Head of Marketing",
                image: "imgs/members/Ramika_De_Silva.PNG",
                position_x:  "30%",
                position_y:  "150px"
            },
            // OUTER CIRCLE
            {
                name: "Trinity Ma",
                department: "",
                position: "President",
                image: "imgs/members/Trinity_Ma.jpg",
                position_x:  "10%",
                position_y:  "20px"
            },
            {
                name: "Donald Lee",
                department: "IT",
                position: "Head of IT",
                image: "imgs/members/Donald_Lee.jpg",
                position_x:  "80%",
                position_y:  "30px"
            },
            {
                name: "Cathy Ha",
                department: "Events",
                position: "Events Manager",
                image: "imgs/members/Cathy Ha.jpg",
                position_x:  "10%",
                position_y:  "-160px"
            },
            {
                name: "Emily Qin",
                department: "HR",
                position: "Head of HR",
                image: "imgs/members/emily_qin.JPG",
                position_x:  "80%",
                position_y:  "-120px"
            },
            {
                name: "Ramika De Silva",
                department: "Marketing",
                position: "Head of Marketing",
                image: "imgs/members/Ramika_De_Silva.PNG",
                position_x:  "45%",
                position_y:  "-394px"
            },

            {
                name: "Trinity Ma",
                department: "",
                position: "President",
                image: "imgs/members/Trinity_Ma.jpg",
                position_x:  "45%",
                position_y:  "304px"
            },{
                name: "Donald Lee",
                department: "IT",
                position: "Head of IT",
                image: "imgs/members/Donald_Lee.jpg",
                position_x:  "75%",
                position_y:  "150px"
            },
            {
                name: "Cathy Ha",
                department: "Events",
                position: "Events Manager",
                image: "imgs/members/Cathy Ha.jpg",
                position_x:  "72%",
                position_y:  "-255px"
            },
            {
                name: "Emily Qin",
                department: "HR",
                position: "Head of HR",
                image: "imgs/members/emily_qin.JPG",
                position_x:  "17%",
                position_y:  "-255px"
            },
            {
                name: "Ramika De Silva",
                department: "Marketing",
                position: "Head of Marketing",
                image: "imgs/members/Ramika_De_Silva.PNG",
                position_x:  "15%",
                position_y:  "155px"
            },
        ]
    }
    
    let team_members_container = document.getElementById("team_members_container");

    for (let i=0; i<team["members"].length; i++) {
        // alert(team["members"][i]["name"])
        member_container = document.createElement("div");
        
        switch (team["members"][i]["department"]) {
            case "IT":
                department_colour = "#778AB1";
                break;
            case "Marketing":
                department_colour = "#FF7257";
                break;
            case "Events":
                department_colour = "#1A3263";
                break;
            case "HR":
                department_colour = "#F5B46B";
                break;
            case "Administration":
                department_colour = "#778AB1";
                break;
            default:
                department_colour = "#333333";
                break;
        };

        member_container.style.border = "3px solid" + department_colour;
        member_container.style.top = team["members"][i]["position_y"];
        member_container.style.left = team["members"][i]["position_x"];

        member_container.classList.add("member_container")
        member_container.innerHTML = "<img class='member_image' src='" + team["members"][i]["image"] + "'>";
        
        team_members_container.appendChild(member_container);
    }

    addOrbitAnimation();
}

teamCircles()
// Team section ^^^

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