let radius = 10;
// let perimeter = 2 * PI * radius;
let perimeter = getCirclePerimeter(radius);
// let area = (radius ^ 2) * PI; // (radius * radius) * PI;
let area = getCircleArea(radius); // calling function to calculate area

// alert("The perimeter of a circle with radius = 10 :> " + perimeter);
// alert("The area of a circle with radius = 10 :> " + area);

document.getElementById("circle_area").innerHTML = area;
document.getElementById("circle_perimeter").innerHTML = perimeter;