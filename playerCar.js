class Player extends Vehicle {

    /**
     *  Updates the car's position
     */
    update(){
        if (this.controls.forward){
            this.speed += 0.01;
            
        }
        if (this.controls.backward){
            this.speed -= 0.01;
            
        }
        this.y -=  this.speed * Math.cos(this.direction).toFixed(2);
        this.x +=  this.speed * Math.sin(this.direction).toFixed(2);

        // only allow turning if the car is moving
        if (this.speed != 0) {
            let flip = this.speed < 0 ? -1 : 1;
            if (this.controls.left){
                this.direction -= 0.02 * flip;
            }
            if (this.controls.right){
                this.direction += 0.02 * flip;
            }
        }

        
    }
}