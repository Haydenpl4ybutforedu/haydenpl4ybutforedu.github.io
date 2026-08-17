var cookies=0
var cursors=0
var grandmas=0
var farm=0
var mine=0
var factory=0

function count() {	
	cookies++
	document.getElementById("count").innerHTML = cookies;
}

function upgrade1() {	
	if (cookies >= 10) {
		cookies-=10
		cursors++
		document.getElementById("count").innerHTML = cookies;
	} else {
		alert ("You cannot go into debt you scallywag!") 
	}
	document.getElementById("CursorAmount").innerHTML = cursors;
}

function upgrade2() {	
	if (cookies >= 15) {
		cookies-=15
		grandmas++
		document.getElementById("count").innerHTML = cookies;
	} else {
		alert ("You cannot go into debt you scallywag!") 
	}
	document.getElementById("GrandmaAmount").innerHTML = grandmas;
}

function upgrade3() {	
	if (cookies >= 20) {
		cookies-=20
		farm++
		document.getElementById("count").innerHTML = cookies;
	} else {
		alert ("You cannot go into debt you scallywag!") 
	}
	document.getElementById("FarmAmount").innerHTML = farm;
}

function upgrade4() {	
	if (cookies >= 25) {
		cookies-=25
		mine++
		document.getElementById("count").innerHTML = cookies;
	} else {
		alert ("You cannot go into debt you scallywag!") 
	}
	document.getElementById("MineAmount").innerHTML = mine;
}

function upgrade5() {	
	if (cookies >= 30) {
		cookies-=30
		factory++
		document.getElementById("count").innerHTML = cookies;
	} else {
		alert ("You cannot go into debt you scallywag!") 
	}
	document.getElementById("FactoryAmount").innerHTML = factory;
}

function cps() {
	cookies += cursors += (grandmas * 5) + (farm * 10) + (mine * 15) + (factory * 20);
	document.getElementById("count").innerHTML = cookies;
}
const intervalId = setInterval(cps, 1000);