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
            },
            {
                name: "Gagan Mann",
                department: "Events",
                position: "Head of Events",
                image: "imgs/members/Gagan_Mann.jpg",
  
            },
            {
                name: "Cathy Ha",
                department: "Events",
                position: "Events Manager",
                image: "imgs/members/Cathy Ha.jpg",
  
            },
            {
                name: "Emily Qin",
                department: "HR",
                position: "Head of HR",
                image: "imgs/members/emily_qin.JPG",

            },
            {
                name: "Ramika De Silva",
                department: "Marketing",
                position: "Head of Marketing",
                image: "imgs/members/Ramika_De_Silva.PNG",

            },
            {
                name: "Kelly Hum",
                department: "IT",
                position: "Head of IT",
                image: "imgs/members/Kelly_Hum.jpeg",

            },{
                name: "Amanda Miao",
                department: "Marketing",
                position: "Marketing Manager",
                image: "imgs/members/Amanda_Miao.JPG",

            },
            {
                name: "Hersimer Dhaliwal",
                department: "Marketing",
                position: "Marketing Member",
                image: "imgs/members/Hersimer_Dhaliwal.png",

            },
            {
                name: "Parveen Brar",
                department: "Administration",
                position: "Head of Administration",
                image: "imgs/members/Parveen Brar.jpg",

            },
            {
                name: "Anna Fang",
                department: "IT",
                position: "IT Member",
                image: "imgs/members/Anna_Fang.jpg",
            },
            {
                name: "Hannah Li",
                department: "IT",
                position: "IT Member",
                image: "imgs/members/Hannah_Li.jpg",
            },
            {
                name: "Chetan Brar",
                department: "Events",
                position: "Events Manager",
                image: "imgs/members/Chetan_Brar.jpg",
            },
            {
                name: "Arabella Mew",
                department: "Marketing",
                position: "Marketing Member",
                image: "imgs/members/Arabella_Mew.jpg",
            },
            {
                name: "Lynn Chen",
                department: "Administration",
                position: "Administration Member",
                image: "imgs/members/Lynn_Chen.jpg",

            },
            {
                name: "Ethan Yiu",
                department: "Marketing",
                position: "Marketing Member",
                image: "imgs/members/Ethan_Yiu.jpg",

            },
            {
                name: "Goldspring Ha",
                department: "Marketing",
                position: "Marketing Member",
                image: "imgs/members/Goldspring_Ha.jpg",

            },
            {
                name: "Tej Nathoo",
                department: "Administration",
                position: "Administration Member",
                image: "imgs/members/Tej_Nathoo.jpg",

            },
            
        ]
    }
    
    let team_members_container = document.getElementById("team_members_container");
    let baseRadius = 190;
    const innerLayerCirclePositions = [0, 45, 90, 135, 180, 225, 270, 315]; //angles at which the small circles are located
    const outerLayerCirclePositions = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
    let  currentLayerCirclePositions = innerLayerCirclePositions;
    const COLORS = {
        IT: "#55CEBC",
        Marketing: "#FF7257",
        Event: "#333333",
        HR : "#F5B46B",
        Administration : "#1A3263"
    }
    team.members.forEach((member, index) => {
        const member_container = document.createElement("div");
        let currentLayer;
        let radius = baseRadius;
        department_colour = COLORS[member.department] || "#778AB1"

        if (index >= 16) {
            currentLayer = 3;
            currentLayerCirclePositions = innerLayerCirclePositions;
            const offset = 200;
            radius += offset;
        }
        else if (index >= 8 ){
            currentLayerCirclePositions = outerLayerCirclePositions;
            const offset = 120;
            radius += offset;
            currentLayer = 2;
        }
        else{
            currentLayerCirclePositions = innerLayerCirclePositions;
            currentLayer = 1;
            const offset = 0;
            radius += offset;
        }
        let animationName = `layer-${currentLayer}-${Math.floor(currentLayerCirclePositions[index%8])}`; 
        //^^ adding "layer number" to animation name will prevent circles from using the same keyframes (diff layers will have diff radius) 
        const css = window.document.styleSheets[3];
        css.insertRule(
            `
        @keyframes orbitAnimation-${animationName} {
        from {
            transform: rotate(${
            currentLayerCirclePositions[index%8]
            }deg) translateX(${radius}px) rotate(-${currentLayerCirclePositions[index%8]}deg);
        }
        to {
            transform: rotate(${
            currentLayerCirclePositions[index%8] + 360
            }deg) translateX(${radius}px) rotate(-${currentLayerCirclePositions[index%8] + 360}deg);
        }
        }`,
            css.cssRules.length
        );
            member_container.classList.add("member_container")
            member_container.style.transform = `rotate(${currentLayerCirclePositions[index%8]}deg) translate(${radius}px) rotate(-${currentLayerCirclePositions[index%8]}deg);`;
            // ^^ positioning the member headshot to go in a circle
            member_container.style.border = `3px solid ${department_colour}`;
            member_container.style.backgroundImage = `URL("${member.image}")`;
            member_container.style.animation = `orbitAnimation-${animationName} 20s linear infinite`;
            member_container.innerHTML = "<span class='tooltiptext'>" + member.name + ", " + member.position + "</span>"; 
            team_members_container.appendChild(member_container);
        
    });
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
    testimonials_position += 1;
    testimonials.style.transform = "translateX(" + testimonials_position +"px)";

    if (testimonials.style.transform == "translateX(300px)") {
        testimonials_position = testimonials_starting_position;
    }
}

function stop_testimonial_animation() {
    clearInterval(testimonials_interval);
}

function start_testimonial_animation() {
    testimonials_interval = setInterval(testimonials_animation, 10);
}

start_testimonial_animation()
// Testimonials animation ^^^