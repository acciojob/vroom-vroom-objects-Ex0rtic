// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed = topSpeed;
}

Car.prototype.getMakeModel = () =>{
	return `${this.make} ${this.model}`;
}

SportsCar.prototype.getTopSpeed =()=>{
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
