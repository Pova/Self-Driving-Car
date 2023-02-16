class Player extends Vehicle {

    constructor(x, y, width, length ) {
        super(x, y, width, length);

        this.controls = new Controls('player')
        this.speed = 0;
        this.color = 'red'

        this.acceleration = 0.02;
        this.friction = 0.005;
        this.maxSpeed = 3;
        this.maxTurnSpeed = 0.02;

        this.damaged = false;

        this.sensor = new Sensor(this);
    }

    update(path){
        // handle movement
        this.#handleMovement();

        // check for collisions
        this.#collisionCheck();

        this.sensor.update(path,traffic);
    }

    #handleMovement(){
        if (this.controls.forward){
            this.speed += this.acceleration;
        }
        if (this.controls.backward){
            this.speed -= this.acceleration;
            
        }

        // max speed
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else if (this.speed < -this.maxSpeed) {
            this.speed = -this.maxSpeed;
        }

        // translate car position based on speed and direction
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

    #collisionCheck(){
        // check for collision with road boarders
        path.roads.forEach(road => {
            road.borders.forEach(border => {
                if (polysIntersect(this.getPolygon(), border)){
                    console.log('collision')
                    play = false;
                }
            
            })
            
        })

        // check for collision with other cars
        traffic.vehicles.forEach(car => {
            if (polysIntersect(this.getPolygon(), car.getPolygon())){
                console.log('collision')
                play = false;
            }
        })

    }
}