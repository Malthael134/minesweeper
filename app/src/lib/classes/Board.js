
/**
 * Board size on easy difficulty
 * @type {number}
 */
const SIZE_EASY = 9;

/**
 * Board size on normal difficulty
 * @type {number}
 */
const SIZE_NORMAL = 15;

/**
 * Board size on hard difficulty
 * @type {number}
 */
const SIZE_HARD = 21;


/**
 * Minesweeper Board object class with entire game data/state.
 * @class
 */
export default class Board {

    /**
     * Board constructor
     * @constructor
     */
    constructor() {

        /**
         * Weather the game is over.
         * @property
         * @type {boolean}
         */
        this.gameOver = false;

        /**
         * @property
         * @type {("easy" | "normal" | "hard")}
         */
        this.difficulty = "easy";

        /**
         * @property
         * @type {number}
         */
        this.boardSize = SIZE_EASY;

    };

    /**
     * Restarts/Starts the game with current settings
     * @returns {void}
     */
    StartGame() {
        this.gameOver = false;
        this.GenerateMines()
    }

    /**
     * @method
     * @returns {void}
     */
    GenerateMines() {

    }

};