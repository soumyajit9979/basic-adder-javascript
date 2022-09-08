let a= document.getElementById("numb");
function add(){
	let x= Number(a.innerHTML);
	a.innerHTML=x+1;
}

function reset(){
	a.innerHTML=0;
}

setInterval(live,1000);

function live(){
	let now=new Date();
	let hours=now.getHours();
	let minutes=now.getMinutes();
	let seconds=now.getSeconds();
	flag="AM";
	if(hours>=12){
		flag="PM";
	}

	else if (hours>=1) {
		flag="AM";
	}



	else if (hours=24) {
		flag="AM"
	}

	document.getElementById("time").innerHTML=hours + " : " + minutes+" : " + seconds + " "+ flag;
}
