// document .addEventListener('DOMContentLoaded' , function() {
//     const navLinks =
//     document .querySelectorAll ('nav ul li a');
//     navLinks .forEach(link => {

//         link .addEventListener ('click', function(event) {
//             event .preventDefault();
//             const section =
//             document .querySelector (this .getAt-tribute(href));

//             section .scrollIntoView( { behavior: 'smooth'});
//         });
//     });
// });
// function changeVideo(videoFile) {
//     const videoPlayer = document.getElementById('videoPlayer') ;
//     const videoSource =
//     document.getElementById ('videoSource') ;

//            videoSource .src = PushSubscriptionOptions;
//            videoPlayer .onload() ;
//            videoPlayer .play();
// }

// ---------------------------------------------
// const images = document.querySelectorAll('.carousel-slide img');
// let currentIndex = 0;

// function showNextImage() {
//   // Remove the 'active' class from the current image
//   images[currentIndex].classList.remove('active');
  
//   // Increment the index, looping back to 0 if at the end
//   currentIndex = (currentIndex + 1) % images.length;
  
//   // Add the 'active' class to the next image
//   images[currentIndex].classList.add('active');
// }

// // Set the initial image to be active
// images[currentIndex].classList.add('active');

// // Change the image every 3 seconds (3000ms)
// setInterval(showNextImage, 3000);


// let slideindex = 0;
// const slides =
// document.querySelectorAll ('.carousel-slide img');
// const totalSlide = slides.length;

// function showNextSlide() {
//     slides[slideIndex].style.display = 'none';
//     slideindex = (slideIndex + 1) % totalSlide;
//     slides[slideindex].style.display = 'block';
// }
// function showPrevSlide() {
//     slides[slideindex].style.display = 'none';
//     slideindex = (slideIndex - 1 + totalSlide) % totalSlide;
//     slides[slideindex].style.display = 'block';
// }
// // Initialize carousel
// slides.forEach(slide => slide.style.display = 'none');
// slides[slideindex].style.display = 'block';

// // Button Event Listeners
// const prevBtn =
// document.getElementById('prevBtn');
// const nextBtn =
// document.getElementById('nextBtn');

// prevBtn.addEventListener('click', showPrevSlide);
// nextBtn.addEventListener('click', showNextSlide);
// ----------------------dc-------------------------------->
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function changeSlide() {
  // Hide the current slide
  slides[currentIndex].classList.remove('fade');
  
  // Move to the next slide
  currentIndex = (currentIndex + 1) % totalSlides;
  
  // Show the new slide
  slides[currentIndex].classList.add('fade');
}

// Start autoplay
setInterval(changeSlide, 3000); // Change every 3 seconds

// Initial setup to show the first slide
slides[currentIndex].classList.add('fade');