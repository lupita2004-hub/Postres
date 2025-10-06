// ------------------------------
// FILTROS
// ------------------------------
const buttons = document.querySelectorAll('.filtros button');
const items = document.querySelectorAll('.galeria article');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ------------------------------
// BUSCADOR
// ------------------------------
document.getElementById('buscador').addEventListener('keyup', function() {
  const value = this.value.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(value) ? 'block' : 'none';
  });
});

// ------------------------------
// MODAL (VENTANA DE INFORMACIÓN)
// ------------------------------
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-desc");
const cerrarBtn = document.querySelector(".cerrar");

// Ejemplo de descripciones para cada dulce
const descripciones = {
  "Caramelos de sabores": "Caramelos artesanales con sabores frutales intensos.",
  "Chocolate Artesanal": "Chocolate hecho a mano con cacao 70% de calidad.",
  "Paletas de Dulce": "Paletas de caramelo de varios sabores divertidos.",
  "Malvaviscos suaves": "Malvaviscos esponjosos cubiertos con azúcar glas.",
  "Gomitas de colores": "Gomitas frutales de sabores surtidos.",
  "Alfajores dulces": "Alfajores rellenos de dulce de leche y bañados en chocolate.",
  "Macarons": "Dulces franceses de almendra con relleno cremoso.",
  "Cake Pops": "Pastelitos en palito cubiertos de chocolate y chispas.",
  "Mazapán": "Tradicional dulce de cacahuate mexicano."
};

// Activar modal al hacer clic en un dulce
document.querySelectorAll(".dulce").forEach(dulce => {
  dulce.addEventListener("click", () => {
    const img = dulce.querySelector("img").src;
    const titulo = dulce.querySelector("p").textContent;

    modalImg.src = img;
    modalTitulo.textContent = titulo;
    modalDesc.textContent = descripciones[titulo] || "Un dulce delicioso que endulzará tu día.";

    modal.style.display = "flex";
  });
});

// Cerrar modal
cerrarBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; }
