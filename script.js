var gridArrY=[];
var gridArrX=[];
characters = [];

for(var i = 0;i<7;i++){
 gridArrY.push(new Path());
 gridArrX.push(new Path());
  gridArrY[i].strokeColor = 'green';
  gridArrX[i].strokeColor = 'blue';
  
gridArrY[i].add(new Point(i*100, 0));
gridArrY[i].add(new Point(i*100, 600));
gridArrX[i].add(new Point(0, i*100));
gridArrX[i].add(new Point(600, i*100));
}

function makeTurret(range, type, x, y){
  
  function turretPos(t){
    return {x:x, y:y}
  }
var effect = new Path.Circle(new Point(x, y), range);
effect.fillColor = new Color(66/254,134/254,1,0.5);
var tower = new Path.Circle(new Point(x, y), 25);
tower.fillColor = "blue";
tower.path = turretPos; 
tower.move=followPath;
tower.speed = 9001;
return tower;
}
characters.push(makeTurret(75, "lightblue", 150, 75));

function makeEnemy(trail, type, speed, health, size){
var circle = new Path.Circle(new Point(0, 600), size);
circle.fillColor = type;
circle.speed= speed;
circle.t=0;
circle.path=trail;
circle.move=followPath;
circle.health=speed*-1
return circle;
}
characters.push(makeEnemy(pathEqn, "red", 6, -6, 25));
characters.push(makeEnemy(pathEqn,"orange", 5, -5, 26));
characters.push(makeEnemy(pathEqn, "yellow", 4,-4, 27 ));
characters.push(makeEnemy(pathEqn, "green", 3, -3, 28));
characters.push(makeEnemy(pathEqn, "blue", 2, -2, 29));
characters.push(makeEnemy(pathEqn, "purple", 1,-1, 30));
var tileSize;
tileSize = (600 / 100) + "px";
console.log(tileSize);

function onFrame(event){
  for(var i = 0; i<characters.length; i++){
    characters[i].move();
    if ((checkDistance(characters[i].x, 150, characters[i].y, 75)) < 75)
    {
    characters[i].speed = characters[i].speed / 2
  
    }
    }
}


function followPath(path, obj){
  console.log();

	var start = new Point(this.position.x, this.position.y);
	var line = new Path();
	line.strokeColor = 'red';
	line.moveTo(start);

  this.t += this.speed;
  var newPoint = this.path(this.t);
// 	line.lineTo(new Point(this.position.x + this.speed, this.path(this.position.x + this.speed)));
  this.position = new Point(newPoint.x, newPoint.y);


}
function pathEqn(t){
  if(t <= 75)
  {
    console.log("Path 1 t:"+t);
    return {x:t, y:550};
  }//Path 1
  else if (t >= 75 && t <= 600)
  {
    console.log("Path 2 t:"+t);
    return {x:75, y:625 - t};
  }//Path 2
  else if (t > 600 && t <= 775)
  {
    console.log("Path 3 t:"+t);
    return {x:t-525, y:25};
  }//Path 3
  else if (t > 775 && t <= 1300)
  {
      console.log("Path 4 t:"+t);
      return {x:250, y:t - 750};
    }//Path 4
  else if (t > 1300 && t <= 1500)
  {
      console.log("Path 5 t:"+t)
      return {x:t-1050, y:550}
    }//Path 5
  else if (t > 1500 && t <= 2000)
  {
      console.log("Path 6 t:"+t)
      return {x:450, y:2050-t}
    }//Path 6
  else if (t > 2000 && t <= 2100)
  {
      console.log("Path 7 t:"+t)
      return {x:t-1550, y:50}
    }//Path 7
  else if (t > 2100 && t <=2175)
  {
      console.log("Path 8 t:"+t)
      return {x:550, y:2150-t}
    }//Path 8
  else return {x:550, y:-25};
}
function checkDistance(x1,x2,y1,y2){
  var a = x1-x2;
  var b = y1-y2;
  
  var c = Math.sqrt( a*a + b*b )
  return c;
}
// function makeCircles(x){
// var circle = new Path.Circle(new Point(0, 0), 25)
// circle.fillColor = x;
// circle.speed= Math.round(Math.random() * 10);
// circle.path=pathEqn;
// circle.move=followPath;
// }



// function bitGen(n, bits){
//   if(n === 0 ) return bits;
//   return bitGen( n - 1 ,bits + Math.round(Math.random()));
// }

// function hexGen(){
//   var bitInput = 6; //prompt('enter number of hexadecimals');  DO NOT DELETE, CODE IS AN ALTERNATE MODE TO ONE IN USE
//   var hexa = parseInt(bitGen(bitInput*4, ''), 2).toString(16);
//   makeCircles("#" + hexa);
//   return hexa;
// }

// console.log(hexGen());

//    /\
//    ||
//    ||
//    ||
//    ||
//    ||
//    ||
//    ||
// /__||__\
// \------/
//    ||
//    ||
//    ||
//    --
// DRAGONSBANE SWORD



