document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel")

    function openPanel () {
        this.classList.toggle('open');
    }
    function toggleWords (e) {
        //console.log(e.propertyName);
        if(e.propertyName.includes("flex")) {
            this.classList.toggle("open-active");
        }
        // The code below will not work on its own becasue
        // there are multiple 
        // transition end events
        // Find the specific transition even and toggle 
        // the class once the transition has ended
        // this.classList.toggle('open-active')
    }
    panels.forEach(panel => panel.addEventListener("click", openPanel));
    panels.forEach((panel) => panel.addEventListener("transitionend", toggleWords));
})