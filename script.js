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

        const texto = buscador.value.toLowerCase().trim();

        juegos.forEach(function (juego) {

            const titulo = juego.querySelector("h3");
            const categoria = juego.querySelector(".game-info span");

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
                juego.style.display = "";
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

        // Activar el botón seleccionado
        filtro.classList.add("active");

        // Limpiar buscador
        if (buscador) {
            buscador.value = "";
        }

        // Obtener categoría
        const categoria = (
            filtro.dataset.filter || ""
        ).toLowerCase().trim();


        // Revisar todos los juegos
        juegos.forEach(function (juego) {

            const categorias = (
                juego.dataset.category || ""
            ).toLowerCase().trim();

            let mostrar = false;


            // 🎮 TODOS
            if (categoria === "todos") {
                mostrar = true;
            }


            // 🔫 SHOOTER
            else if (categoria === "shooter") {

                mostrar =
                    categorias.includes("shooter");
            }


            // 🔥 BATTLE ROYALE
            else if (categoria === "battle") {

                mostrar =
                    categorias.includes("battle");
            }


            // ⛏️ SANDBOX
            else if (categoria === "sandbox") {

                mostrar =
                    categorias.includes("sandbox");
            }


            // ⚔️ MOBA
            else if (categoria === "moba") {

                mostrar =
                    categorias.includes("moba");
            }


            // 🏎️ CARRERAS
            else if (categoria === "carreras") {

                mostrar =
                    categorias.includes("carreras");
            }


            // 🧟 TERROR
            else if (categoria === "terror") {

                mostrar =
                    categorias.includes("terror");
            }


            // 🗺️ AVENTURA
            else if (categoria === "aventura") {

                mostrar =
                    categorias.includes("aventura");
            }


            // ⚔️ RPG
            else if (categoria === "rpg") {

                mostrar =
                    categorias.includes("rpg");
            }


            // Mostrar u ocultar
            if (mostrar) {
                juego.style.display = "";
            } else {
                juego.style.display = "none";
            }

        });

    });

});


// ========================================
// 🎮 MODAL DE JUEGOS
// ========================================

const botones = document.querySelectorAll(".game-button");

const modal = document.getElementById("game-modal");
const cerrarModal = document.getElementById("close-modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");

const modalRating = document.getElementById("modal-rating");
const modalYear = document.getElementById("modal-year");
const modalDeveloper = document.getElementById("modal-developer");
const modalPlatforms = document.getElementById("modal-platforms");

const modalDescription = document.getElementById("modal-description");


// ========================================
// 📊 DATOS DE LOS JUEGOS
// ========================================

