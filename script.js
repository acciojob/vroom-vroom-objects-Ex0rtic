// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed = topSpeed;
}
SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar;
Car.prototype.getMakeModel = () =>{
	return `${this.make} ${this.model}`;
}

SportsCar.prototype.getTopSpeed =()=>{
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
