const square = {
    'area': (a) => (a*a),
    'perimeter' : (a) => (4*a)
}
const calsquare = (a) => {
    console.log('The area of the square is ' + square.area(a) );
    console.log('The perimeter of the square is ' + square.perimeter(a) );
}
calsquare(5);