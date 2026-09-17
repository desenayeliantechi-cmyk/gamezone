```javascript
// ========================================
// 🎮 GAMEZONE - SCRIPT PRINCIPAL
// ========================================


// ========================================
// 🔍 BUSCADOR
// ========================================

const buscador = document.getElementById("buscador");
const juegos = document.querySelectorAll(".game-card");

if (buscador) {

    buscador.addEventListener("input", function () {

        const texto = buscador.value
            .toLowerCase()
            .trim();

        juegos.forEach(function (juego) {

            const titulo = juego.querySelector("h3");
            const categoria = juego.querySelector("span");

            const nombre = titulo
                ? titulo.textContent.toLowerCase()
                : "";

            const tipo = categoria
                ? categoria.textContent.toLowerCase()
                : "";

            if (
                nombre.includes(texto) ||
                tipo.includes(texto)
            ) {

                juego.style.display = "grid";

            } else {

                juego.style.display = "none";

            }

        });

    });

}


// ========================================
// 🎯 FILTROS
// ========================================

const filtros = document.querySelectorAll(".filter");

filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function () {

        // Quitar active de todos
        filtros.forEach(function (boton) {

            boton.classList.remove("active");

        });

        // Activar botón seleccionado
        filtro.classList.add("active");


        // Obtener categoría
        const categoria = (
            filtro.dataset.filter || ""
        )
        .toLowerCase()
        .trim();


        // Revisar cada juego
        juegos.forEach(function (juego) {

            const categorias = (
                juego.dataset.category || ""
            )
            .toLowerCase()
            .trim();


            const textoTarjeta = juego.textContent
                .toLowerCase();


            let mostrar = false;


            // 🎮 TODOS
            if (categoria === "todos") {

                mostrar = true;

            }


            // 🔫 SHOOTER
            else if (categoria === "shooter") {

                mostrar =
                    categorias.includes("shooter") ||
                    categoria
```
