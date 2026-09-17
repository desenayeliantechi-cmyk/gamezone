// ========================================
// 🎮 GAMEZONE - SCRIPT PRINCIPAL
// ========================================


// ========================================
// 📌 ELEMENTOS DEL HTML
// ========================================

const buscador = document.getElementById("buscador");
const juegos = document.querySelectorAll(".game-card");
const filtros = document.querySelectorAll(".filter");


// ========================================
// 🔎 BUSCADOR
// ========================================

if (buscador) {

    buscador.addEventListener("input", function () {

        const texto = buscador.value.toLowerCase().trim();

        // Cuando se escribe en el buscador,
        // quitamos el estado activo de los filtros
        filtros.forEach(function (boton) {
            boton.classList.remove("active");
        });

        juegos.forEach(function (juego) {

            const nombre = juego
                .querySelector(".game-info h3");

            const categoria = juego
                .getAttribute("data-category") || "";

            const nombreTexto = nombre
                ? nombre.textContent.toLowerCase()
                : "";

            const categoriaTexto = categoria.toLowerCase();

            if (
                nombreTexto.includes(texto) ||
                categoriaTexto.includes(texto)
            ) {

                juego.style.setProperty(
                    "display",
                    "grid",
                    "important"
                );

            } else {

                juego.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            }

        });

    });

}


// ========================================
// 🎯 FILTROS DE CATEGORÍAS
// ========================================

filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function (evento) {

        evento.preventDefault();

        // Quitar "active" de todos
        filtros.forEach(function (boton) {
            boton.classList.remove("active");
        });

        // Activar el botón seleccionado
        filtro.classList.add("active");

        // Limpiar buscador
        if (buscador) {
            buscador.value = "";
        }

        // Obtener categoría
        const categoria = (
            filtro.getAttribute("data-filter") || ""
        ).toLowerCase().trim();


        // Revisar cada juego
        juegos.forEach(function (juego) {

            const categorias = (
                juego.getAttribute("data-category") || ""
            ).toLowerCase().trim();

            let mostrar = false;


            // TODOS
            if (categoria === "todos") {

                mostrar = true;

            }


            // SHOOTER
            else if (categoria === "shooter") {

                mostrar = categorias.includes("shooter");

            }


            // BATTLE ROYALE
            else if (categoria === "battle") {

                mostrar = categorias.includes("battle");

            }


            // SANDBOX
            else if (categoria === "sandbox") {

                mostrar = categorias.includes("sandbox");

            }


            // MOBA
            else if (categoria === "moba") {

                mostrar = categorias.includes("moba");

            }


            // CARRERAS
            else if (categoria === "carreras") {

                mostrar = categorias.includes("carreras");

            }


            // TERROR
            else if (categoria === "terror") {

                mostrar = categorias.includes("terror");

            }


            // AVENTURA
            else if (categoria === "aventura") {

                mostrar = categorias.includes("aventura");

            }


            // RPG
            else if (categoria === "rpg") {

                mostrar = categorias.includes("rpg");

            }


            // MOSTRAR / OCULTAR
            if (mostrar) {

                juego.style.setProperty(
                    "display",
                    "grid",
                    "important"
                );

            } else {

                juego.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            }

        });

    });

});


// ========================================
// 🎮 INFORMACIÓN DE LOS JUEGOS
// ========================================

