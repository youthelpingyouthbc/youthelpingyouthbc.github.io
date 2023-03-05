// Navbar
const navHamburgerEl = document.getElementsByClassName("hamburger")[0];
const navMenuEl = document.getElementsByClassName("nav-menu")[0];
let isNavMenuActive = false;

navHamburgerEl.addEventListener("click", () => {
  if (!isNavMenuActive) {
    navMenuEl.classList.add("active");
    navHamburgerEl.classList.add("active");
    isNavMenuActive = true;
  } else {
    navMenuEl.classList.remove("active");
    navHamburgerEl.classList.remove("active");
    isNavMenuActive = false;
  }
});

function closeNav() {
  navMenuEl.classList.remove("active");
  navHamburgerEl.classList.remove("active");
  isNavMenuActive = false;
}

// Countdown
const dayEl = document.getElementsByClassName("day")[0];
const hourEl = document.getElementsByClassName("hour")[0];
const minEl = document.getElementsByClassName("min")[0];
const secEl = document.getElementsByClassName("sec")[0];

const countDownDate = new Date("Mar 17, 2023 12:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  const now = new Date().getTime();
  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayEl.innerHTML = days;
  hourEl.innerHTML = hours;
  minEl.innerHTML = minutes;
  secEl.innerHTML = seconds;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    dayEl.innerHTML = 0;
    hourEl.innerHTML = 0;
    minEl.innerHTML = 0;
    secEl.innerHTML = 0;
  }
}, 1000);

// FAQ Dropdown
const FAQ_COLOURS = [
  "#E57283",
  "#E69689",
  "#61D0D7",
  "#7E96CA",
  "#E57283",
  "#88D3AD",
];
const acc = document.getElementsByClassName("accordion");
const arrow = document.getElementsByClassName("accordion-arrow");
for (let i = 0; i < acc.length; i++) {
  acc[i].style.backgroundColor = FAQ_COLOURS[i];
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    arrow[i].classList.toggle("arrow-active");
    let accordionContent = this.nextElementSibling;
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}

// team
const TEAM = [
  {
    name: "Kelly H.",
    department: "IT",
    position: "Head of IT",
    image: "./youthhacks2023/images/members/Kelly_Hum.jpeg",
  },
  {
    name: "Anna F.",
    department: "IT",
    position: "IT Member",
    image: "./youthhacks2023/images/members/Anna_Fang.jpg",
  },
  {
    name: "Hannah L.",
    department: "IT",
    position: "IT Member",
    image: "./youthhacks2023/images/members/Hannah_Li.jpg",
  },
  {
    name: "Trinity M.",
    department: "President",
    position: "President",
    image: "./youthhacks2023/images/members/Trinity_Ma.jpg",
  },
  {
    name: "Emily Q.",
    department: "HR",
    position: "Head of HR",
    image: "./youthhacks2023/images/members/emily_qin.JPG",
  },
  {
    name: "Ramika S.",
    department: "Marketing",
    position: "Head of Marketing",
    image: "./youthhacks2023/images/members/Ramika_De_Silva.PNG",
  },
  
  {
    name: "Amanda M.",
    department: "Marketing",
    position: "Marketing Manager",
    image: "./youthhacks2023/images/members/Amanda_Miao.JPG",
  },
  {
    name: "Hersimer D.",
    department: "Marketing",
    position: "Marketing Member",
    image: "./youthhacks2023/images/members/Hersimer_Dhaliwal.png",
  },
  {
    name: "Parveen B.",
    department: "Admin",
    position: "Head of Administration",
    image: "./youthhacks2023/images/members/Parveen Brar.jpg",
  },
  {
    name: "Chetan B.",
    department: "Events",
    position: "Events Manager",
    image: "./youthhacks2023/images/members/Chetan_Brar.jpg",
  },
  {
    name: "Arabella M.",
    department: "Marketing",
    position: "Marketing Member",
    image: "./youthhacks2023/images/members/Arabella_Mew.jpg",
  },
  {
    name: "Ethan Y.",
    department: "Marketing",
    position: "Marketing Member",
    image: "./youthhacks2023/images/members/Ethan_Yiu.jpg",
  },
  {
    name: "Goldspring H.",
    department: "Marketing",
    position: "Marketing Member",
    image: "./youthhacks2023/images/members/Goldspring_Ha.jpg",
  },
  {
    name: "Tej N.",
    department: "Admin",
    position: "Administration Member",
    image: "./youthhacks2023/images/members/Tej_Nathoo.jpg",
  },
];

const TEAM_COLOURS = ["#7E96CA", "#61D0D7", "#88D3AD", "#E57283"];


// const teamProfiles = [...document.getElementsByClassName("member-profile")];
TEAM.forEach((element, count) => {
  const {name, department, image} = element;
  const gallery = document.getElementsByClassName("gallery")[0];
  const memberDiv = document.createElement("div");
  const memberProfile = document.createElement("img");
  const nameDiv = document.createElement("div");
  const memberName = document.createElement("p");
  const memberTeam = document.createElement("p");

  
  memberName.innerHTML = name;
  memberTeam.innerHTML = department;
  // memberProfile.src = "https://./youthhacks2023/images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940";
  memberProfile.src = image;

  memberProfile.classList.add("member-profile")
  nameDiv.classList.add("team-name")
  memberDiv.classList.add("member")

  nameDiv.appendChild(memberName);
  nameDiv.appendChild(memberTeam);
  gallery.appendChild(memberDiv);
  memberDiv.appendChild(memberProfile);
  memberDiv.appendChild(nameDiv);
  console.log(memberDiv);

  let index = count % TEAM_COLOURS.length;
  memberProfile.style.boxShadow = `12px 12px 0px ${TEAM_COLOURS[index]}`;
});


let flickity = new Flickity(".gallery", {
  // options
  cellAlign: "center",
  contain: false,
  draggable: false,
  freeScroll: false,
  wrapAround: true,
  autoPlay: false,
  groupCells: false,
  pageDots: false,
  friction: 0.25,
  selectedAttraction: 0.015,
  prevNextButtons: false
});
flickity.x = 0;

const tickerSpeed = 2
let isPaused = false;
const pause = () => {
  isPaused = true;
};

const play = () => {
  if (isPaused) {
    isPaused = false;
    window.requestAnimationFrame(update);
  }
};
const update = () => {
  if (isPaused) return;
  if (flickity.slides) {
    flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
    flickity.selectedIndex = flickity.dragEndRestingSelect();
    flickity.updateSelectedSlide();
    flickity.settle(flickity.x);
  }
  window.requestAnimationFrame(update);
};

TEAM.forEach((el, index)=>{
  const slideshowEl = document.getElementsByClassName("member-profile")[index];
  slideshowEl.addEventListener('mouseenter', pause, false);
  slideshowEl.addEventListener('focusin', pause, false);
  slideshowEl.addEventListener('mouseleave', play, false);
  slideshowEl.addEventListener('focusout', play, false);
})


update()