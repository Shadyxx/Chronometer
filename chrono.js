var counter = 0;
var timer;
var timerset = false;
var paused = false;

function startCounting(){

	if(!paused){
		document.getElementById("myTxt").value = 0;
		if(timerset){
			clearInterval(timer);
		}
		counter = 0;
		timer = setInterval(function(){myTimer()},1000);
		timerset = true;
	} else {
		if(timerset){
		clearInterval(timer);
		}
		timer = setInterval(function(){myTimer()},1000);
		timerset = true;
		paused = false;
	}
}

function pauseCounting(){
	clearInterval(timer);
	paused = true;
}

function resetCounting(){
	document.getElementById("myTxt").value = 0;
	clearInterval(timer);
	paused = false;
}

function myTimer(){
	counter++;
	document.getElementById("myTxt").value = counter;
}