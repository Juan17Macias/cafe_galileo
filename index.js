//SCRIPT PARA MENU MOBIL

// Selecciona el botón y el menú
const button = document.querySelector("#menu-button");
const menu = document.querySelector(".menu-mobile");

// Crea una variable para llevar un registro del estado del menú
let menuOpen = false;

// Añade un evento de clic al botón
button.addEventListener("click", () => {
  // Si el menú está abierto, oculta el menú y cambia la variable a false
  if (menuOpen) {
    menu.style.display = "none";
    menuOpen = false;
  } else {
    // Si el menú está cerrado, muestra el menú y cambia la variable a true
    menu.style.display = "block";
    menuOpen = true;
  }
});

//SCRIPT PARA EL SILDER DE IMAGENES

// Obtiene los elementos del DOM necesarios
const sliderImages = document.querySelector(".slider-images");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Define la imagen actualmente visible
let currentImageIndex = 0;

// Define la duración del intervalo en milisegundos
const intervalDuration = 4000;

// Muestra la imagen siguiente
function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= sliderImages.children.length) {
    currentImageIndex = 0;
  }
  showCurrentImage();
}

// Muestra la imagen anterior
function showPrevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = sliderImages.children.length - 1;
  }
  showCurrentImage();
}

// Muestra la imagen actual
function showCurrentImage() {
  // Oculta todas las imágenes
  for (let i = 0; i < sliderImages.children.length; i++) {
    sliderImages.children[i].style.display = "none";
  }
  // Muestra solo la imagen actual
  sliderImages.children[currentImageIndex].style.display = "block";
}

// Inicia el intervalo para mostrar las imágenes de forma automática
const intervalId = setInterval(showNextImage, intervalDuration);

// Muestra la imagen siguiente al hacer clic en el botón "next"
nextButton.addEventListener("click", function () {
  showNextImage();
  // Reinicia el intervalo para que empiece a contar desde el inicio
  clearInterval(intervalId);
  intervalId = setInterval(showNextImage, intervalDuration);
});

// Muestra la imagen anterior al hacer clic en el botón "prev"
prevButton.addEventListener("click", function () {
  showPrevImage();
  // Reinicia el intervalo para que empiece a contar desde el inicio
  clearInterval(intervalId);
  intervalId = setInterval(showNextImage, intervalDuration);
});

// Codigo para modificar  la imagen, peso y precio  dependiendo del tipo de producto

