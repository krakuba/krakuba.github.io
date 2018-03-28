/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

console.log(calculateAge(1992))


var names = ['jogn', 'asda'];

var years = new Array(1990,1992,1967);

years.push(1999)

console.log(years)
*/

var john  = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    calculateAge: function() {
        this.age = 2017-this.yearOfBirth;
    }
};


var list = ['asda', 'asdad', 'fdsfsd', ' retre'];
list.forEach(ele \ -> {
             console.log(ele);
             })