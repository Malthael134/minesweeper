
interface ICoord {
    row: number;
    column: number;
}

export default class Coord implements ICoord {
    row: number;
    column: number;
    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }
}