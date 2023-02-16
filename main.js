const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



canvas.height=window.innerHeight * 0.9;
canvas.width=500;

const centerx = canvas.width/2;
const laneWidth = 40;
const laneCount = 5;

let car = new Player(centerx, 200, 20, 40);
let path = new Path( centerx, 100, 400);
let traffic = new Traffic();
let play = true;

mouse = {}
canvas.addEventListener('click', (e) => {
    car = new Player(centerx, 200, 20, 40);
    path = new Path( centerx, 100, 400);
    traffic = new Traffic();
    play = true;
});

animate();

function animate(){
    if (play) {
        canvas.height = window.innerHeight * 0.9;  // used to clear canvas
        
        car.update(path,traffic);
        path.update();
        traffic.update();
        
        ctx.translate(0, -car.y + canvas.height * 0.8);
        path.draw();    
        traffic.draw();
        car.draw(ctx)
    }
    requestAnimationFrame(animate);
}