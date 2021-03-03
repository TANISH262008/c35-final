var car;
var database;
var carvalues;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    car = createSprite(250,250,10,10);
    car.shapeColor = "red";
    var carposition = database.ref("car/position");
    carposition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("car/position").set({
        x:carvalues.x+x,y:carvalues.y+y
    })
    
}

function readPosition(data) {
    carvalues = data.val();
    car.x = carvalues.x;
    car.y = carvalues.y;
}
