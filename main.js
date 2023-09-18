console.log("Press 3 for Debug menu")

let canv = document.getElementsByTagName("canvas")[0]
let ctx = canv.getContext("2d")

let screenSize = vec2(window)

/** @type {Vector2D} */
let mouse

/**
 * @type {Particle[]}
 */
let particles = []

let debug = false

resize()
function resize() {
    screenSize = vec2(window)
    canv.width = screenSize.width
    canv.height = screenSize.height
}


for (let i = 0; i < 50; i++) {
    particles.push(new Particle())
}

let textposY = 0

/**
 * 
 * @param {string} text 
 */
function write(text) {
    ctx.fillText(text, 0, textposY, text.length * 15)
    textposY += 50
}
prevTime = -1
/**
 * 
 * @param {number} timeStamp 
 */
function update(timeStamp) {
    let delta = timeStamp - prevTime
    prevTime = timeStamp
    let FPS = 1000 / delta

    ctx.clearRect(0, 0, screenSize.width, screenSize.height)

    // particles.push(new Particle())
    // particles.push(new Particle())

    particles.forEach((particle) => {
        particle.update(delta)
    })

    if (debug) {
        ctx.fillStyle = "#0F0"
        ctx.font = "30px Arial"
        ctx.textAlign = "left"
        ctx.textBaseline = "top"
        textposY = 0

        write(`FPS: ${Math.floor(FPS)} (${Math.round(FPS / 5) * 5})`)
        write(`Particles: ${particles.length}`)
        write(`Mouse: ${mouse}`)
    }

    requestAnimationFrame(update)
}

setInterval(() => {
    particles = particles.filter(par => par.size > 1)
}, 500)

window.addEventListener("DOMContentLoaded", () => update(0))
window.addEventListener("resize", resize)
window.addEventListener("mousemove", ev => {
    mouse = vec2(ev)
})

window.addEventListener("keypress", ev => {
    debug ^= ev.code == "Digit3"
})