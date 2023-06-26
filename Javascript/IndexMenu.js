window.addEventListener('scroll', function () {
    var menu = document.querySelector('ul.menu');

    if (window.pageYOffset > 0) {
        menu.style.backgroundColor = '#696969';
    } else {
        menu.style.backgroundColor = '';
    }

});

window.addEventListener('scroll', function () {
    var menu = document.querySelector('ul.menu');

    if (window.pageYOffset > 0) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

const lupaicone = document.querySelector('.lupaicone');
const lupainput = document.querySelector('.lupainput');
const lupa = document.querySelector('.lupa');

lupaicone.addEventListener('click', function() {
  lupa.classList.toggle('active');
});

function toggleContent(id) {
    var content = document.getElementById("content" + id);
    var isVisible = content.style.display === "block";
  
    if (isVisible) {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Seu código JavaScript aqui
    var currentImage = 0;
    var totalImages = 6;
    var images = document.querySelectorAll('.image-frame img');
    var previousButton = document.getElementById("previousButton");
    var nextButton = document.getElementById("nextButton");

    previousButton.addEventListener("click", function() {
        changeImage(-1);
    });

    nextButton.addEventListener("click", function() {
        changeImage(1);
    });

    function changeImage(n) {
        images[currentImage].classList.remove("active");
        currentImage = (currentImage + n + totalImages) % totalImages;
        images[currentImage].classList.add("active");
    }
  });

  