function updateProduct(buttonId, imageId, imageSrc, tablaId, weightText) {
  document.getElementById(buttonId).addEventListener("click", function () {
    document.getElementById(imageId).src = imageSrc;
    document.getElementById(tablaId).textContent = weightText;
  });
}
// tradicional
updateProduct(
  "tradicional1",
  "image1",
  "./icons/img/productos/tradicional/f1.jfif",
  "tradicional_peso",
  " $ 10.000"
);
updateProduct(
  "tradicional2",
  "image1",
  "./icons/img/productos/tradicional/f2.jfif",
  "tradicional_peso",
  " $ 15.000"
);
updateProduct(
  "tradicional3",
  "image1",
  "./icons/img/productos/tradicional/f3.jfif",
  "tradicional_peso",
  " $ 30.000"
);
// honey
updateProduct(
  "honey1",
  "image2",
  "./icons/img/productos/honey/h1.jfif",
  "honey_peso",
  " $ 10.000"
);
updateProduct(
  "honey2",
  "image2",
  "./icons/img/productos/honey/h2.jfif",
  "honey_peso",
  " $ 15.000"
);
updateProduct(
  "honey3",
  "image2",
  "./icons/img/productos/honey/h3.png",
  "honey_peso",
  " $ 30.000"
);
// lavados
updateProduct(
  "lavados1",
  "image3",
  "./icons/img/productos/lavados/f1.jfif",
  "lavados_peso",
  " $ 10.000"
);
updateProduct(
  "lavados2",
  "image3",
  "./icons/img/productos/lavados/f2.jfif",
  "lavados_peso",
  " $ 15.000"
);
updateProduct(
  "lavados3",
  "image3",
  "./icons/img/productos/lavados/f3.jfif",
  "lavados_peso",
  " $ 30.000"
);
// anaerobicos
updateProduct(
  "anaerobicos1",
  "image4",
  "./icons/img/productos/anaerobicos/f1.jpg",
  "anaerobicos_peso",
  " $ 10.000"
);
updateProduct(
  "anaerobicos2",
  "image4",
  "./icons/img/productos/anaerobicos/f2.jfif",
  "anaerobicos_peso",
  " $ 15.000"
);
updateProduct(
  "anaerobicos3",
  "image4",
  "./icons/img/productos/anaerobicos/f3.jfif",
  "anaerobicos_peso",
  " $ 30.000"
);
// geisha
updateProduct(
  "geisha1",
  "image5",
  "./icons/img/productos/geisha/f1.jfif",
  "geisha_peso",
  " $ 10.000"
);
updateProduct(
  "geisha2",
  "image5",
  "./icons/img/productos/geisha/f2.jfif",
  "geisha_peso",
  " $ 15.000"
);
updateProduct(
  "geisha3",
  "image5",
  "./icons/img/productos/geisha/f3.jfif",
  "geisha_peso",
  " $ 30.000"
);
// bourbon
updateProduct(
  "bourbon1",
  "image6",
  "./icons/img/productos/bourbon/f1.jfif",
  "bourbon_peso",
  " $ 10.000"
);
updateProduct(
  "bourbon2",
  "image6",
  "./icons/img/productos/bourbon/f2.jfif",
  "bourbon_peso",
  " $ 15.000"
);
updateProduct(
  "bourbon3",
  "image6",
  "./icons/img/productos/bourbon/f3.jfif",
  "bourbon_peso",
  " $ 30.000"
);
// especial1
updateProduct(
  "especial1",
  "image7",
  "./icons/img/productos/especial1/f1.jfif",
  "especial1_peso",
  " $ 10.000"
);
updateProduct(
  "especial2",
  "image7",
  "./icons/img/productos/especial1/f2.jfif",
  "especial1_peso",
  " $ 15.000"
);
updateProduct(
  "especial3",
  "image7",
  "./icons/img/productos/especial1/f8.jpg",
  "especial1_peso",
  " $ 30.000"
);
// especial 2
updateProduct(
  "especial-1",
  "image8",
  "./icons/img/productos/especial2/f1.jpg",
  "especial2_peso",
  " $ 10.000"
);
updateProduct(
  "especial-2",
  "image8",
  "./icons/img/productos/especial2/f2.jfif",
  "especial2_peso",
  " $ 15.000"
);
updateProduct(
  "especial-3",
  "image8",
  "./icons/img/productos/especial2/f3.jfif",
  "especial2_peso",
  " $ 30.000"
);

// Codigo para abrir y cerrar el pop- up

const manejarModal = (numModal) => {
  const abrirPopUp = document.querySelector(`.abrir-pop-up${numModal}`);
  const cerrarPopUp = document.querySelector(`.cerrar-pop-up${numModal}`);
  const modal = document.querySelector(`.modal${numModal}`);

  // Agregar evento click al botón para abrir el modal
  abrirPopUp.addEventListener("click", () => modal.showModal());

  // Agregar evento click al botón para cerrar el modal
  cerrarPopUp.addEventListener("click", () => modal.close());
};

// Llamar la función para manejar cada modal
manejarModal(1);
manejarModal(2);
manejarModal(3);
manejarModal(4);
manejarModal(5);
manejarModal(6);
manejarModal(7);
manejarModal(8);

// Agregar evento click a las imágenes para abrir los modales
const imgs = document.querySelectorAll(".abrir-modal");
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    const numModal = img.getAttribute("data-modal");
    const modal = document.querySelector(`.modal${numModal}`);
    modal.showModal();
  });
});

//  CODIGO PARA ENVIAR SOLICITUD DE PRODUCTO
/* document.querySelectorAll(".pedido-w").forEach(function (elem) {
  elem.addEventListener("click", function () {
    var url = this.getAttribute("data-url");
    window.open(url, "_blank");
  });
}); */

document.querySelectorAll('.pedido-w').forEach(function(elem) {
  elem.addEventListener('click', function() {
    var variety = document.getElementById('variedad').innerHTML;
    var price = document.getElementById('tradicional_peso').innerHTML;
    var message = "Hola, quiero realizar un pedido de Café Variedad: " + variety + " Precio: " + price;
    var url = this.getAttribute('data-url')  + message;
        window.open(url, '_blank');
  });
});