var slider

function setup() {
  createCanvas(400, 400);
  createP('')
  textSize(25)
  slider = createSlider(1, 30, 1)
}

function draw() {
   background(255)
  fill (0)

  //fill in the vertical line with increasing
  //spaces between one pixel-wide dots
  for(y=30;y<height-30;y=y+slider.value()){
    noStroke()
  fill(0)
ellipse(200,y,2,3)
}
//fixation dots

  ellipse (190, height/2, 5, 2)
  ellipse (210, height/2, 5, 2)

//note how many cycles in console log to give m-score
  //console.log(x)
  text('Vertical distortion score is ' + (slider.value()-1) +' pixels.', 10, 20)
  //h1 = createP('The vertical distortion score is ' + x + ' pixels')
}
