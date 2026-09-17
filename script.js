const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const gameCards = document.querySelectorAll(".game-card");

let currentFilter = "all";

function filterGames() {
    const searchText = searchInput.value.toLowerCase().trim();

    gameCards.forEach(card => {
        const gameName = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const gameText = card.textContent.toLowerCase();
        const category = card.dataset.category?.toLowerCase() || "";

        const matchesSearch =
            gameName.includes(searchText) ||
            gameText.includes(searchText);

        const matchesCategory =
            currentFilter === "all" ||
            category === currentFilter;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterGames);

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter.toLowerCase();

        filterGames();
    });
});

filterGames();
