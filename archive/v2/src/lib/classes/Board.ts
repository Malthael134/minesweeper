import {
    Tile,
    Coord
} from "$lib/classes"

interface IBoard {
    Start(): void;
    SetSize(size: number): void;
    SetMineCount(amount: number): void;
    tiles: Tile[][];
    size: number;
    mineCount: number;
}

export default class Board implements IBoard {
    tiles: Tile[][];
    size: number;
    mineCount: number;
    private mineCoords: Coord[] = [];
    constructor(size: number, mineCount: number) {
        this.size = size;
        this.tiles = [];
        this.mineCount = mineCount;
        this.Start()
    }

    public SetMineCount(mineCount: number): void {
        this.mineCount = mineCount;
        this.Start();
    }

    public SetSize(size: number): void {
        this.size = size;
        this.Start();
    }

    public Start(): void {
        this.mineCoords = [];
        this.tiles = [];
        this.generateMines();
        this.generateTiles();
    }

    private generateMines(): void {
        this.mineCoords = [];
        let minesLeft = this.mineCount;

        while (minesLeft > 0) {
            let coord = new Coord(Math.floor(Math.random() * this.size), Math.floor(Math.random() * this.size));
            let alreadyMine = false;
            for (let i = 0; i < this.mineCoords.length; ++i) {
                if (this.mineCoords[i].row === coord.row && this.mineCoords[i].column === coord.column) {
                    alreadyMine = true;
                }
            }
            if (alreadyMine) break;
            this.mineCoords.push(coord);
            --minesLeft;
        }
    }

    private generateTiles(): void {
        this.tiles = [];

        for (let r = 0; r < this.size; ++r) {

            let row: Tile[] = [];

            for (let c = 0; c < this.size; ++c) {
                let coord = new Coord(r, c);

                let tile = new Tile(coord, this.mineCoords);
                row.push(tile);
            }

            this.tiles.push(row);
        }
    }
}