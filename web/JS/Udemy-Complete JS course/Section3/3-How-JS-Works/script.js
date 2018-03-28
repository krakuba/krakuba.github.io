///////////////////////////////////////
// Lecture: Hoisting












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third(b)
    }
}

function third(letter) {
    var d = 'John';
    console.log(letter);
}

*/


///////////////////////////////////////
// Lecture: The this keyword


var as = function() {
   console.log(this); 
};

as;









