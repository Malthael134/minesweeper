let board = [];
let rows = 9;
let columns = 9;

let minesCount = 5;
let minesLocation = []; // "2-2", "3-4", "2-1"

let tilesClicked = 0;
let flagEnabled = false;
let gameOver = false;

window.onload = () => {
    startGame();
    setMines();
}

function setMines() {
    minesLocation.push("2-2")
    minesLocation.push("2-3")
    minesLocation.push("5-6")
    minesLocation.push("3-4")
    minesLocation.push("1-1")
}

function startGame() {
    document.getElementById('mines-count').innerText = minesCount;
    generateBoard();
}

function generateBoard() {
    for (let r = 0; r < rows; ++r) {
        let row = [];
        for (let c = 0; c < columns; ++c) {
            let tile = generateTile(r.toString(), c.toString());
            document
                .getElementById('board')
                .appendChild(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.table(board);
}

function generateTile(row, column) {
    // <div id="0-0"></div>
    let tile = document.createElement('div');
    tile.id = `${row}-${column}`;
    tile.className = 'unselectable';
    tile.addEventListener('click', clickTile);
    return tile;
}

function clickTile() {
    let tile = this;

    if (gameOver) return;

    if (flagEnabled) {
        flagTile(tile.id);
        return;
    }

    if (minesLocation.includes(tile.id)) {
        revealMines();
        // alert('Game Over');
        gameOver = true;
    }

    let coords = tile.id.split('-');

    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    checkMine(r, c);
}

function revealMines() {
    for (let i = 0; i < minesLocation.length; ++i) {
        let bombTile = document.getElementById(minesLocation[i]);
        bombTile.innerText = "💣";
        bombTile.classList.add('bomb');
        
    }
    console.log("Revealed Mines");
}

function flagTile(tileId) {
    let tile = document.getElementById(tileId);
    if (tile.innerText == "") {
        tile.innerText = "🚩";
    }
    else if (tile.innerText == "🚩") {
        tile.innerText = "";
    }
}


function toggleFlagMode() {

    let flagButton = document.getElementById('flag-button');

    if (!flagButton.classList.contains('active')) {
        flagButton.classList.add('active');
    } else {
        flagButton.classList.remove('active');
    }

    switch (flagEnabled) {
        case true:
            flagEnabled = false;
            break;
        case false:
            flagEnabled = true;
            break;
 
        default:
            break;
    }
}

function checkMine(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return;
    }

    let minesFound = 0;

    

}
