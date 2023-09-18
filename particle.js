class Particle {
    constructor() {
        this.pos = Vector2D.random(0, screenSize)
        this.speed = randRange(0.1, 0.4)
        this.initSize = randRange(1, 25)
        this.vel = Vector2D.random(-1, 1).norm()
        this.color = Color.getRandom().intense()

        this.stroke = Math.random() < 0.3
        this.square = Math.random() < 0.5
        this.size = 0
    }

    /**
     * 
     * @param {number} delta 
     */
    update(delta) {
        this.pos = this.pos.add(this.vel.mul(delta * this.speed))
        this.pos = this.pos.mod(screenSize)

        let dist = 200
        /** @type {Particle} */
        let nearPar

        // particles.forEach(par => {
        //     let length = par.pos.sub(this.pos).len() - (this.size + par.size)
        //     if (dist > length && par !== this) {
        //         dist = length
        //         nearPar = par
        //     }
        // })

        if (nearPar) {
            let v = nearPar.pos.sub(this.pos)
            v = (dist > 20 ? v : v.mul(-1)).div(dist ** 2)

            this.vel = Vector2D.sum(
                this.vel.mul(5),
                v.mul(2),
                nearPar.vel
            ).norm()
        }

        this.vel = Vector2D.sum(
            this.vel.mul(5),
            Vector2D.random(-1, 1)
        ).norm()


        this.size = (this.size * 0.7 + 0.3 * this.initSize)
        this.size = Math.max(0, this.size)

        
        let col = this.color
        let mouseIncrease = 0
        if (mouse) {
            let mouseIncrease = (200 - Vector2D.dist(mouse, this.pos)) / 8
            this.size += Math.max(mouseIncrease, 0)
            col = Color.mix(col, color(1, 1, 1), Math.min(mouseIncrease / 15, 1))
        }

        ctx.beginPath()

        if (this.stroke) {
            ctx.strokeStyle = Color.mix(col, color(1, 1, 1), 0.5).toString()
        } else
            ctx.fillStyle = col.toString()

        if (this.square)
            ctx.rect(this.pos.x - this.size / 2, this.pos.y - this.size / 2, this.size, this.size)
        else
            ctx.arc(this.pos.x, this.pos.y, this.size / 2, 0, 2 * Math.PI)

        if (this.stroke)
            ctx.stroke()
        else
            ctx.fill()

        ctx.closePath()
    }
}
