class Block{
    constructor() {
        this.center = createVector(random(width), random(height));
        this.width = random(20,100);
        this.height = random(20, 100);
    }

    intersect(point) {
        if ((point.position.x > (this.center.x + 0.5*this.width))||
           (point.position.x < (this.center.x - 0.5*this.width))||
           (point.position.y > (this.center.y + 0.5*this.height))||
           (point.position.y < (this.center.y - 0.5*this.height))
           ){


            return(false);
        }else{

    


            return(true);
        }
    }

    show() {
        rect(this.center.x, this.center.y, this.width, this.height);
    }
}