const datosJuegos = {

    roblox: {
        rating: "8.5/10",
        year: "2006",
        developer: "Roblox Corporation",
        platforms: "PC, Xbox, PlayStation, Móvil",
        description: "Una plataforma donde puedes jugar y crear millones de experiencias.",
        graphics: 75,
        gameplay: 90,
        fun: 95,
        multiplayer: 100
    },

    minecraft: {
        rating: "9.5/10",
        year: "2011",
        developer: "Mojang Studios",
        platforms: "PC, Xbox, PlayStation, Switch, Móvil",
        description: "Explora, construye y sobrevive en mundos llenos de posibilidades.",
        graphics: 80,
        gameplay: 95,
        fun: 98,
        multiplayer: 95
    },

    fortnite: {
        rating: "9/10",
        year: "2017",
        developer: "Epic Games",
        platforms: "PC, PlayStation, Xbox, Switch, Móvil",
        description: "Combates multijugador, construcción y diferentes modos de juego.",
        graphics: 90,
        gameplay: 95,
        fun: 95,
        multiplayer: 100
    },

    league: {
        rating: "9/10",
        year: "2009",
        developer: "Riot Games",
        platforms: "PC",
        description: "Batallas estratégicas por equipos con diferentes campeones.",
        graphics: 85,
        gameplay: 98,
        fun: 90,
        multiplayer: 100
    },

    freefire: {
        rating: "8.5/10",
        year: "2017",
        developer: "Garena",
        platforms: "Android, iOS",
        description: "Partidas rápidas donde tendrás que luchar para sobrevivir.",
        graphics: 80,
        gameplay: 90,
        fun: 92,
        multiplayer: 98
    },

    pubg: {
        rating: "9/10",
        year: "2018",
        developer: "PUBG Studios",
        platforms: "PC, Xbox, PlayStation, Móvil",
        description: "Enfréntate a otros jugadores y conviértete en el último superviviente.",
        graphics: 90,
        gameplay: 95,
        fun: 92,
        multiplayer: 100
    },

    candycrush: {
        rating: "8/10",
        year: "2012",
        developer: "King",
        platforms: "PC, Android, iOS",
        description: "Combina caramelos y supera cientos de niveles.",
        graphics: 75,
        gameplay: 85,
        fun: 90,
        multiplayer: 60
    },

    cs2: {
        rating: "9/10",
        year: "2023",
        developer: "Valve",
        platforms: "PC",
        description: "Shooter competitivo basado en estrategia, precisión y trabajo en equipo.",
        graphics: 90,
        gameplay: 98,
        fun: 92,
        multiplayer: 100
    },

    valorant: {
        rating: "9/10",
        year: "2020",
        developer: "Riot Games",
        platforms: "PC",
        description: "Shooter competitivo con agentes que tienen habilidades especiales.",
        graphics: 85,
        gameplay: 98,
        fun: 94,
        multiplayer: 100
    },

    gta5: {
        rating: "9.5/10",
        year: "2013",
        developer: "Rockstar Games",
        platforms: "PC, PlayStation, Xbox",
        description: "Explora Los Santos, completa misiones y juega GTA Online.",
        graphics: 95,
        gameplay: 98,
        fun: 100,
        multiplayer: 100
    },

    spiderman: {
        rating: "9/10",
        year: "2018",
        developer: "Insomniac Games",
        platforms: "PC, PlayStation",
        description: "Explora Nueva York mientras juegas como Spider-Man.",
        graphics: 98,
        gameplay: 95,
        fun: 95,
        multiplayer: 0
    },

    resident4: {
        rating: "9.5/10",
        year: "2023",
        developer: "Capcom",
        platforms: "PC, PlayStation, Xbox",
        description: "Sobrevive a una peligrosa aventura llena de enemigos y misterios.",
        graphics: 98,
        gameplay: 98,
        fun: 95,
        multiplayer: 0
    },

    nfs: {
        rating: "8.5/10",
        year: "2005",
        developer: "EA Black Box",
        platforms: "PC, PlayStation, Xbox",
        description: "Carreras callejeras, coches rápidos y persecuciones policiales.",
        graphics: 85,
        gameplay: 92,
        fun: 95,
        multiplayer: 85
    },

    forza5: {
        rating: "9.5/10",
        year: "2021",
        developer: "Playground Games",
        platforms: "PC, Xbox",
        description: "Conduce cientos de coches por un enorme mundo abierto.",
        graphics: 100,
        gameplay: 95,
        fun: 96,
        multiplayer: 95
    },

    godofwar: {
        rating: "9.5/10",
        year: "2018",
        developer: "Santa Monica Studio",
        platforms: "PC, PlayStation",
        description: "Acompaña a Kratos y Atreus en una aventura llena de acción.",
        graphics: 98,
        gameplay: 98,
        fun: 97,
        multiplayer: 0
    },

    rdr2: {
        rating: "10/10",
        year: "2018",
        developer: "Rockstar Games",
        platforms: "PC, PlayStation, Xbox",
        description: "Vive una gran aventura en el lejano oeste.",
        graphics: 100,
        gameplay: 98,
        fun: 98,
        multiplayer: 90
    },

    warzone: {
        rating: "8.5/10",
        year: "2020",
        developer: "Infinity Ward / Raven Software",
        platforms: "PC, PlayStation, Xbox",
        description: "Combate por sobrevivir en intensas partidas multijugador.",
        graphics: 95,
        gameplay: 96,
        fun: 94,
        multiplayer: 100
    },

    terraria: {
        rating: "9/10",
        year: "2011",
        developer: "Re-Logic",
        platforms: "PC, Consolas, Móvil",
        description: "Explora, construye y lucha en un mundo lleno de posibilidades.",
        graphics: 75,
        gameplay: 98,
        fun: 98,
        multiplayer: 95
    },

    eldenring: {
        rating: "10/10",
        year: "2022",
        developer: "FromSoftware",
        platforms: "PC, PlayStation, Xbox",
        description: "Explora un enorme mundo lleno de enemigos, secretos y desafíos.",
        graphics: 98,
        gameplay: 100,
        fun: 96,
        multiplayer: 90
    },

    thelastofus: {
        rating: "9.5/10",
        year: "2022",
        developer: "Naughty Dog",
        platforms: "PC, PlayStation",
        description: "Una historia de supervivencia en un mundo devastado.",
        graphics: 100,
        gameplay: 98,
        fun: 96,
        multiplayer: 0
    }

};


