const carCanvas = document.getElementById("myCanvas");
carCanvas.width = 600;

const ctx = carCanvas.getContext("2d");
const road = new Road(carCanvas.width/2, carCanvas.width*0.9)
const car = new Car(road.getLaneCenter(road.laneCount-1), 100, 30, 50, "KEYS");

const traffic=[
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -100, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -300, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -300, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -500, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -500, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -700, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -700, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -900, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -900, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1100, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1100, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1300, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1300, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1500, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1500, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1500, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1700, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1700, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1700, 30, 50, "DUMMY", 3),
    new Car(road.getLaneCenter(parseInt(Math.random()*6)), -1700, 30, 50, "DUMMY", 3),
];

animate();

function animate(){
    for (let i=0; i<traffic.length; i++){
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);
    carCanvas.height = window.innerHeight;

    ctx.save()
    ctx.translate(0, -car.y+carCanvas.height*0.7)

    road.draw(ctx);
    for(let i=0; i<traffic.length; i++){
        traffic[i].draw(ctx, "green");
    }
    car.draw(ctx, "blue");
    ctx.restore();
    requestAnimationFrame(animate);
}