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