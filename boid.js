class Boid{
    constructor() {
        // this.position = createVector(random(width), random(height));
        this.position = createVector(width/2, height/2);

        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.accelration = createVector();
        this.maxForce = 0.8;
        this.maxSpeed = 9;
    }

    edges() {
        if (this.position.x > width){
            this.position.x = 0;
        } else if (this.position.x < 0){
            this.position.x = width;
        }

        if (this.position.y > height){
            this.position.y = 0;
        } else if (this.position.y < 0){
            this.position.y = height;
        }
        
    }

    flock(boids) {
        let align_steering = createVector();
        let cohesion_steering = createVector();
        let separation_steering = createVector();

        // let perception = valueSlider.value();
        let perception = 170;
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x, 
                this.position.y, 
                other.position.x, 
                other.position.y);

            if(other != this && d<perception){
                align_steering.add(other.velocity);
                
                cohesion_steering.add(other.position);

                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(d);
                separation_steering.add(diff);
                total++;
            }
        }

        if(total > 0){
            align_steering.div(total);
            align_steering.setMag(this.maxSpeed);
            align_steering.sub(this.velocity);
            align_steering.limit(this.maxForce);
            
            cohesion_steering.div(total);
            cohesion_steering.sub(this.position)
            cohesion_steering.setMag(this.maxSpeed);
            cohesion_steering.sub(this.velocity);
            cohesion_steering.limit(this.maxForce);

            separation_steering.div(total);
            separation_steering.setMag(this.maxSpeed);
            separation_steering.sub(this.velocity);
            separation_steering.limit(this.maxForce);
        }
        
        this.accelration.add(align_steering);
        this.accelration.add(cohesion_steering);
        this.accelration.add(separation_steering)
        
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.accelration);
        this.velocity.limit(this.maxSpeed);
        this.accelration.mult(0);
    }
    
    show() {


            let triangleSize = 10;

            let x = this.position.x;
            let y = this.position.y;
            fill(41);
            stroke(255);
            push();
            translate(x, y);
            rotate(this.velocity.heading() - radians(90));
            triangle(0,0,triangleSize,0,triangleSize / 2,triangleSize * 1.2);
            pop();

        

        
    }
}