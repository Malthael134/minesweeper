
/**
 * @class
 */
export class Tile {
    /** 
     * @constructor
     * @param {string} prop_id
     * @param {number} prop_row
     * @param {number} prop_column
     * @param {string} prop_text
     */
    constructor(prop_id, prop_row, prop_column, prop_text) {
        
        /** @member {string} */
        this.id = prop_id;

        /** @member {number} */
        this.row = prop_row;

        /** @member {number} */
        this.column = prop_column;

        /** @member {string} */
        this.text = prop_text || "";

        /** @member {string} */
        this.class = 'tile';

        /** @member {number} */
        this.adjacent = 0;

        /** @member {boolean} */
        this.clicked = false;

        /** @member {boolean} */
        this.flagged = false;

    }
}
