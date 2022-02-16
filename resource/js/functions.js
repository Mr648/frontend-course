let area = 0;


function getCircleArea(radius){
    area  =  3.14 * (radius ^ 2);
    // alert('The area is: ' + area);

    return area;
}

getCircleArea(10);
alert(area);

function getCirclePerimeter(radius){
    return 2 * 3.14 * radius;
}