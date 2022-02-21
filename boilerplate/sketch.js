// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


// p5 Setup
function setup() {
  // setup canvas in container
  let canvas = createCanvas(canW, canH, WEBGL)
  canvas.parent(container)

}

// p5 Draw
function draw() {
  background(255)

}





function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




// my only friend, the end.