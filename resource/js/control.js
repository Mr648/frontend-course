let number_one = 50;
let number_two = 15;

if (number_one % number_two == 0) {
    console.log('Number bakhsh pazir ast.');
} else {
    console.log('Number bakhsh pazir nist.');
}


let grade = 17; // A
// let grade = 15-17; // B
// let grade = 13-15; // C
// let grade = 10-13; // D
// let grade = * ; // M

function check_grade(grade) {
    if (grade >= 85) {
        console.log('Grade: ' + grade + ' - The Grade is Awesome! A.');
    } else if (grade < 85 && grade >= 75) {
        console.log('Grade: ' + grade + ' - The Grade is Great! B.');
    } else if (grade < 75 && grade >= 65) {
        console.log('Grade: ' + grade + ' - The Grade is Good! C.');
    } else if (grade < 65 && grade >= 50) { /* 1 0 & 0 1*/
        console.log('Grade: ' + grade + ' - You need to try harder! D.');
    } else {
        console.log('Grade: ' + grade + ' - Sorry you failed to pass this term!.');
    }
}

grade = 19;
if (grade <= 10 && (grade++) > 8) {
    console.log('grade is between 8 -10');
}

console.log(grade);


check_grade(grade);


for(let grade=0; grade  <= 100 ; grade++){ /* false -> break; */
    check_grade(grade);
}









