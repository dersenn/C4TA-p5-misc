// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// Global Vars
let nRows = 4
let nCols = 20

let tileMin = canW / 100
let tileMax = canW - ((nCols - 1) * tileMin)

let tileW = canW / nCols
let tileH = canH / nRows

let tiles = []

// p5 Setup
function setup() {
  // setup canvas in container
  let canvas = createCanvas(canW, canH)
  canvas.parent(container)




  for (let y = 0; y < nRows; y++) {

    let restX = canW

    let prev = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    }


    for (let x = 0; x < nCols; x++) {

      let n = noise(x * 0.001, y)

      let w
      if (x == nCols - 1) {
        w = restX
      } else {
        w = n * (tileMin, restX - ((nCols-x) * tileMin) )
        // w = random(tileMin, restX - ((nCols-x) * tileMin) )
      }


      let tile = {
        x: prev.x + prev.w,
        y: y * tileH,
        w: w,
        h: tileH
      }

      tiles.push(new Tile(tile.x, tile.y, tile.w, tile.h, random(255)))
      prev = tile


      restX -= w
    }
  }

}

// console.log(tiles)

// p5 Draw
function draw() {
  background(0)
  let n
  for (let t = 0; t < tiles.length; t++) {
    let tile = tiles[t]
    tile.drawTile(frameCount)
  }

}





function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




// my only friend, the end.