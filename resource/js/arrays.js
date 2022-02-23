
let item = {
    name: "Rahmat",
    family: "Waisi",
};



let numbers = [100,200,300,400,500];

/*
* console.log(numbers[0]); //   100
* console.log(numbers[2]); //   300
* console.log(numbers[1]); //   200
* console.log(numbers[3]); //   400
*/

for (let i = 0; i < numbers.length ; i++ ) {
    console.log(numbers[i]);
}




// while(){}
// do{}while();


let number = 50;
let count = 20;
let maghsom_alieh_ha = [number];

for (let i = 0; i <= number/2 ; i++) {
    let reminder = number % i;
    if (reminder === 0){
        maghsom_alieh_ha.push(i);
    }
}


console.log(maghsom_alieh_ha);


let variable = 10;

while(variable > 10){
    variable/=2; // variable = variable / 2;
    console.log('while variable / 2 = ' + variable);
}

do{
    variable/=2; // variable = variable / 2;
    console.log('variable / 2 = ' + variable);
}while(variable > 10);