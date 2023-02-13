class Player extends Vehicle {

    constructor(x, y, width, length, controls) {
        super(x, y, width, length, controls);

        this.acceleration = 0.02;
        this.friction = 0.005;
        this.maxSpeed = 3;
        this.maxTurnSpeed = 0.02;
    }

    /**
     *  Updates the car's position
     */
    update(){
        if (this.controls.forward){
            this.speed += this.acceleration;
            
        }
        if (this.controls.backward){
            this.speed -= this.acceleration;
            
        }
        this.y -=  this.speed * Math.cos(this.direction).toFixed(2);
        this.x +=  this.speed * Math.sin(this.direction).toFixed(2);

        // apply friction
        if (this.speed > 0) {
            this.speed -= this.friction;
            if (this.speed < this.friction) {
                this.speed = 0;
            }
        } else if (this.speed < 0) {
            this.speed += this.friction;
            if (this.speed > -this.friction) {
                this.speed = 0;
            }
        }

        // max speed
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else if (this.speed < -this.maxSpeed) {
            this.speed = -this.maxSpeed;
        }

        // only allow turning if the car is moving
        if (this.speed != 0) {
            let flip = this.speed < 0 ? -1 : 1;
            let turnSpeed = Math.min(Math.abs(this.speed) * 0.02, this.maxTurnSpeed )
            if (this.controls.left){
                this.direction -= turnSpeed * flip;
            }
            if (this.controls.right){
                this.direction += turnSpeed * flip;
            }
        }

        
    }
}