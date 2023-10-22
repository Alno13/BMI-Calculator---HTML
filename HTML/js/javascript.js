// JavaScript Document
function multi() {
	var mtpl, result = "",i;
	mtpl=parseInt(document.getElementById('numba').value);

	for (i= 0; i <= 10; i++){
	result += mtpl + " x " + i + " = " + mtpl*i + "<br>";
	}	
	document.getElementById('result').innerHTML=result;
}

function unit() {
	var uval, usel, total, curr;
	uval=parseInt(document.getElementById('val').value);
	usel=parseInt(document.getElementById('sel').value);
	
	if (usel==1){
		total=uval/53.55;
		curr=uval+" php = "+total.toFixed(2)+" $";
	}
	
	else if (usel==2){
		total=uval*53.55;
		curr=uval+" $ = "+total.toFixed(2)+" php";
	}
	
	else {
		alert("Invalid Input");
	}
	document.getElementById('conv').innerHTML=curr;
}

function tempp() {
	var units, disp;
	units=temp.value;
	
	if(units=="far"){
		disp="Select [1] for ºF to ºC.<br>Select [2] for ºF to ºK.<br>";
	}
	else if(units=="cel"){
		disp="Select [1] for ºC to ºF.<br>Select [2] for ºC to ºK.<br>";
	}
	else if(units=="kel"){
		disp="Select [1] for ºK to ºC.<br>Select [2] for ºK to ºF.<br>";
	}

	document.getElementById('display').innerHTML=disp;
}

function tCon() {
	var tval, tsel, tres, tunits, ttotal;
	tval= parseInt(document.getElementById('tempval').value);
	tsel= parseInt(document.getElementById('tempsel').value);
	tunits=temp.value;
	
	
	if(tunits=="far") {
		if(tsel==1) {
			ttotal=(tval-32)*(5/9);
			tres=tval + " ºF = " +ttotal.toFixed(2)+ " ºC";
		}
		else if(tsel==2) {
			ttotal=((tval-32)*(5/9))+273.15;
			tres=tval + " ºF = " +ttotal.toFixed(2)+ " ºK";
		}
		else {
			alert("Invalid Input");
		}
	}
	else if(tunits=="cel") {
		if(tsel==1) {
			ttotal=(tval*(5/9))+32;
			tres=tval + " ºC = "+ttotal.toFixed(2)+" ºF";
		}
		else if(tsel==2) {
			ttotal=tval+273.15;
			tres=tval + " ºC = "+ttotal.toFixed(2)+" ºK";
		}
		else {
			alert("Invalid Input");
		}
	}
	else if(tunits=="kel") {
		if(tsel==1) {
			ttotal=tval-273.15;
			tres=tval + " ºK = "+ttotal.toFixed(2)+" ºC";
		}
		else if(tsel==2) {
			ttotal=((tval-273.15)*(5/9))+32;
			tres=tval + "ºK = "+ttotal.toFixed(2)+" ºF";
		}
		else {
			alert("Invalid Input");
		}
	}
	document.getElementById('tempres').innerHTML=tres;
}

function bmiact() {
	var bhei,bwei,bbmi,bres;
	
	bhei=parseInt(document.getElementById('hei').value);
	bwei=parseInt(document.getElementById('wei').value);
	bbmi=((703*bwei)/(bhei*bhei));
	if (bbmi<18.5){
		bres=bbmi.toFixed(2)+" bmi : Underweight";
	}
	else if (bbmi>=18.5 && bbmi<25){
		bres=bbmi.toFixed(2)+" bmi : Normal weight";
	}
	else if (bbmi>=25 && bbmi<30){
		bres=bbmi.toFixed(2)+" bmi : Overweight";
	}
	else if (bbmi>=30){
		bres=bbmi.toFixed(2)+" bmi : Obese";
	}
	document.getElementById('bmii').innerHTML=bres;
}