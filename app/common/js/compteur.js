function modifier(increment,div) {
	var valeur=parseInt(document.getElementById(div).value);
	valeur+=increment;
	document.getElementById(div).value=valeur;
} 

function reset2j(div1,div2,div3,div4,div5,div6) {
	document.getElementById(div1).value=20;
	document.getElementById(div2).value=20;
	document.getElementById(div3).value=0;
	document.getElementById(div4).value=0;
	document.getElementById(div5).innerHTML="Player 1";
	document.getElementById(div6).innerHTML="Player 2";
}

function reset3j(div1,div2,div3,div4,div5,div6,div7,div8,div9) {
	document.getElementById(div1).value=20;
	document.getElementById(div2).value=20;
	document.getElementById(div3).value=20;
	document.getElementById(div4).value=0;
	document.getElementById(div5).value=0;
	document.getElementById(div6).value=0;
	document.getElementById(div7).innerHTML="Player 1";
	document.getElementById(div8).innerHTML="Player 2";
	document.getElementById(div9).innerHTML="Player 3";
} 

function reset4j(div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11,div12) {
	document.getElementById(div1).value=20;
	document.getElementById(div2).value=20;
	document.getElementById(div3).value=20;
	document.getElementById(div4).value=20;
	document.getElementById(div5).value=0;
	document.getElementById(div6).value=0;
	document.getElementById(div7).value=0;
	document.getElementById(div8).value=0;
	document.getElementById(div9).innerHTML="Player 1";
	document.getElementById(div10).innerHTML="Player 2";
	document.getElementById(div11).innerHTML="Player 3";
	document.getElementById(div12).innerHTML="Player 4";
} 