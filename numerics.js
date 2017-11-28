// Numerics calculator can be extended in two ways:
// via standard Javascript methods and variables

this.myConst = 5;

// hiddenVar is hidden element (to make public use this.hiddenVar)
hiddenVar = 4;
this.varB = [ 3, hiddenVar ];
// via options.precision you can set the precision of decimal operations
// see here for more http://mathjs.org/docs/reference/functions/format.html
this.options={ notation: 'auto',  precision : 99,  exponential: { lower: 1e-99,  upper: 1e+99 }};

hiddenFunc = function(x,y)
{
    return x - y;
}

this.test = function(x,y)
{
    return (x+y) * hiddenFunc(x,y);
}

// or via math.js (see "http://mathjs.org/") compatible function definitions
// by adding them to 'this.functions' array as strings
this.functions=[
    "hello(x) = [1,x,4]'",
    "bye(x,y) = sin(x) + cos(y)"
];

// Now switch to calculator and try "hello(4)", "bye(5)", "test(2,3)" or "myConst"
// Now you are ready, to go and add your own functions


