// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// Global Vars
let nRows = 10
let nCols = 20

let tileMin = canW / 100
let tileMax = canW - ((nCols - 1) * tileMin)

let tileW = canW / nCols
let tileH = canH / nRows

let tiles = simpleGrid(0, 0, nCols, nRows, canW, canH, []) 


// Simple Grid Generator
function simpleGrid(zeroX, zeroY, gridCols, gridRows, gridW, gridH, arr) {
    let tileW = gridW / gridCols
    let tileH = gridH / gridRows

    let myTiles = arr
    for (let y = 0; y < gridRows; y++) {
        myTiles[y] = []
        let yOff = zeroY + (y * tileH)
        for (let x = 0; x < gridCols; x++) {
            let xOff = zeroX + (x * tileW)
            myTiles[y].push( new Tile(x, y, xOff, yOff, tileW, tileH))
        }
    }
    return myTiles
}



// p5 Setup
function setup() {
  // setup canvas in container
  let canvas = createCanvas(canW, canH)
  canvas.parent(container)

  ellipseMode(CORNER)

}

console.log(tiles)

// p5 Draw
function draw() {
  background(255)
  let n
  let amp = .02
  for (let row = 0; row < tiles.length; row++) {

    let newX = 0
    let restX = canW

    let totX = 0
    for (let nX = 0; nX < tiles[row].length; nX++) {
      n = noise(row * .5, nX, frameCount * amp)
      totX += n
    }

    for (let col = 0; col < tiles[row].length; col++) {

      let w = noise(row * .5, col, frameCount * amp)
      // console.log(n)
      let newW = map(w, 0, totX, 0, canW)

      let tile = tiles[row][col]
      tile.update(newX, newW, w)
      tile.draw()

      newX += newW
      restX -= newW
    }
  }

}





function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




// my only friend, the end.