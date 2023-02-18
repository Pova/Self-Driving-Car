const roadCanvas = document.getElementById('roadCanvas');
roadCanvas.height=window.innerHeight * 0.9;
roadCanvas.width=500;
const roadCtx = roadCanvas.getContext('2d');

const networkCanvas = document.getElementById('networkCanvas');
networkCanvas.height=window.innerHeight * 0.7;
networkCanvas.width=500;
const networkCtx = networkCanvas.getContext('2d');

const centerx = roadCanvas.width/2;
const laneWidth = 40;
const laneCount = 5;
const controlType = 'AI'

let car = new Player(centerx, 200, 20, 40, controlType);
let path = new Path( centerx, 100, 400);
let traffic = new Traffic();
let play = true;

mouse = {}
roadCanvas.addEventListener('click', (e) => {
    car = new Player(centerx, 200, 20, 40, controlType);
    path = new Path( centerx, 100, 400);
    traffic = new Traffic();
    play = true;
});

animate();

function animate(){
    if (play) {
        roadCanvas.height = window.innerHeight * 0.9;  // used to clear canvas
        networkCanvas.height = window.innerHeight * 0.9;

        car.update(path,traffic);
        path.update();
        traffic.update();
        
        roadCtx.translate(0, -car.y + roadCanvas.height * 0.8);
        path.draw();    
        traffic.draw();
        car.draw(roadCtx)
    }
    requestAnimationFrame(animate);
}