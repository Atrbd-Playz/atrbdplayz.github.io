// ============================ Navbar Active Status Option =============================================
var btnContainer = document.getElementById("navbar");
var btns = btnContainer.getElementsByClassName("aside-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += " active";
    })
}


// ============================Auto Typing Text Animaton =============================================

var typed = new Typed(".typing",{
    strings:["","Web Devoloper...","Student...","Web Designer...","Future Youtuber..."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
