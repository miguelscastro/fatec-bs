// Define o comportamento do slider
$('.carrossel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 5000,
  initialSlide: 3,
  fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ],
});

// altera entre emBreve e emCartaz
function changeSection(btn) {
  let banner = document.querySelector("#emCartaz");
  let banner2 = document.querySelector("#emBreve");

  if (btn.id === "buttonCartaz") {
    banner.style.display = "flex";
    banner2.style.display = "none";

    document.getElementById("buttonCartaz").classList.add("vermelho")
    document.getElementById("buttonBreve").classList.remove("vermelho");

    document.querySelector("#h2Breve").classList.add("sr-only")
    document.querySelector("#h2Cartaz").classList.remove("sr-only");
  }
  if (btn.id === "buttonBreve") {
    banner.style.display = "none";
    banner2.style.display = "flex";

    document.getElementById("buttonBreve").classList.add("vermelho")
    document.getElementById("buttonCartaz").classList.remove("vermelho");

    document.querySelector("#h2Cartaz").classList.add("sr-only")
    document.querySelector("#h2Breve").classList.remove("sr-only");
  }
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


// Teclas de atalho
document.addEventListener('keydown', function(event) {
  if (event.key === 'F1') {
      event.preventDefault();
      document.getElementById('topo').scrollIntoView({
          behavior: 'smooth'
      });
  }
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'F2') {
      event.preventDefault();
      document.getElementById('1').scrollIntoView({
          behavior: 'smooth'
      });
  }
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'F3') {
      event.preventDefault();
      document.getElementById('social').scrollIntoView({
          behavior: 'smooth'
      });
  }
});

