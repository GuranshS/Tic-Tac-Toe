const cells = document.querySelectorAll('.cell');

// Create Gameboard object
const Gameboard = {
    board: [], 
};

// Add event listener to each cell
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Get the clicked cell
        const clickedCell = cell;
        console.log(clickedCell);
        // Do something with the clicked cell
    });
});

