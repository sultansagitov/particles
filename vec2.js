class Vector2D {
    /**
     * 
     * @param {any} x 
     * @param {number} y 
     */
    constructor(x = undefined, y = undefined) {
        /** @type {number} */
        this.x = 0
        /** @type {number} */
        this.y = 0

        if (y != undefined) {
            this.x = x
            this.y = y
        } else if (x != undefined) {
            if (x.x != undefined) {
                this.x = x.x || 0
                this.y = x.y || 0
            } else if (x.width != undefined) {
                this.x = x.width || 0
                this.y = x.height || 0
            } else if (x.innerWidth != undefined) {
                this.x = x.innerWidth || 0
                this.y = x.innerHeight || 0
            } else {
                this.x = x || 0
                this.y = x || 0
            }
        }
    }

    get width() {
        return this.x
    }

    set width(val) {
        this.x = val
    }

    get height() {
        return this.y
    }

    set height(val) {
        this.y = val
    }

    /**
     * 
     * @param {Vector2D | number} a 
     * @param {Vector2D | number} b 
     * @returns 
     */
    static random(a = 0, b = 1) {
        let c = new Vector2D(a)
        let d = new Vector2D(b)

        return new Vector2D(
            randRange(c.x, d.x),
            randRange(c.y, d.y),
        )
    }

    /**
     * 
     * @param  {...(Vector2D | number)} values 
     */
    static sum(...values) {
        let res = new Vector2D()

        values.forEach(val => {
            res = res.add(val)
        })

        return res
    }

    /**
     * 
     * @param {Vector2D} a 
     * @param {Vector2D} b 
     */
    static dist(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }

    /**
     * 
     * @param {number | Vector2D} z 
     */
    add(z) {
        return new Vector2D(
            this.x + (z.x !== undefined ? z.x : z),
            this.y + (z.y !== undefined ? z.y : z)
        )
    }

    /**
     * 
     * @param {number | Vector2D} z 
     */
    sub(z) {
        return new Vector2D(
            this.x - (z.x !== undefined ? z.x : z),
            this.y - (z.y !== undefined ? z.y : z)
        )
    }

    /**
     * 
     * @param {number | Vector2D} z 
     */
    mul(z) {
        return new Vector2D(
            this.x * (z.x !== undefined ? z.x : z),
            this.y * (z.y !== undefined ? z.y : z)
        )
    }

    /**
     * 
     * @param {number | Vector2D} z 
     */
    div(z) {
        return new Vector2D(
            this.x / (z.x !== undefined ? z.x : z),
            this.y / (z.y !== undefined ? z.y : z)
        )
    }

    len() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    norm() {
        return this.div(this.len())
    }

    /**
     * 
     * @param {number | Vector2D} a 
     * @returns 
     */
    mod(a) {
        return new Vector2D(
            mod(this.x, a.x ? a.x : a),
            mod(this.y, a.y ? a.y : a),
        )
    }
}

/**
 * 
 * @param {any} x 
 * @param {number} y 
 */
function vec2(x, y) {
    return new Vector2D(x, y)
}