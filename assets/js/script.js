// preloader

// ../preloader
gsap.set(".flair", {xPercent: -50, yPercent: -50});

let xSetter = gsap.quickSetter(".flair", "x", "px") //apply it to the #id element's x property and append a "px" unit
let ySetter = gsap.quickSetter(".flair", "y", "px") //apply it to the #id element's x property and append a "px" unit

window.addEventListener("mousemove", e => {  
xSetter(e.x)
ySetter(e.y)
});
// typed
var typed = new Typed('.animate', {
    strings: [
        "Web Developer",
        "Professional Coder ",
        "Web Designer "
    ],
    typeSpeed: 60,
    backSpeed: 60,
    showCursor: false,
    loop: true
});
// ../typed
// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// ../owl carousel
// portfolio
function btn1() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("btn-1").style.background = "#ff014f";
    document.getElementById("btn-2").style.background = "rgba(35, 5, 67, 0.1)";
}
function btn2() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("btn-1").style.background = "rgba(35, 5, 67, 0.1)";
    document.getElementById("btn-2").style.background = "#ff014f";
}
// ../portfolio