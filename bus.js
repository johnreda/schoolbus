var prompt = require('prompt');
var fs = require('fs');

var onDaBus = function(studentsOnTheBus, driverName, color, gas, studentEntersBus, busChatter){

	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function studentAdded() {

	}
	this.busChatter = function getLoud(){
		if(studentCanHaveFun == true){
			console.log(student.catchphrase)
		} else {
			console.log(student.name + "has to be quiet!")
		}
	}
}