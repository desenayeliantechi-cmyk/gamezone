```javascript
const buscador =
document.getElementById("buscador");

const juegos =
document.querySelectorAll(".game-card");

// ========================================
// 🔍 BUSCADOR
// ========================================

buscador.addEventListener(
    "input",
    function () {

        const texto =
            buscador.value
            .toLowerCase()
            .trim();

        juegos.forEach(function (juego) {

            const nombre =
                juego.querySelector("h3")
                .textContent
                .toLowerCase();

            const categoria =
                juego.querySelector("span")
                .textContent
                .toLowerCase();

            if (
                nombre.includes(texto) ||
                categoria.includes(texto)
            ) {
                juego.style.display = "grid";
            } else {
                juego.style.display = "none";
            }
        });
    }
);

// ========================================
// 🎯 FILTROS
// ========================================

const filtros =
document.querySelectorAll(".filter");

filtros.forEach(function (filtro) {

    filtro.addEventListener(
        "click",
        function () {

            filtros.forEach(function (boton) {
                boton.classList.remove("active");
            });

            filtro.classList.add("active");

            const categoria =
                (filtro.dataset.filter || "")
                .toLowerCase()
                .trim();

            juegos.forEach(function (juego) {

                const categorias =
                    (juego.dataset.category || "")
                    .toLowerCase()
                    .trim();

                const textoTarjeta =
                    juego.textContent
                    .toLowerCase();

                let mostrar = false;

                if (categoria === "todos") {
                    mostrar = true;
                }
                else if (categoria === "shooter") {
                    mostrar =
                        categorias.includes("shooter") ||
                        categorias.includes("fps") ||
                        textoTarjeta.includes("shooter") ||
                        textoTarjeta.includes("fps");
                }
                else if (categoria === "battle") {
                    mostrar =
                        categorias.includes("battle") ||
                        categorias.includes("battle royale") ||
                        textoTarjeta.includes("battle royale");
                }
                else if (categoria === "sandbox") {
                    mostrar =
                        categorias.includes("sandbox") ||
                        textoTarjeta.includes("sandbox");
                }
                else if (categoria === "moba") {
                    mostrar =
                        categorias.includes("moba") ||
                        textoTarjeta.includes("moba");
                }
                else if (categoria === "carreras") {
                    mostrar =
                        categorias.includes("carreras") ||
                        categorias.includes("carrera") ||
                        textoTarjeta.includes("carreras");
                }
                else if (categoria === "terror") {
                    mostrar =
                        categorias.includes("terror") ||
                        textoTarjeta.includes("terror");
                }
                else if (categoria === "aventura") {
                    mostrar =
                        categorias.includes("aventura") ||
                        textoTarjeta.includes("aventura");
                }
                else if (categoria === "rpg") {
                    mostrar =
                        categorias.includes("rpg") ||
                        textoTarjeta.includes("rpg");
                }

                if (mostrar) {
                    juego.style.display = "grid";
                } else {
                    juego.style.display = "none";
                }
            });

            buscador.value = "";

            // 📍 Bajar automáticamente hasta los juegos
            const juegosSection =
                document.querySelector(".games");

            if (juegosSection) {
                juegosSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    );
});

// ========================================
// 🎮 DATOS DE LOS JUEGOS
// ========================================

const datosJuegos = {
    roblox: {
        categoria: "🎮 Plataforma / Sandbox",
        rating: "8.5 / 10",
        year: "2006",
        developer: "Roblox Corporation",
        platforms: "PC • Xbox • PlayStation • Móvil",
        graphics: 75,
        gameplay: 92,
        fun: 95,
        multiplayer: 98,
        description: "Roblox es una plataforma de experiencias creada por usuarios. Permite jugar, explorar y crear diferentes mundos y juegos."
    },

    minecraft: {
        categoria: "⛏️ Sandbox / Supervivencia",
        rating: "9.5 / 10",
        year: "2011",
        developer: "Mojang Studios",
        platforms: "PC • Xbox • PlayStation • Switch • Móvil",
        graphics: 85,
        gameplay: 98,
        fun: 98,
        multiplayer: 95,
        description: "Minecraft es un juego de construcción y supervivencia donde puedes explorar mundos generados, conseguir recursos y construir prácticamente cualquier cosa."
    },

    fortnite: {
        categoria: "🔫 Battle Royale / Shooter",
        rating: "9.0 / 10",
        year: "2017",
        developer: "Epic Games",
        platforms: "PC • PlayStation • Xbox • Switch • Móvil",
        graphics: 90,
        gameplay: 95,
        fun: 96,
        multiplayer: 98,
        description: "Fortnite combina combates, construcción y diferentes experiencias multijugador. Su universo incluye varios modos de juego."
    },

    league: {
        categoria: "⚔️ MOBA",
        rating: "9.0 / 10",
        year: "2009",
        developer: "Riot Games",
        platforms: "PC",
        graphics: 82,
        gameplay: 98,
        fun: 90,
        multiplayer: 99,
        description: "League of Legends es un MOBA competitivo donde dos equipos se enfrentan utilizando campeones con diferentes habilidades."
    },

    freefire: {
        categoria: "🔥 Battle Royale",
        rating: "8.5 / 10",
        year: "2017",
        developer: "Garena",
        platforms: "Android • iOS",
        graphics: 75,
        gameplay: 88,
        fun: 92,
        multiplayer: 97,
        description: "Free Fire es un Battle Royale enfocado en partidas rápidas. Los jugadores deben conseguir recursos y enfrentarse hasta que quede un superviviente."
    },

    pubg: {
        categoria: "🔫 Battle Royale",
        rating: "8.8 / 10",
        year: "2018",
        developer: "KRAFTON",
        platforms: "Android • iOS",
        graphics: 88,
        gameplay: 92,
        fun: 91,
        multiplayer: 97,
        description: "PUBG Mobile lleva la experiencia Battle Royale a dispositivos móviles, con partidas donde los jugadores luchan por sobrevivir."
    },

    candycrush: {
        categoria: "🍬 Puzzle / Casual",
        rating: "8.0 / 10",
        year: "2012",
        developer: "King",
        platforms: "Android • iOS • PC",
        graphics: 78,
        gameplay: 90,
        fun: 88,
        multiplayer: 55,
        description: "Candy Crush Saga es un juego de puzzles basado en combinar caramelos y completar diferentes niveles."
    },

    cs2: {
        categoria: "🎯 FPS / Táctico",
        rating: "9.0 / 10",
        year: "2023",
        developer: "Valve",
        platforms: "PC",
        graphics: 88,
        gameplay: 98,
        fun: 94,
        multiplayer: 99,
        description: "Counter-Strike 2 es un shooter táctico competitivo donde dos equipos se enfrentan utilizando estrategia, precisión y trabajo en equipo."
    },

    valorant: {
        categoria: "🎯 FPS / Táctico",
        rating: "9.0 / 10",
        year: "2020",
        developer: "Riot Games",
        platforms: "PC",
        graphics: 82,
        gameplay: 97,
        fun: 94,
        multiplayer: 99,
        description: "VALORANT combina disparos tácticos con agentes que poseen habilidades especiales. Los equipos compiten en rondas de ataque y defensa."
    },

    gta5: {
        categoria: "🚗 Mundo abierto / Acción",
        rating: "9.5 / 10",
        year: "2013",
        developer: "Rockstar Games",
        platforms: "PC • PlayStation • Xbox",
        graphics: 93,
        gameplay: 95,
        fun: 97,
        multiplayer: 96,
        description: "Grand Theft Auto V presenta un enorme mundo abierto donde puedes explorar Los Santos, completar misiones y disfrutar de diferentes actividades."
    },

    spiderman: {
        categoria: "🕷️ Acción / Aventura",
        rating: "9.0 / 10",
        year: "2018",
        developer: "Insomniac Games",
        platforms: "PC • PlayStation",
        graphics: 94,
        gameplay: 94,
        fun: 96,
        multiplayer: 0,
        description: "Marvel's Spider-Man permite recorrer Nueva York como Spider-Man, combatir enemigos y disfrutar de una aventura basada en el famoso superhéroe."
    },

    resident4: {
        categoria: "🧟 Terror / Acción",
        rating: "9.0 / 10",
        year: "2023",
        developer: "Capcom",
        platforms: "PC • PlayStation • Xbox",
        graphics: 94,
        gameplay: 95,
        fun: 94,
        multiplayer: 0,
        description: "Resident Evil 4 es una aventura de acción y terror donde Leon Kennedy debe enfrentarse a peligrosos enemigos y descubrir los secretos de una misteriosa región."
    },

    nfs: {
        categoria: "🚗 Carreras",
        rating: "9.0 / 10",
        year: "2005",
        developer: "EA Black Box",
        platforms: "PC • PlayStation • Xbox",
        graphics: 82,
        gameplay: 94,
        fun: 96,
        multiplayer: 85,
        description: "Need for Speed Most Wanted combina carreras callejeras, coches modificados y persecuciones policiales en una experiencia clásica de conducción."
    },

    forza5: {
        categoria: "🏎️ Carreras",
        rating: "9.0 / 10",
        year: "2021",
        developer: "Playground Games",
        platforms: "PC • Xbox",
        graphics: 98,
        gameplay: 94,
        fun: 95,
        multiplayer: 94,
        description: "Forza Horizon 5 ofrece carreras de mundo abierto, numerosos vehículos y diferentes actividades de conducción en un enorme escenario inspirado en México."
    },

    godofwar: {
        categoria: "⚔️ Acción / Aventura",
        rating: "9.5 / 10",
        year: "2018",
        developer: "Santa Monica Studio",
        platforms: "PC • PlayStation",
        graphics: 96,
        gameplay: 96,
        fun: 96,
        multiplayer: 0,
        description: "God of War sigue el viaje de Kratos y su hijo Atreus mientras atraviesan los mundos de la mitología nórdica."
    },

    rdr2: {
        categoria: "🤠 Acción / Aventura",
        rating: "9.8 / 10",
        year: "2018",
        developer: "Rockstar Games",
        platforms: "PC • PlayStation • Xbox",
        graphics: 98,
        gameplay: 97,
        fun: 96,
        multiplayer: 85,
        description: "Red Dead Redemption 2 cuenta la historia de Arthur Morgan y la banda de Van der Linde en un enorme mundo abierto ambientado en el Viejo Oeste."
    },

    warzone: {
        categoria: "🔫 Shooter / Battle Royale",
        rating: "8.7 / 10",
        year: "2020",
        developer: "Activision",
        platforms: "PC • PlayStation • Xbox",
        graphics: 90,
        gameplay: 94,
        fun: 92,
        multiplayer: 98,
        description: "Call of Duty: Warzone es una experiencia de combate multijugador que combina acción rápida y diferentes modos de juego."
    },

    terraria: {
        categoria: "🧱 Aventura / Sandbox",
        rating: "9.0 / 10",
        year: "2011",
        developer: "Re-Logic",
        platforms: "PC • PlayStation • Xbox • Switch • Móvil",
        graphics: 70,
        gameplay: 95,
        fun: 96,
        multiplayer: 94,
        description: "Terraria combina exploración, construcción, supervivencia y combate en un mundo abierto en dos dimensiones."
    },

    eldenring: {
        categoria: "⚔️ RPG / Acción",
        rating: "9.5 / 10",
        year: "2022",
        developer: "FromSoftware",
        platforms: "PC • PlayStation • Xbox",
        graphics: 94,
        gameplay: 98,
        fun: 94,
        multiplayer: 85,
        description: "Elden Ring es un RPG de acción de mundo abierto donde los jugadores exploran las Tierras Intermedias y enfrentan numerosos desafíos."
    },

    thelastofus: {
        categoria: "🧟 Acción / Aventura",
        rating: "9.5 / 10",
        year: "2013",
        developer: "Naughty Dog",
        platforms: "PlayStation • PC",
        graphics: 94,
        gameplay: 95,
        fun: 94,
        multiplayer: 0,
        description: "The Last of Us presenta una historia de supervivencia en un mundo devastado, siguiendo el viaje de Joel y Ellie."
    }
};

// ========================================
// 🎮 MODAL
// ========================================

const botones =
document.querySelectorAll(".game-button");

const modal =
document.getElementById("game-modal");

const cerrarModal =
document.getElementById("close-modal");

const modalImage =
document.getElementById("modal-image");

const modalTitle =
document.getElementById("modal-title");

const modalCategory =
document.getElementById("modal-category");

const modalRating =
document.getElementById("modal-rating");

const modalYear =
document.getElementById("modal-year");

const modalDeveloper =
document.getElementById("modal-developer");

const modalPlatforms =
document.getElementById("modal-platforms");

const modalDescription =
document.getElementById("modal-description");

// ========================================
// 📊 BARRAS
// ========================================

const graphicsBar =
document.getElementById("graphics-bar");

const gameplayBar =
document.getElementById("gameplay-bar");

const funBar =
document.getElementById("fun-bar");

const multiplayerBar =
document.getElementById("multiplayer-bar");

// ========================================
// 🔢 NÚMEROS
// ========================================

const graphicsNumber =
document.getElementById("graphics-number");

const gameplayNumber =
document.getElementById("gameplay-number");

const funNumber =
document.getElementById("fun-number");

const multiplayerNumber =
document.getElementById("multiplayer-number");

// ========================================
// 🚀 ABRIR INFORMACIÓN
// ========================================

botones.forEach(function (boton) {

    boton.addEventListener(
        "click",
        function () {

            const tarjeta =
                boton.closest(".game-card");

            const game =
                boton.dataset.game;

            const datos =
                datosJuegos[game];

            if (!datos || !tarjeta) {
                return;
            }

            const imagen =
                tarjeta.querySelector("img");

            const titulo =
                tarjeta.querySelector("h3");

            if (!imagen || !titulo) {
                return;
            }

            modalImage.src =
                imagen.src;

            modalImage.alt =
                titulo.textContent;

            modalTitle.textContent =
                titulo.textContent;

            modalCategory.textContent =
                datos.categoria;

            modalRating.textContent =
                datos.rating;

            modalYear.textContent =
                datos.year;

            modalDeveloper.textContent =
                datos.developer;

            modalPlatforms.textContent =
                datos.platforms;

            modalDescription.textContent =
                datos.description;

            graphicsBar.style.width = "0%";
            gameplayBar.style.width = "0%";
            funBar.style.width = "0%";
            multiplayerBar.style.width = "0%";

            graphicsNumber.textContent = "0%";
            gameplayNumber.textContent = "0%";
            funNumber.textContent = "0%";
            multiplayerNumber.textContent = "0%";

            modal.classList.add("active");

            document.body.style.overflow =
                "hidden";

            setTimeout(function () {

                graphicsBar.style.width =
                    datos.graphics + "%";

                gameplayBar.style.width =
                    datos.gameplay + "%";

                funBar.style.width =
                    datos.fun + "%";

                multiplayerBar.style.width =
                    datos.multiplayer + "%";

                graphicsNumber.textContent =
                    datos.graphics + "%";

                gameplayNumber.textContent =
                    datos.gameplay + "%";

                funNumber.textContent =
                    datos.fun + "%";

                multiplayerNumber.textContent =
                    datos.multiplayer + "%";

            }, 200);
        }
    );
});

// ========================================
// ❌ CERRAR MODAL
// ========================================

cerrarModal.addEventListener(
    "click",
    cerrarVentana
);

function cerrarVentana() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "auto";
}

// ========================================
// 🖱️ CLICK FUERA
// ========================================

modal.addEventListener(
    "click",
    function (evento) {

        if (evento.target === modal) {
            cerrarVentana();
        }

    }
);

// ========================================
// ⌨️ ESC
// ========================================

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {
            cerrarVentana();
        }

    }
);

// ========================================
// ❤️ FAVORITOS
// ========================================

const favoritos =
document.querySelectorAll(".favorite");

favoritos.forEach(function (boton) {

    boton.addEventListener(
        "click",
        function () {

            boton.classList.toggle("liked");

            if (
                boton.classList.contains("liked")
            ) {
                boton.textContent = "♥";
            } else {
                boton.textContent = "♡";
            }
        }
    );
});

// ========================================
// 📱 MENÚ MÓVIL
// ========================================

const menuButton =
document.getElementById("menu-button");

const navLinks =
document.querySelector(".nav-links");

menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");

    }
);

// ========================================
// 🔗 CERRAR MENÚ
// ========================================

const enlaces =
document.querySelectorAll(".nav-links a");

enlaces.forEach(function (enlace) {

    enlace.addEventListener(
        "click",
        function () {

            navLinks.classList.remove("active");

        }
    );
});
```

**Ahora solo reemplaza todo el contenido de tu `script.js` por este código y haz `Commit changes → Commit directly to main`.** 🚀

Después prueba **Shooter**: debería filtrar los juegos **y desplazarte automáticamente hasta donde están las tarjetas**.
