/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function randRange(a, b) {
    return a + (b - a) * Math.random()
} 

/**
 * 
 * @param {number} x
 * @param {number} a 
 */
function mod(x, a) {
    return x - Math.floor(x / a) * a
}

/**
 * 
 * @param {number} x 
 * @param {number} a 
 * @param {number} b 
 */
function clamp(x, a, b) {
    return Math.min(Math.max(x, a), b)
}