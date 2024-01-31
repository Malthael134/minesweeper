let board = [];
let rows = 9;
let columns = 9;

let minesCount = 5;
let minesLocation = []; // "2-2", "3-4", "2-1"

let tilesClicked = 0;
let flagEnabled = false;
let gameOver = false;

function startGame() {
    document.getElementById('board').innerHTML = '';
    document.getElementById('mines-count').innerText = minesCount;
    board = [];
    minesLocation = [];
    tilesClicked = 0;
    gameOver = false;
    generateBoard();
    setMines();
}

function setMines() {
    let minesPlaced = 0;
    while (minesPlaced < minesCount) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = `${r.toString()}-${c.toString()}`;

        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            ++minesPlaced;
        }
    }
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
    if (gameOver || this.classList.contains('tile-clicked')) {
        console.log('Game is over');
        return;
    }

    let tile = this;

    if (gameOver) return;

    if (flagEnabled) {
        flagTile(tile.id);
        return;
    }

    if (minesLocation.includes(tile.id)) {
        gameOver = true;
        revealMines();
        return;
        // alert('Game Over');
    }

    let coords = tile.id.split('-');

    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    checkMine(r, c);
}

function revealMines() {
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < columns; ++c) {
            let tile = board[r][c];
            if (minesLocation.includes(tile.id)) {
                tile.innerText = "💣";
                tile.classList.add('bomb');
            }
        }
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
    // Out of bounds
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return;
    }
    if (board[r][c].classList.contains('tile-clicked')) {
        return;
    }

    board[r][c].classList.add('tile-clicked');
    ++tilesClicked;

    let minesFound = 0;

    // top 3
    minesFound += checkTile(r-1, c-1);
    minesFound += checkTile(r-1, c);
    minesFound += checkTile(r-1, c+1);

    // left and right
    minesFound += checkTile(r, c-1);
    minesFound += checkTile(r, c+1);

    // bottom 3
    minesFound += checkTile(r+1, c-1);
    minesFound += checkTile(r+1, c);
    minesFound += checkTile(r+1, c+1);
    
    if (minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add(`x${minesFound.toString()}`);
    } else {
        // top 3
        checkMine(r-1, c-1);
        checkMine(r-1, c);
        checkMine(r-1, c+1);

        // left and right
        checkMine(r, c-1);
        checkMine(r, c+1);

        // bottom 3
        checkMine(r+1, c-1);
        checkMine(r+1, c);
        checkMine(r+1, c+1);
            
    }

    if (tilesClicked == rows * columns - minesCount) {
        document.getElementById('mines-count').innerText = 'Cleared!';
        gameOver = true;
        revealMines();
    }
}

function checkTile(r, c) {
    // Out of bounds
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return 0;
    }
    if (minesLocation.includes(`${r.toString()}-${c.toString()}`)) {
        return 1;
    }
    return 0;
}