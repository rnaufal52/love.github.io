let cols = 600;
let rows = 30;
let t_D = (180 * 15) / cols;
let r_D = 1 / rows;
let open_animation = 20;
let vDensity = 8;
let pAlign = 3.6;
let curve1 = 2;
let curve2 = 1.3;
let canvas;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  clear();
  background(5);
  rotateX(-30);

  if (open_animation < 1) {
    open_animation = 10;
  }

  open_animation -= 0.4; //animation open speed

  let v = [];
  for (let r = 0; r <= rows; r++) {
    let row = [];
    for (let theta = 0; theta <= cols; theta++) {
      let phi =
        (180 / open_animation) * Math.exp((-theta * t_D) / (vDensity * 180));
      let petalCut =
        1 -
        (1 / 2) *
          pow(
            (5 / 4) * pow(1 - ((pAlign * theta * t_D) % 360) / 180, 2) - 1 / 4,
            2
          );
      let hangDown =
        curve1 * pow(r * r_D, 2) * pow(1.3 * r * r_D - 1, 2) * sin(phi);

      let pX =
        260 *
        petalCut *
        (r * r_D * sin(phi) + hangDown * cos(phi)) *
        sin(theta * t_D);
      let pY = -260 * petalCut * (r * r_D * cos(phi) - hangDown * sin(phi));
      let pZ =
        260 *
        petalCut *
        (r * r_D * sin(phi) + hangDown * cos(phi)) *
        cos(theta * t_D);
      let pos = createVector(pX, pY, pZ);
      row.push(pos);
    }
    v.push(row);
  }

  for (let r = 0; r < v.length - 1; r++) {
    stroke((open_animation / 10) * 360, 100, -20 + r * r_D * 120); //animation color

    beginShape(TRIANGLE_STRIP);
   for (let theta = 0; theta < v[r].length; theta++) {
      vertex(v[r][theta].x, v[r][theta].y, v[r][theta].z);
      vertex(v[r + 1][theta].x, v[r + 1][theta].y, v[r + 1][theta].z);
    }
    endShape();
  }
}
