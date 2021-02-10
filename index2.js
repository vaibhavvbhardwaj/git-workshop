const square = {
    'area': (a) => (a*a),
    'perimeter' : (a) => (4*a),
    'volume' : (a) => (a*a*a)
}
const calsquare = (a) => {
    console.log('The area of the square is ' + square.area(a) );
    console.log('The perimeter of the square is ' + square.perimeter(a) );
    console.log('The volume of the cube is' + square.volume(a) );
}
calsquare(5);