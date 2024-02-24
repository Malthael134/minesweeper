import { Coord } from "$lib/classes";

interface ITile {
    coord: Coord;
    mine: boolean;
}

export default class Tile implements ITile {
    coord: Coord;
    mine: boolean;
    constructor(coord: Coord, mineCoords: Coord[]) {

        this.coord = coord;

        // Mark as mine if mine coords contain tile coord
        let isMine = false;
        for (let i = 0; i < mineCoords.length; ++i) {
            if (this.coord.row === mineCoords[i].row && this.coord.column === mineCoords[i].column) {
                isMine = true;
            }
        }
        this.mine = isMine;
    }
}

