document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.querySelector('.main');

    mainDiv.addEventListener('animationend', () => {
        setTimeout(() => {
            document.body.style.background = "url('4cbab97eaf40a31982176951814d0c11.gif') ";
        }, 2000);
    });
});
const sections = document.querySelectorAll('.main > div');
let currentIndex = 0;
function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        currentIndex = index;
    }
}

document.getElementById('prev').addEventListener('click', () => {
    scrollToSection(currentIndex - 1);
});

document.getElementById('next').addEventListener('click', () => {
    scrollToSection(currentIndex + 1); 
});
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
const roles = [
    "Web Developer",
    "Automation Worker",
    "Business Model Creator",
    "Marketing Expert"
];

let index = 0;
const spanElement = document.getElementById("me");

function updateRole() {
    spanElement.textContent = roles[index];
    index = (index + 1) % roles.length; 
}
setInterval(updateRole, 2000);
updateRole();
const homeButton = document.getElementById("home");
const introSection = document.getElementById("intro");
homeButton.addEventListener("click", () => {
    introSection.scrollIntoView({ behavior: "smooth" });
});
const skills = document.getElementById("skills");
const skill = document.getElementById("skill");
skills.addEventListener("click", () => {
    skill.scrollIntoView({ behavior: "smooth" });
});
const education = document.getElementById("education");
const edu = document.getElementById("edu");
education.addEventListener("click", () => {
    edu.scrollIntoView({ behavior: "smooth" });
});
const projects = document.getElementById("projects");
const pro = document.getElementById("pro");
projects.addEventListener("click", () => {
    pro.scrollIntoView({ behavior: "smooth" });
});
const experience = document.getElementById("experience");
const ex = document.getElementById("ex");
experience.addEventListener("click", () => {
    ex.scrollIntoView({ behavior: "smooth" });
});
const contact = document.getElementById("contact");
const con = document.getElementById("con");
contact.addEventListener("click", () => {
    con.scrollIntoView({ behavior: "smooth" });
});
function openMail() {
    const email = "veddixit195@gmail.com";
    const subject = "Subject goes here";
    const body = "Message body goes here.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}