class Lane {
    constructor(sx, sy, height) {   // start and end points
        this.sx = sx;
        this.sy = sy;
        this.height = height;
        this.width = laneWidth;
        this.color = 'lightgrey';
        this.left = this.sx - (this.width / 2);
        this.right = this.sx + (this.width / 2);
    }
    
    draw() {
        // draw lane
        ctx.fillStyle = this.color;
        ctx.fillRect(this.sx - this.width / 2, this.sy, this.width, this.height + 1);
    }
    
}


class Road {
    constructor(sx, sy, height) {  // start and end x, y pos and angle
        this.sx = sx;
        this.sy = sy;
        this.height = height;
        this.width = laneWidth * laneCount;
        this.left = this.sx - (this.width / 2);
        this.right = this.sx + (this.width / 2);
        
        this.lanes = [];
        this.#createLanes();

        this.trees = [];
        this.#createTrees();

        const topLeft = {x: this.left, y: this.sy};
        const bottomLeft = {x: this.left, y: this.sy + this.height};
        const topRight = {x: this.right, y: this.sy};
        const bottomRight = {x: this.right, y: this.sy + this.height};
        this.borders = [[topLeft, bottomLeft], [topRight, bottomRight]]
    }

    #createLanes() {
        for (let i = 0; i < laneCount; i++) {
            this.lanes.push( new Lane(
                    this.left + ( (i + 0.5) * laneWidth),
                    this.sy, 
                    this.height ));
        }
    }

    #createTrees(){
        for (let i = 2; i < Math.random() * 5; i++) {
            this.trees.push( 
                {
                    x: this.left - 50 - Math.random() * 50,
                    y: this.sy + Math.random() * this.height 
                }
            )
        }
        for (let i = 2; i < Math.random() * 5; i++) {
            this.trees.push( 
                {
                    x: this.right + 50 + Math.random() * 50,
                    y: this.sy + Math.random() * this.height 
                }
            )
        }
    }

    draw() {

        // draw lanes
        this.lanes.forEach(lane => lane.draw());

        // draw lane lines
        for (let i=0; i <= laneCount; i++) {
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            
            // dashed for middle lane, solid for outer
            if (i == 0 || i == laneCount) {
                ctx.setLineDash([]);
            } else {
                ctx.setLineDash([20, 20]);
            }

            ctx.beginPath();
            ctx.moveTo(this.left + (i * laneWidth), this.sy);
            ctx.lineTo(this.left + (i * laneWidth), this.sy + this.height);
            ctx.stroke();
            ctx.closePath();
        }

        // draw borders 
        this.borders.forEach(border => {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = this.borderWidth;
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
            ctx.closePath();
        })


        // draw trees
        this.trees.forEach(tree => {
            ctx.fillStyle = 'brown';
            ctx.fillRect(tree.x, tree.y, 20, 40); 
            ctx.fillStyle = 'green';
            ctx.beginPath();
            ctx.arc(tree.x + 10, tree.y - 10, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            
        })

    }
    
}