// ========================================
// 🪟 ABRIR MODAL
// ========================================

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const juegoId = boton.dataset.game;
        const juego = datosJuegos[juegoId];

        const tarjeta = boton.closest(".game-card");

        if (!juego || !tarjeta || !modal) {
            return;
        }

        const imagen = tarjeta.querySelector("img");
        const titulo = tarjeta.querySelector("h3");
        const categoria = tarjeta.querySelector(".game-info span");

        if (modalImage && imagen) {
            modalImage.src = imagen.src;
            modalImage.alt = imagen.alt;
        }

        if (modalTitle && titulo) {
            modalTitle.textContent = titulo.textContent;
        }

        if (modalCategory && categoria) {
            modalCategory.textContent = categoria.textContent;
        }

        if (modalRating) {
            modalRating.textContent = juego.rating;
        }

        if (modalYear) {
            modalYear.textContent = juego.year;
        }

        if (modalDeveloper) {
            modalDeveloper.textContent = juego.developer;
        }

        if (modalPlatforms) {
            modalPlatforms.textContent = juego.platforms;
        }

        if (modalDescription) {
            modalDescription.textContent = juego.description;
        }


        // Estadísticas
        const graphicsBar = document.getElementById("graphics-bar");
        const gameplayBar = document.getElementById("gameplay-bar");
        const funBar = document.getElementById("fun-bar");
        const multiplayerBar = document.getElementById("multiplayer-bar");

        const graphicsNumber = document.getElementById("graphics-number");
        const gameplayNumber = document.getElementById("gameplay-number");
        const funNumber = document.getElementById("fun-number");
        const multiplayerNumber = document.getElementById("multiplayer-number");


        if (graphicsBar) {
            graphicsBar.style.width = juego.graphics + "%";
        }

        if (gameplayBar) {
            gameplayBar.style.width = juego.gameplay + "%";
        }

        if (funBar) {
            funBar.style.width = juego.fun + "%";
        }

        if (multiplayerBar) {
            multiplayerBar.style.width = juego.multiplayer + "%";
        }


        if (graphicsNumber) {
            graphicsNumber.textContent = juego.graphics + "%";
        }

        if (gameplayNumber) {
            gameplayNumber.textContent = juego.gameplay + "%";
        }

        if (funNumber) {
            funNumber.textContent = juego.fun + "%";
        }

        if (multiplayerNumber) {
            multiplayerNumber.textContent = juego.multiplayer + "%";
        }


        // Mostrar modal
        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// ========================================
// ❌ CERRAR MODAL
// ========================================

if (cerrarModal) {

    cerrarModal.addEventListener("click", function () {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    });

}


// Cerrar haciendo clic fuera del modal

if (modal) {

    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


// Cerrar con ESC

document.addEventListener("keydown", function (evento) {

    if (
        evento.key === "Escape" &&
        modal &&
        modal.classList.contains("active")
    ) {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ========================================
// ❤️ FAVORITOS
// ========================================

const favoritos = document.querySelectorAll(".favorite");

favoritos.forEach(function (boton) {

    boton.addEventListener("click", function () {

        boton.classList.toggle("liked");

        if (boton.classList.contains("liked")) {

            boton.textContent = "♥";

        } else {

            boton.textContent = "♡";

        }

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


// Cerrar menú al tocar un enlace

const enlaces = document.querySelectorAll(".nav-links a");

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ========================================
// 🎮 FIN DEL SCRIPT
// ========================================
