document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");
    const toggleBtn = document.getElementById("toggle-btn");
    const navmenu = document.getElementById("nav-menu");
    toggleBtn.addEventListener("click",() =>{
        if(navmenu.style.display == "none")
            navmenu.style.display = "flex";
        else
            navmenu.style.display = "none";
    });
});