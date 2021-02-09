const square = {
    'area': (a) => (a*a),
    
}
const calsquare = (a) => {
    console.log('The value of a is ${a} and the area is ' + square.area(a) );
}
calsquare(5);