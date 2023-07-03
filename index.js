// Lógica do carrossel
var currentImage = 0;
var images = document.getElementsByClassName('carrossel-image');
var captions = document.getElementsByClassName('carrossel-caption')[0];
var navigationButtons = document.getElementsByClassName('carrossel-navigation')[0];

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
  // Esconde todas as imagens
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  
  // Mostra a imagem atual
  images[n].classList.add('active');
  currentImage = n;
  
  // Atualiza os botões de navegação
  updateNavigationButtons();
  
  // Atualiza o texto da legenda
  var captionText = images[n].querySelector('.carrossel-caption').textContent;
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

// Cria os botões de navegação
createNavigationButtons();

// Exibe a primeira imagem
showImage(currentImage);

// Reprodução automática
setInterval(function() {
  nextImage();
}, 10000);
