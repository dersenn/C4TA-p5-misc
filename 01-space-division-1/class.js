class Tile {
    constructor(posX, posY, tW, tH, color) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.col = color
    }

    drawTile(frameCount) {
        stroke(0, 255, 0)
        // noStroke()
        noFill()

        // if (coinToss(50)) {
        //     fill(255)
        // } else {
        //     fill(0)
        // }

        // fill(this.col.r, this.col.g, this.col.b, 255)
        rect(this.x,this.y,this.w,this.h)
    }
}
