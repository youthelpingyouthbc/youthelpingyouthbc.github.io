// Team animation

const teamCircles = () => {
    // Maybe no animation??? just have the heads float near the logo? or just orbit and not go in
    team = {
        "members":[
            {
                name: "Trinity Ma",
                department: "",
                position: "President",
                image: "imgs/members/Trinity_Ma.jpg",
                position_x:  "20%",
                position_y:  "0px"
            },
            {
                name: "Donald Lee",
                department: "IT",
                position: "Head of IT",
                image: "imgs/members/Donald_Lee.jpg",
                position_x:  "70%",
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
                position_x:  "70%",
                position_y:  "-150px"
            },
            {
                name: "Ramika De Silva",
                department: "Marketing",
                position: "Head of Marketing",
                image: "imgs/members/Ramika_De_Silva.PNG",
                position_x:  "45%",
                position_y:  "-40vh"
            },
            // INNER CORNERS
            {
                name: "Kelly Hum",
                department: "IT",
                position: "IT Member",
                image: "imgs/members/Kelly_Hum.jpeg",
                position_x:  "45%",
                position_y:  "30vh"
            },{
                name: "Amanda Miao",
                department: "Marketing",
                position: "Marketing Manager",
                image: "imgs/members/Amanda_Miao.JPG",
                position_x:  "60%",
                position_y:  "30vh"
            },
            {
                name: "Hersimer Dhaliwal",
                department: "Marketing",
                position: "Marketing Member",
                image: "imgs/members/Hersimer_Dhaliwal.png",
                position_x:  "57%",
                position_y:  "-45vh"
            },
            {
                name: "Parveen Brar",
                department: "Administration",
                position: "Head of Administration",
                image: "imgs/members/Parveen Brar.jpg",
                position_x:  "32%",
                position_y:  "-45vh"
            },
            // {
            //     name: "Ramika De Silva",
            //     department: "Marketing",
            //     position: "Head of Marketing",
            //     image: "imgs/members/Ramika_De_Silva.PNG",
            //     position_x:  "30%",
            //     position_y:  "150px"
            // },
            // // OUTER CIRCLE
            // {
            //     name: "Trinity Ma",
            //     department: "",
            //     position: "President",
            //     image: "imgs/members/Trinity_Ma.jpg",
            //     position_x:  "10%",
            //     position_y:  "20px"
            // },
            // {
            //     name: "Donald Lee",
            //     department: "IT",
            //     position: "Head of IT",
            //     image: "imgs/members/Donald_Lee.jpg",
            //     position_x:  "80%",
            //     position_y:  "30px"
            // },
            // {
            //     name: "Cathy Ha",
            //     department: "Events",
            //     position: "Events Manager",
            //     image: "imgs/members/Cathy Ha.jpg",
            //     position_x:  "10%",
            //     position_y:  "-160px"
            // },
            // {
            //     name: "Emily Qin",
            //     department: "HR",
            //     position: "Head of HR",
            //     image: "imgs/members/emily_qin.JPG",
            //     position_x:  "80%",
            //     position_y:  "-120px"
            // },
            // {
            //     name: "Ramika De Silva",
            //     department: "Marketing",
            //     position: "Head of Marketing",
            //     image: "imgs/members/Ramika_De_Silva.PNG",
            //     position_x:  "45%",
            //     position_y:  "-394px"
            // },

            // {
            //     name: "Trinity Ma",
            //     department: "",
            //     position: "President",
            //     image: "imgs/members/Trinity_Ma.jpg",
            //     position_x:  "45%",
            //     position_y:  "304px"
            // },{
            //     name: "Donald Lee",
            //     department: "IT",
            //     position: "Head of IT",
            //     image: "imgs/members/Donald_Lee.jpg",
            //     position_x:  "75%",
            //     position_y:  "150px"
            // },
            // {
            //     name: "Cathy Ha",
            //     department: "Events",
            //     position: "Events Manager",
            //     image: "imgs/members/Cathy Ha.jpg",
            //     position_x:  "72%",
            //     position_y:  "-255px"
            // },
            // {
            //     name: "Emily Qin",
            //     department: "HR",
            //     position: "Head of HR",
            //     image: "imgs/members/emily_qin.JPG",
            //     position_x:  "17%",
            //     position_y:  "-255px"
            // },
            // {
            //     name: "Ramika De Silva",
            //     department: "Marketing",
            //     position: "Head of Marketing",
            //     image: "imgs/members/Ramika_De_Silva.PNG",
            //     position_x:  "15%",
            //     position_y:  "155px"
            // },
        ]
    }
    
    let team_members_container = document.getElementById("team_members_container");

    for (let i=0; i<team["members"].length; i++) {
        // alert(team["members"][i]["name"])
        member_container = document.createElement("div");
        
        switch (team["members"][i]["department"]) {
            case "IT":
                department_colour = "#55CEBC";
                break;
            case "Marketing":
                department_colour = "#FF7257";
                break;
            case "Events":
                department_colour = "#000000";
                break;
            case "HR":
                department_colour = "#F5B46B";
                break;
            case "Administration":
                department_colour = "#000000";
                break;
            default:
                department_colour = "#778AB1"; // President
                break;
        };

        member_container.style.border = "3px solid" + department_colour;
        member_container.style.top = team["members"][i]["position_y"];
        member_container.style.left = team["members"][i]["position_x"];

        member_container.classList.add("member_container")
        member_container.innerHTML = "<img class='member_image' src='" + team["members"][i]["image"] + "'><span class='tooltiptext'>" + team["members"][i]["name"] + ", " + team["members"][i]["position"] + "</span>";
        
        team_members_container.appendChild(member_container);
    }
}

