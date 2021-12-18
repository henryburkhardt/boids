const flock = [];
const obstacles = [];
function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 100; i++) {
        flock.push(new Boid())
    }

    // for (let i = 0; i < 2; i++){
    //     obstacles.push(new Block());
    // }

    // valueSlider = createSlider(10, 900, 170, 1);
    // valueSlider.position(10, 10)

  
}

function draw() {
    background(0);    
    for(let boid of flock){
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}

