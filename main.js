const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

mouse = {}
canvas.addEventListener('click', function(e){
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
    console.log(mouse.x, mouse.y)
});

canvas.height=window.innerHeight * 0.9;
canvas.width=500;

const laneWidth = 30;
const laneCount = 5;

const car = new Player(canvas.width/2, 200, 20, 40);
const path = new Path( canvas.width/2, 100, 400);



animate();

function animate(){
    
    canvas.height = window.innerHeight * 0.9;  // used to clear canvas
    
    car.update();
    path.update();
    
    ctx.translate(0, -car.y + canvas.height * 0.8);
    path.draw();    
    car.draw(ctx)
    

    // drawstuff();
    requestAnimationFrame(animate);
}



// function drawstuff(){
    
//     lc = 5;
//     lw = 10;
//     ccp = -100;
//     r = degToRad(0);
//     r2 = r - degToRad(20);

//     s1 = {x:250, y:500, r:r}; 

//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = 5;
    
//     points1 = endPoints(s1.x, s1.y, s1.r, lc * lw);

//     ctx.beginPath();
//     ctx.moveTo(points1.start.x, points1.start.y);
//     ctx.lineTo(points1.end.x, points1.end.y);
//     ctx.stroke();
//     ctx.closePath();    

//     dx = s1.x + (ccp * Math.cos(s1.r));
//     dy = s1.y + (ccp * Math.sin(s1.r));
//     intersection = {x:dx, y:dy};

//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.moveTo(dx, dy);
//     ctx.lineTo(s1.x, dy);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.fillRect(dx, dy, 5, 5);

//     console.log(dx, dy, r)
    

    
//     ctx.lineWidth = 3;
//     ctx.beginPath();
//     ctx.arc(dx, dy, 100, r, r2, true);
//     ctx.stroke();
//     ctx.closePath();

   
// }

// function degToRad(degrees) {
//     return degrees * Math.PI / 180;
// }

// function endPoints(x, y, r, length) {
//     return {
//         start: {
//             x: x - (Math.cos(r) * length / 2),
//             y: y - (Math.sin(r) * length / 2),
//         },
//         end: {
//             x: x + (Math.cos(r) * length / 2),
//             y: y + (Math.sin(r) * length / 2),
//         }
        
//     }
// }






