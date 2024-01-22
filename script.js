

const gameboard = (() => {
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""];
    let currentPlayer = 'X';

    const updateBoard = (cell) => {
        const cellIndex = cell.dataset.cell;
        if (board[cellIndex] === "") {
            board[cellIndex] = currentPlayer;
            //Switch Players
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        } else {
            console.log("This cell has already been filled.");
        }
    };

        // Function to reset the board
        const resetBoard = () => {
            gameboard.board.fill("")
            gameboard.currentPlayer = 'X';
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.textContent = "";
            });
        };

    const checkWinner = () => {

        // Check for horizontal wins
        for (let i = 0; i < 3; i++) {
            if (board[i] !== "" && board[i] === board[i + 1] && board[i] === board[i + 2]) {
                return board[i]; 
            }
        }

        // Check for vertical wins
        for (let i = 0; i < 3; i++) {
            if (board[i] !== "" && board[i] === board[i + 3] && board[i] === board[i + 6]) {
                return board[i]; 
            }
        }

        // Check for diagonal wins
        if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
            return board[0]; 
        }
        if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
            return board[2]; 
        }

        return null; // Return null if no winner
    };


    return Object.freeze({
        board,
        updateBoard,
        checkWinner,
        resetBoard
    });
})();

const gameFlow = (() => {
    // Define the cells variable
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.querySelector('#reset-button');
    
    let gameActive = true;

    // Function to stop the game and display result
    const endGame = (result) => {
        console.log(result);
        // Add any additional logic or UI updates you may need
        gameActive = false; // Set gameActive to false to prevent further clicks
    };


    resetButton.addEventListener('click', () => {
        gameboard.resetBoard();
        gameActive = true;
        console.log("Board has been reset.");
    });
    // Add event listener to each cell
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!gameActive) {
                console.log("Game has ended. Click the reset button to play again.");
                return;
            }

            // Get the clicked cell
            const clickedCell = cell;
            console.log(clickedCell);

            // Update the board
            gameboard.updateBoard(clickedCell);
            clickedCell.textContent = gameboard.board[clickedCell.dataset.cell]; // Display the current player's symbol in the clicked cell
            console.log(gameboard.board);

            // Check if a player has won
            const winner = gameboard.checkWinner();
            if (winner) {
                endGame(`Player ${winner} has won!`);
            } else if (gameboard.board.every(cell => cell !== "")) {
                endGame("It's a tie!");
            }
        });
    });
})();

    

