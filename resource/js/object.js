
let car = {
    name:"Mazda 3",
    model:2020,
    color:"red",
    weight:"1200Kg",
    move: function(){
        // things to do
        alert('The car is moving.');
    }
};

document.getElementById("name").innerHTML = car.name;
document.getElementById("model").innerHTML = car.model;
document.getElementById("color").innerHTML = car.color;
document.getElementById("weight").innerHTML = car.weight;


car.move();