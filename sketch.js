let slider;
let birds = [];
function preload() {
  birds[0] = loadImage("bird_0.png");
  birds[1] = loadImage("bird_1.png");
  birds[2] = loadImage("bird_2.png");
  birds[3] = loadImage("bird_3.png");
  birds[4] = loadImage("bird_4.png");
  birds[5] = loadImage("bird_5.png");
  birds[6] = loadImage("bird_6.png");
  birds[7] = loadImage("bird_7.png");
}
function setup() {
  slider = createSlider(0, 7, 0);
  createCanvas(300, 300);
}
function draw() {
  background(0);
  let val = slider.value();
  image(birds[val], 100, 100);
}