teamCircles()
// Team section ^^^
// Our Values Selection
const ourValueButtons = document.querySelectorAll('.our_values_words'); // select all the 'our values' buttons
const ourValueDetails = [ //nodelist of specific pronounciation/etc for words
    {
        'title': 'com·mu·ni·ty',
        'pronounce': '/kəˈmyo͞onədē/',
        'type': 'noun',
        'desc': 'a feeling of fellowship with others, as a result of sharing common attitudes, interests, and goals'
    },
    {
        'title': 'em·pow·er·ment',
        'pronounce': '/əmˈpouərmənt/',
        'type': 'noun',
        'desc': 'the process of becoming stronger and more confident, especially in controlling one\'s life and claiming one\'s rights'
    },
    {
        'title': 'in·no·va·tion',
        'pronounce': '/ˌinəˈvāSH(ə)n/',
        'type': 'noun',
        'desc': 'the action or process of innovating'
    },
    {
        'title': 'trans·par·en·cy',
        'pronounce': '/ˌtran(t)ˈsperənsē/',
        'type': 'noun',
        'desc': 'the condition of being transparent'
    },
    {
        'title': 'personal growth',
        'pronounce': '/test/',
        'type': 'noun',
        'desc': 'various techniques for improving one’s habits, behavior, actions and reactions'
    },
]

const ourValueDetailsArray = Array.from(ourValueDetails); //convert nodelist to array

const sortValueArray = (value_name) => { // function that returns object in ourvaluedetails array (in the format of ourvaluedetails[0])
    const value_indexes = { // object that corresponds values to numbers
        'community': 0,
        'empowerment': 1,
        'innovation': 2,
        'transparency': 3,
        'personal growth': 4
    };

    return ourValueDetailsArray[value_indexes[value_name]]; //value_indexes[value_name] will return a number based on the value_indexes object
}

for (const button of ourValueButtons) { // loop through every button
    button.addEventListener('click', function(){ // check if button is clicked
        const value = button.textContent;
        const value_title = document.querySelector('#our_values_title');
        const value_prn = document.querySelector('#our_values_pronounce');
        const value_type = document.querySelector('#our_values_type');
        const value_desc = document.querySelector('#our_values_description');

        value_title.textContent = sortValueArray(value).title; // replace the inner html w/ the title value from the object in the array
        value_prn.textContent = sortValueArray(value).pronounce;
        value_type.textContent = sortValueArray(value).type;
        value_desc.textContent = sortValueArray(value).desc;
    })
}

// Testimonials Animation

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