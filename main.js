const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height=window.innerHeight * 0.8;
canvas.width=500;

const car = new Player(100, 200, 20, 40);


animate();

function animate(){
    canvas.height=window.innerHeight * 0.8;  // used to clear canvas
    car.update();
    car.draw(ctx)
    requestAnimationFrame(animate);
}

