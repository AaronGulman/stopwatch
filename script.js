let seconds = 0;
let tens = 0;
const display = document.querySelector("#display")
let startBtn = document.querySelector("#startBtn")
let stop = document.querySelector("#stopBtn")
let reset = document.querySelector("#resetBtn")
let appendTens = document.querySelector('#tens')
let appendSeconds = document.querySelector("#seconds")
let interval;

startBtn.onclick = function(){
	clearInterval(interval)
	interval = setInterval(startTimer, 10)
}

stopBtn.onclick = function(){
	clearInterval(interval);
}

resetBtn.onclick = function() {
	clearInterval(interval);
	tens = 0;
	seconds =0;
	appendTens.innerHTML = tens;
	appendSeconds.innerHTML = seconds;
}


function startTimer(){
	tens++;
	
	if(tens <= 9){
	appendTens.innerHTML = '0' + tens;
	}
	if (tens > 9){
		appendTens.innerHTML = tens;
	}
	if (tens > 99) {
		console.log('seconds')
		seconds++;
		appendSeconds.innerHTML = '0' + seconds;
		tens = 0;
		appendTens.innerHTML = '0' + 0;
	}
	if (seconds > 9){
		appendSeconds.innerHTML = seconds;
	}

}