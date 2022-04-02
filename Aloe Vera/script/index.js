$(document).ready(function(){
    let hiddenRow = $(".expand");
    $(".activ-btn").on("click", function(){
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) {
            $(".activ-btn").html("Shrink");
        } else {
            $(".activ-btn").html("Expand");
        }
    });

    $(".modal-close").on("click", function(){
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".video-playbutton-container").on("click", function(){
        $(".modal-canvas").toggleClass("hidden");
    });
    const mobileNav = document.querySelector(".mobile-nav");
    const menuBtn = document.querySelector(".mobile-menu-btn");
    menuBtn.addEventListener("click", () => {
        const visibility = mobileNav.getAttribute("data-visible");
        if(visibility === "false"){
            mobileNav.setAttribute("data-visible", true)
        } else{
            mobileNav.setAttribute("data-visible", false)
        }
    });
    var btn = document.getElementById("back-to-top-btn"),
     body = document.body,
     docElem = document.documentElement,
     offset = 100,
     scrollPos, docHeight;

    docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.scrollHeight, docElem.offsetHeight, docElem.clientHeight);
        if( docHeight != 'undefined'){
            offset = docHeight / 4;
        }

    window.addEventListener("scroll", function(event){
        scrollPos = body.scrollTop || docElem.scrollTop;

        btn.className = (scrollPos > offset) ? "visible" : "";
    });

    btn.addEventListener( "click", function(event){
        body.scrollPos = 0;
    });
});