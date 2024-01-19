const cells = document.querySelectorAll('.cell');
// Add event listener to each cell
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Get the clicked cell
        const clickedCell = cell;
        console.log(clickedCell);
        // Do something with the clicked cell
    });
});


const gameboard = (() => {
    let board = [_,_,_,
                 _,_,_,
                 _,_,_];

    // Other functions and properties of the gameboard object can be added here

    
    return {
        board
    };
})();

