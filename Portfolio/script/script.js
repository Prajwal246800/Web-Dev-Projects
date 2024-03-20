const navLink = document.querySelectorAll(".navLink");
function linkAction() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".navMenu a[href*=" + sectionId + "]"
            );
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("activeLink");
        } else {
            sectionsClass.classList.remove("activeLink");
        }
    });
};
window.addEventListener("scroll", scrollActive);
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
});
sr.reveal(".homeData, .aboutImg, .skillsSubtitle, .skillsText", {});
sr.reveal(".homeImg, .aboutSubtitle, .aboutText, .skillsImg", { delay: 400 });
sr.reveal(".homeSocialIcon", { interval: 200 });
sr.reveal(".skillsData, .workImg, .contactInput", { interval: 200 });