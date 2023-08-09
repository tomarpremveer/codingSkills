var count = 0;
var currentPlayer = 'X';
window.addEventListener('load', addListeners);
function addListeners() {
    var rowElements = document.querySelectorAll(".row");
    rowElements.forEach(row => {
        row.addEventListener("click", (event) => {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
            const { row } = event.currentTarget.dataset;
            count += 1;
            console.log(`row ${row} and count is ${count}`)
        });
    })
    
}

function checkForWin(rol, col) {
    let hasWon = false;
    if (row == 1) {
        for (let j = 0; j <= 2; j++){

        }
    }
}
