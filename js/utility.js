/**
 * Generatore di Numeri Casuali
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}