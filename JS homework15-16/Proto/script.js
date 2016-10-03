'use strict'

function human() {
	this.name = 'Michael';
	this.age = 20;
	this.sex = 'male';
	this.height = 176;
	this.weight = 60;
}

function worker() {
	this.workPlace = "restaurant";
	this.salary = 3000;
	this.work = function() {
		console.log('Go work')
	};
}

function student() {
	this.stydyPlace = "university";
	this.stippend = 820;
	this.watchSerial = function() {
		console.log('Go relax')
	};
}

worker.prototype = new human();
student.prototype = new human();

var oldWorker = new worker();
var oldStudent = new student();

console.log('oldWorker = ', oldWorker);
console.log('oldWorker age = ', oldWorker.age);

console.log('oldStudent = ', oldStudent);
console.log('oldStudent age = ', oldStudent.sex);

var newWorker = new worker();
var newStudent = new student();

console.log('newWorker = ', newWorker);
console.log('newWorker height = ', newWorker.height);

console.log('newStudent = ', newStudent);
console.log('newStudent weight = ', newStudent.weight);