class Vehicle {
    constructor(x, y, width, length) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.length = length;
        this.speed = 0;
        this.maxSpeed = 3;
        this.direction = 0;        

        this.controls = new Controls();
    }

    /**
     * Draws the car on the canvas
     * @param {CanvasRenderingContext2D} ctx 
     */
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.direction);
        
        ctx.fillStyle = 'blue';
        ctx.fillRect(-this.width / 2, -this.length / 2, this.width, this.length);
        
        ctx.restore();

    }
    
}