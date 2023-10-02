// Lógica do carrossel
let currentImage = 0;
const images = document.querySelectorAll('.carrossel-image');
const captions = document.querySelector('.carrossel-caption');
const navigationButtons = document.querySelector('.carrossel-navigation');

function createNavigationButtons() {
  for (let i = 0; i < images.length; i++) {
    const button = document.createElement('button');
    button.addEventListener('click', () => showImage(i));
    navigationButtons.appendChild(button);
  }
}

function updateNavigationButtons() {
  const buttons = navigationButtons.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  buttons[currentImage].classList.add('active');
}

function showImage(n) {
  if (n < 0 || n >= images.length) {
    return; // Verifica se o índice está dentro dos limites
  }

  // Esconde todas as imagens
  images.forEach(image => image.classList.remove('active'));

  // Mostra a imagem atual
  images[n].classList.add('active');
  currentImage = n;

  // Atualiza os botões de navegação
  updateNavigationButtons();

  // Atualiza o texto da legenda
  const captionText = images[n].querySelector('.carrossel-caption').innerHTML;
  captions.innerHTML = captionText;
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
setInterval(nextImage, 5000);
