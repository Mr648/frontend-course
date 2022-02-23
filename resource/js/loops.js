
let count = 0;
while(count < 10) // false
    count++;
// 1
// 2
//....
//
console.log(count);

/*
let html = "";
for (let i = 0; i < 10; i++) {
    let row = "<strong class='line'>";
    for (let j = 0; j < 10 ; j++) {
        row += '*';
    }
    row += '</strong><br>'; // <strong>**********</strong><br>
    html += row;
}
*/


let html = "";

let i = 0;


while(i < 10){
    let row = "<strong class='line'>";
    let j = 0;
    /*while(j<10){
        row += '*';
        j++;
    }*/

    for (let j = 0; j < 10 ; j++) {
        row += '*';
    }

    // j = 10;
    row += '</strong><br>'; // <strong>**********</strong><br>
    html += row;

    i++;
}


document.getElementById('square').innerHTML = html;