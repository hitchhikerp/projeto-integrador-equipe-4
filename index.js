var currentImage = 0;
var images = document.getElementsByClassName('carousel-image');
var captions = document.getElementsByClassName('carousel-caption')[0];
var navigationButtons = document.getElementsByClassName('carousel-navigation')[0];

function createNavigationButtons() {
  for (var i = 0; i < images.length; i++) {
    var button = document.createElement('button');
    button.setAttribute('onclick', 'showImage(' + i + ')');
    navigationButtons.appendChild(button);
  }
}

function updateNavigationButtons() {
  var buttons = navigationButtons.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  buttons[currentImage].classList.add('active');
}

function showImage(n) {

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  images[n].classList.add('active');
  currentImage = n;

  updateNavigationButtons();
  
  var captionText = images[n].querySelector('.carousel-caption').textContent;
  captions.textContent = captionText;
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

createNavigationButtons();

showImage(currentImage);

setInterval(function() {
  nextImage();
}, 3000);
