let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) { // for loop para mag loop lang sa imgs 
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {// same approach dito
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } //every mag reset babalik lang sa 1st img

  slides[slideIndex - 1].style.display = "block"; // para mag activate yung hover yung animation nung slider
  dots[slideIndex - 1].className += " active"; //para mag activate yung hover nung dots 

  setTimeout(showSlides, 3000); //automatic mag cchange color 3000 yung time
}
