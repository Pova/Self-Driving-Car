class Sensor {
    constructor(car, rayCount=3){
        this.car = car;
        this.rayCount = rayCount;
        this.rayLength = 100;
        this.raySpread = Math.PI/4;

        this.rays = [];
    }

    update(){ }
    
}