const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(1920, 1080);
    alignSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    separationSlider = createSlider(0, 5, 1, 0.1);

    // Style the sliders
    alignSlider.style('width', '200px');
    cohesionSlider.style('width', '200px');
    separationSlider.style('width', '200px');

    // Create labels for the sliders
    alignLabel = createP('Alignment:');
    alignLabel.position(10, height + 10);
    alignLabel.style('font-weight', 'bold');
    alignSlider.position(100, height + 10);

    cohesionLabel = createP('Cohesion:');
    cohesionLabel.position(10, height + 30);
    cohesionLabel.style('font-weight', 'bold');
    cohesionSlider.position(100, height + 30);

    separationLabel = createP('Separation:');
    separationLabel.position(10, height + 50);
    separationLabel.style('font-weight', 'bold');
    separationSlider.position(100, height + 50);

    for (let i = 0; i < 150; i++) {
      flock.push(new Boid());
    }
  }


function draw(){
    background(51);

    for(let boid of flock){
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}