const datosJuegos = {

    "Roblox": {
        categoria: "Sandbox",
        rating: "4.8",
        year: "2006",
        developer: "Roblox Corporation",
        platforms: "PC, Android, iOS, Xbox",
        description: "Plataforma de juegos donde puedes jugar miles de experiencias creadas por otros usuarios.",
        graphics: 70,
        gameplay: 90,
        fun: 95,
        multiplayer: 100
    },

    "Minecraft": {
        categoria: "Sandbox",
        rating: "4.9",
        year: "2011",
        developer: "Mojang Studios",
        platforms: "PC, PlayStation, Xbox, Switch, Mobile",
        description: "Un enorme mundo de bloques donde puedes construir, explorar, sobrevivir y crear prácticamente cualquier cosa.",
        graphics: 80,
        gameplay: 98,
        fun: 99,
        multiplayer: 100
    },

    "Fortnite": {
        categoria: "Battle Royale",
        rating: "4.7",
        year: "2017",
        developer: "Epic Games",
        platforms: "PC, PlayStation, Xbox, Switch, Mobile",
        description: "Battle royale con construcción, armas, eventos y una gran cantidad de contenido.",
        graphics: 90,
        gameplay: 96,
        fun: 97,
        multiplayer: 100
    },

    "League of Legends": {
        categoria: "MOBA",
        rating: "4.8",
        year: "2009",
        developer: "Riot Games",
        platforms: "PC",
        description: "MOBA competitivo donde dos equipos se enfrentan utilizando diferentes campeones.",
        graphics: 85,
        gameplay: 98,
        fun: 94,
        multiplayer: 100
    },

    "Free Fire": {
        categoria: "Battle Royale",
        rating: "4.6",
        year: "2017",
        developer: "Garena",
        platforms: "Android, iOS",
        description: "Battle royale rápido diseñado para partidas cortas y dispositivos móviles.",
        graphics: 75,
        gameplay: 92,
        fun: 94,
        multiplayer: 100
    },

    "PUBG Mobile": {
        categoria: "Battle Royale",
        rating: "4.7",
        year: "2018",
        developer: "PUBG Corporation",
        platforms: "Android, iOS",
        description: "Battle royale donde debes sobrevivir contra otros jugadores hasta ser el último en pie.",
        graphics: 88,
        gameplay: 95,
        fun: 94,
        multiplayer: 100
    },

    "Candy Crush Saga": {
        categoria: "Casual",
        rating: "4.5",
        year: "2012",
        developer: "King",
        platforms: "Android, iOS, PC",
        description: "Popular juego de rompecabezas basado en combinar caramelos.",
        graphics: 70,
        gameplay: 85,
        fun: 90,
        multiplayer: 60
    },

    "Counter-Strike 2": {
        categoria: "Shooter",
        rating: "4.8",
        year: "2023",
        developer: "Valve",
        platforms: "PC",
        description: "Shooter competitivo basado en estrategia, precisión y trabajo en equipo.",
        graphics: 90,
        gameplay: 98,
        fun: 95,
        multiplayer: 100
    },

    "Valorant": {
        categoria: "Shooter",
        rating: "4.7",
        year: "2020",
        developer: "Riot Games",
        platforms: "PC",
        description: "Shooter táctico competitivo que combina disparos con habilidades especiales.",
        graphics: 85,
        gameplay: 97,
        fun: 95,
        multiplayer: 100
    },

    "GTA V": {
        categoria: "Acción",
        rating: "4.9",
        year: "2013",
        developer: "Rockstar Games",
        platforms: "PC, PlayStation, Xbox",
        description: "Mundo abierto lleno de vehículos, misiones, personajes y actividades.",
        graphics: 95,
        gameplay: 98,
        fun: 99,
        multiplayer: 100
    },

    "Spider-Man": {
        categoria: "Aventura",
        rating: "4.8",
        year: "2018",
        developer: "Insomniac Games",
        platforms: "PC, PlayStation",
        description: "Juego de acción y aventura protagonizado por Spider-Man.",
        graphics: 98,
        gameplay: 96,
        fun: 97,
        multiplayer: 0
    },

    "Resident Evil 4": {
        categoria: "Terror",
        rating: "4.9",
        year: "2023",
        developer: "Capcom",
        platforms: "PC, PlayStation, Xbox",
        description: "Survival horror con acción, exploración y una historia intensa.",
        graphics: 98,
        gameplay: 97,
        fun: 96,
        multiplayer: 0
    },

    "Need for Speed Most Wanted": {
        categoria: "Carreras",
        rating: "4.8",
        year: "2005",
        developer: "EA",
        platforms: "PC, PlayStation, Xbox",
        description: "Juego clásico de carreras callejeras con persecuciones policiales.",
        graphics: 82,
        gameplay: 94,
        fun: 98,
        multiplayer: 85
    },

    "Forza Horizon 5": {
        categoria: "Carreras",
        rating: "4.8",
        year: "2021",
        developer: "Playground Games",
        platforms: "PC, Xbox",
        description: "Juego de carreras de mundo abierto ambientado en México.",
        graphics: 100,
        gameplay: 96,
        fun: 98,
        multiplayer: 95
    },

    "God of War": {
        categoria: "Aventura",
        rating: "4.9",
        year: "2018",
        developer: "Santa Monica Studio",
        platforms: "PC, PlayStation",
        description: "Aventura épica protagonizada por Kratos y su hijo Atreus.",
        graphics: 99,
        gameplay: 98,
        fun: 98,
        multiplayer: 0
    },

    "Red Dead Redemption 2": {
        categoria: "Aventura",
        rating: "4.9",
        year: "2018",
        developer: "Rockstar Games",
        platforms: "PC, PlayStation, Xbox",
        description: "Una enorme aventura de mundo abierto ambientada en el Viejo Oeste.",
        graphics: 100,
        gameplay: 99,
        fun: 99,
        multiplayer: 90
    },

    "Call of Duty Warzone": {
        categoria: "Shooter",
        rating: "4.6",
        year: "2020",
        developer: "Activision",
        platforms: "PC, PlayStation, Xbox",
        description: "Battle royale y shooter competitivo de la franquicia Call of Duty.",
        graphics: 96,
        gameplay: 97,
        fun: 95,
        multiplayer: 100
    },

    "Terraria": {
        categoria: "Sandbox",
        rating: "4.9",
        year: "2011",
        developer: "Re-Logic",
        platforms: "PC, PlayStation, Xbox, Switch, Mobile",
        description: "Aventura 2D con exploración, construcción, combate y supervivencia.",
        graphics: 75,
        gameplay: 98,
        fun: 99,
        multiplayer: 95
    },

    "Elden Ring": {
        categoria: "RPG",
        rating: "4.9",
        year: "2022",
        developer: "FromSoftware",
        platforms: "PC, PlayStation, Xbox",
        description: "RPG de mundo abierto con exploración, combates difíciles y una enorme cantidad de contenido.",
        graphics: 98,
        gameplay: 99,
        fun: 97,
        multiplayer: 90
    },

    "The Last of Us": {
        categoria: "Terror / Aventura",
        rating: "4.9",
        year: "2013",
        developer: "Naughty Dog",
        platforms: "PC, PlayStation",
        description: "Aventura de supervivencia con una historia centrada en Joel y Ellie.",
        graphics: 98,
        gameplay: 97,
        fun: 97,
        multiplayer: 0
    }

};


