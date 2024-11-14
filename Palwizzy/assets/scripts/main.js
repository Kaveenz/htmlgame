const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gameData;

// Load game data from JSON
function loadGameData() {
    fetch("data/map.json")
        .then(response => response.json())
        .then(data => {
            gameData = data;
            startGame();
        })
        .catch(error => console.error("Error loading game data:", error));
}

// Start the game
function startGame() {
    // Add event listeners for arrow keys
    document.addEventListener("keydown", handleKeyDown);

    // Draw initial state
    drawState(gameData.start_state);
}

// Handle arrow key events
function handleKeyDown(event) {
    switch (event.key) {
        case "ArrowUp":
            // Handle up arrow key
            break;
        case "ArrowDown":
            // Handle down arrow key
            break;
        case "ArrowLeft":
            // Handle left arrow key
            break;
        case "ArrowRight":
            // Handle right arrow key
            break;
    }
}

// Draw current state on canvas
function drawState(state) {
    const backgroundImage = new Image();
    backgroundImage.src = gameData.states[state].background_image;

    backgroundImage.onload = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };
}

// Load game data when the page loads
window.onload = loadGameData;