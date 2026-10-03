
// 1. Keep track of the current player (starts with X)
var currentPlayer = "X";
let gameOver = false;

// 2. Sealect all the table cells (td elements)
const cells = document.querySelectorAll("td");

// 3. Loop through each cell and listen for a click
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (gameOver) {
            return;
        }
              
    // ...rest of your existing code below
        // Only allow a click if the cell is completely empty
        if (cell.textContent === "") {

            // Place the current player's mark (X or O) in the cell
            cell.textContent = currentPlayer;

            // Switch players: if it was X, make it O. Otherwise, make it X.
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

            victory()
        }
    });
});

//did i wom method:
let combos = [
    //aperntlly start by 0, combos[0]
    ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], //rows 
    ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], //varticals
    ["1", "5", "9"], ["3", "5", "7"] //diagnoals
]

function wins(A, B, C) { //check for the shape
    var markA = document.getElementById(A).innerHTML
    var markB = document.getElementById(B).innerHTML
    var markC = document.getElementById(C).innerHTML

    if (markA == markB && markB == markC && markA != "") { //check that they ar not empty
        return markA
    }
    else {
        return null
    }
}

function victory() {
    for (let combo of combos) { // loop over the real list "combos", call each item "combo"
        var result = wins(combo[0], combo[1], combo[2]); // call the check function "wins" on that combo
        if (result != null) {
            gameOver = true;   
            return console.log(result + " wins!")
        }
    }
}