// ========================================
// 🪟 MODAL DE JUEGOS
// ========================================

const modal = document.getElementById("game-modal");
const closeModal = document.getElementById("close-modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalRating = document.getElementById("modal-rating");
const modalYear = document.getElementById("modal-year");
const modalDeveloper = document.getElementById("modal-developer");
const modalPlatforms = document.getElementById("modal-platforms");
const modalDescription = document.getElementById("modal-description");


// ========================================
// 📊 BARRAS DE ESTADÍSTICAS
// ========================================

const graphicsBar = document.getElementById("graphics-bar");
const gameplayBar = document.getElementById("gameplay-bar");
const funBar = document.getElementById("fun-bar");
const multiplayerBar = document.getElementById("multiplayer-bar");

const graphicsNumber = document.getElementById("graphics-number");
const gameplayNumber = document.getElementById("gameplay-number");
const funNumber = document.getElementById("fun-number");
const multiplayerNumber = document.getElementById("multiplayer-number");


// ========================================
// 🎮 ABRIR INFORMACIÓN DEL JUEGO
// ========================================

const botonesJuego = document.querySelectorAll(".game-button");

botonesJuego.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const tarjeta = boton.closest(".game-card");

        if (!tarjeta) {
            return;
        }

        const titulo = tarjeta
            .querySelector(".game-info h3");

        if (!titulo) {
            return;
        }

        const nombreJuego = titulo.textContent.trim();

        const datos = datosJuegos[nombreJuego];

        if (!datos) {
            console.log(
                "No hay información para:",
                nombreJuego
            );

            return;
        }


        // Imagen
        const imagen = tarjeta.querySelector("img");

        if (imagen && modalImage) {
            modalImage.src = imagen.src;
            modalImage.alt = nombreJuego;
        }


        // Información
        if (modalTitle) {
            modalTitle.textContent = nombreJuego;
        }

        if (modalCategory) {
            modalCategory.textContent = datos.categoria;
        }

        if (modalRating) {
            modalRating.textContent = datos.rating;
        }

        if (modalYear) {
            modalYear.textContent = datos.year;
        }

        if (modalDeveloper) {
            modalDeveloper.textContent = datos.developer;
        }

        if (modalPlatforms) {
            modalPlatforms.textContent = datos.platforms;
        }

        if (modalDescription) {
            modalDescription.textContent = datos.description;
        }


        // Estadísticas
        if (graphicsBar) {
            graphicsBar.style.width =
                datos.graphics + "%";
        }

        if (gameplayBar) {
            gameplayBar.style.width =
                datos.gameplay + "%";
        }

        if (funBar) {
            funBar.style.width =
                datos.fun + "%";
        }

        if (multiplayerBar) {
            multiplayerBar.style.width =
                datos.multiplayer + "%";
        }


        // Números
        if (graphicsNumber) {
            graphicsNumber.textContent =
                datos.graphics + "/100";
        }

        if (gameplayNumber) {
            gameplayNumber.textContent =
                datos.gameplay + "/100";
        }

        if (funNumber) {
            funNumber.textContent =
                datos.fun + "/100";
        }

        if (multiplayerNumber) {
            multiplayerNumber.textContent =
                datos.multiplayer + "/100";
        }


        // Mostrar modal
        if (modal) {
            modal.classList.add("active");
        }

    });

});


// ========================================
// ❌ CERRAR MODAL
// ========================================

if (closeModal) {

    closeModal.addEventListener("click", function () {

        if (modal) {
            modal.classList.remove("active");
        }

    });

}


// Cerrar haciendo clic fuera
if (modal) {

    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {
            modal.classList.remove("active");
        }

    });

}


// Cerrar con ESC
document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        if (modal) {
            modal.classList.remove("active");
        }

    }

});


// ========================================
// ❤️ FAVORITOS
// ========================================

const favoritos = document.querySelectorAll(".favorite");

favoritos.forEach(function (boton) {

    boton.addEventListener("click", function (evento) {

        evento.preventDefault();
        evento.stopPropagation();

        boton.classList.toggle("active");

    });

});


// ========================================
// 📱 MENÚ MÓVIL
// ========================================

const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// ========================================
// 📱 CERRAR MENÚ AL ELEGIR UNA OPCIÓN
// ========================================

if (navLinks) {

    const enlaces = navLinks.querySelectorAll("a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


// ========================================
// ✅ COMPROBACIÓN
// ========================================

console.log("GAMEZONE cargado correctamente.");
console.log("Filtros encontrados:", filtros.length);
console.log("Juegos encontrados:", juegos.length);
