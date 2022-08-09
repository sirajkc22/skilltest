// function toggleMobile(menu) {
//   menu.classList.toggle('open');
// }
$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});
const nav = document.querySelector(".all-nav");
let navTop = nav.offsetTop;
console.log(navTop)
function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedNav);

function myFunction() {
  var x = document.getElementById("links");
  if (x.className === "links") {
    x.className += " responsive";
  } else {
    x.className = "links";
  }
}


