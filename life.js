var myGrid = [];
var length = 150;
var height = 90;
var offset = 3;
var centerX = Math.floor(height/2) + offset;
var centerY = Math.floor(length/2) + offset;
for (var i=0;i<height+1;i++){
	myGrid.push(new Array(length));
}
var count = [];
for (var i=0;i<height+1;i++){
	count.push(new Array(length));
}
function makeRPentomino(){
	myGrid[centerX-10][centerY] = 1;
	myGrid[centerX-1-10][centerY] = 1;
	myGrid[centerX-1-10][centerY+1] = 1;
	myGrid[centerX+1-10][centerY] = 1;
	myGrid[centerX-10][centerY-1] = 1;
}
makeRPentomino();

function showGrid(gridArr){
	for (var x=0; x<gridArr.length; x++){
		var str = "";
		for (var y=0; y<gridArr[x].length; y++){
			str += gridArr[x][y];
		}
		// console.log(str);
	}
}
function step(gridArr){
	for (var x=0; x<gridArr.length; x++){
		for (var y=0; y<gridArr[x].length; y++){
			count[x][y] = 0;
			if (x > 0 && gridArr[x-1][y] == 1){
				count[x][y] += 1
			
			}
			if (x < gridArr.length-1 && gridArr[x+1][y] == 1){
				count[x][y] += 1
			
			}
			if (y < gridArr[x].length-1 && gridArr[x][y+1] == 1){
				count[x][y] += 1
			
			}
			if (y > 0 && gridArr[x][y-1] == 1){
				count[x][y] += 1
			
			}
			if (x < gridArr.length-1 && y < gridArr[x].length-1 && gridArr[x+1][y+1] == 1){
				count[x][y] += 1
			
			}
			if (y > 0 && x > 0 && gridArr[x-1][y-1] == 1){
				count[x][y] += 1
			}
			if (x < gridArr.length-1 && y > 0 && gridArr[x+1][y-1] == 1){
				count[x][y] += 1
			}
			if (x >0 && y < gridArr[x].length-1 && gridArr[x-1][y+1] == 1){
				count[x][y] += 1
			}
		}
	}
	for (var x=0; x<gridArr.length; x++){
		for (var y=0; y<gridArr[x].length; y++){
			if (gridArr[x][y] == 1){
				if (count[x][y] > 3){
					gridArr[x][y] = 0;
				}
				else if (count[x][y] < 2){
					gridArr[x][y] = 0;
				}
				else{
					gridArr[x][y] = 1;
				}
			}else{
				if(count[x][y] == 3){
					gridArr[x][y] = 1;
				}else{
					gridArr[x][y] = 0;
				}
			}
		}
	}
	// console.log(count);
}