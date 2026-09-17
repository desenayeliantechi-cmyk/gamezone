// ========================================
// GAMEZONE - BUSCADOR Y FILTROS
// ========================================

const buscador = document.getElementById("buscador");
const filtros = document.querySelectorAll(".filter");
const juegos = document.querySelectorAll(".game-card");

// ========================================
// FILTRAR JUEGOS
// ========================================

function filtrarJuegos() {

    const texto = buscador.value.toLowerCase().trim();

    filtros.forEach(boton => {

        const categoriaSeleccionada =
            boton.classList.contains("active")
                ? boton.dataset.filter.toLowerCase()
                : null;

        if (!categoriaSeleccionada) return;

        juegos.forEach(juego => {

            // Nombre del juego
            const nombre =
                juego.querySelector("h3")?.textContent.toLowerCase() || "";

            // Todo el texto de la tarjeta
            const contenido =
                juego.textContent.toLowerCase();

            // Categorías del juego
            const categorias =
                juego.dataset.category?.toLowerCase().split(" ") || [];

            // ========================================
            // BUSCADOR
            // ========================================

            const coincideBusqueda =
                nombre.includes(texto) ||
                contenido.includes(texto);

            // ========================================
            // CATEGORÍA
            // ========================================

            const coincideCategoria =
                categoriaSeleccionada === "todos" ||
                categorias.includes(categoriaSeleccionada);

            // ========================================
            // MOSTRAR / OCULTAR
            // ========================================

            if (coincideBusqueda && coincideCategoria) {
                juego.style.display = "";
            } else {
                juego.style.display = "none";
            }

        });

    });

}

// ========================================
// BUSCADOR
// ========================================

buscador.addEventListener("input", filtrarJuegos);


// ========================================
// BOTONES DE FILTRO
// ========================================

filtros.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitar active de todos
        filtros.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activar el seleccionado
        boton.classList.add("active");

        // Aplicar filtro
        filtrarJuegos();

    });

});


// ========================================
// FILTRO INICIAL
// ========================================

filtrarJuegos();
