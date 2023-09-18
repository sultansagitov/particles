class Color {
    /**
     * 
     * @param {number} r 
     * @param {number} g 
     * @param {number} b 
     * @param {number} a 
     */
    constructor(r, g, b, a = 1) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    static getRandom() {
        return new Color(Math.random(), Math.random(), Math.random())
    }

    /**
     * 
     * @param {number} r 
     * @param {number} g 
     * @param {number} b 
     * @param {number} a 
     */
    static from256(r, g, b, a) {
        return new Color(r / 255, g / 255, b / 255, a / 255)
    }

    /**
     * 
     * @param {Color} a 
     * @param {Color} b 
     * @param {number} x 
     */
    static mix(a, b, x) {
        return a.mul(1 - x).add(b.mul(x))
    }

    intense() {
        let max = Math.max(this.r, this.g, this.b)
        return new Color(this.r / max, this.g / max, this.b / max)
    }

    /**
     * 
     * @param {Color | number} c 
     */
    mul(c) {
        return new Color(
            this.r * (c.r ? c.r : c),
            this.g * (c.g ? c.g : c),
            this.b * (c.b ? c.b : c),
            this.a * (c.a ? c.a : c),
        )
    }

    /**
     * 
     * @param {Color | number} c 
     */
    add(c) {
        return new Color(
            this.r + (c.r ? c.r : c),
            this.g + (c.g ? c.g : c),
            this.b + (c.b ? c.b : c),
            this.a + (c.a ? c.a : c),
        )
    }

    toString() {
        return `rgba(${Math.floor(this.r * 255)}, ${Math.floor(this.g * 255)}, ${Math.floor(this.b * 255)}, ${Math.floor(this.a * 255)})`
    }
}

/**
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @param {number} a 
 */
function color(r, g, b, a = 1) {
    return new Color(r, g, b, a)
}