// javascript code
document.getElementById('paragragh').innerHTML='my first javascript';
function myfunction(){
    document.getElementById('paragragh').innerHTML='Paragragh changed';
    document.getElementById('paragragh').style.fontSize='20px';
    document.getElementById('paragragh').style.color='deeppink';
}
// Output
document.getElementById('heading1').innerHTML="This is a Heading";
document.getElementById('paragragh1').innerHTML= 5 + 6;
//document.write('Writing into the HTML output using it');
//document.write(5+6);
//window.alert('Hello World!');
//alert("hello world");
console.log('JavaScript does not have any print object or print methods.');
console.log('JavaScript');
function myfunction2(){
    document.getElementById('demo2').style.fontSize='35px';
    document.getElementById('demo2').style.border='2px dotted red';
    document.getElementById('demo2').style.backgroundColor=' blue';
}
//practice
// **variable**
var a = 5;
// console.log(a);
var b = 10;
var c = a + b ;
var d = a * b ;
var f = a/b;
var f2 = b/a ;
console.log(c);
console.log(d);
console.log(f);
console.log(f2);
// console.log(b);
// var firstName;
// firstName = 'Ali';
var firstName = 'Ali';
console.log(firstName);

var LastName = 'Bahrami';
console.log(LastName);

console.log(firstName+ ' ' + LastName);

// **constant**
// var PI = 3.1415;
// console.log(PI);
// without Error
// PI = 15;
// console.log(PI);

const PI = 3.1415;
console.log(PI);
// app.js:56 Uncaught TypeError: Assignment to constant variable.
// PI = 15;
// console.log(PI);


// Escape character

var name = 'milad \'Bahrami\'';
var Name = "Faezeh"
console.log(name);
var family = "\"Bahrami\"";
var name1 = 'Fatemeh';
console.log(name1 +' '+ family);
console.log(name.length);
console.log(Name);
console.log(Name.length);

//boolean

var a = true;
console.log(a);

var b = false;
console.log(b);

var c = (10 > 8);
console.log(c);

var d = ('Ali' == 'Faezeh')
console.log(d);

var age = 23;
console.log(age > 18);

var n = 'Hussain';
console.log(age == n);
console.log(n == Name);
console.log(age > c);

//undefind | empty | typeof

var a = 250 ;
console.log(typeof a);

var b = '250';
console.log(typeof b);

var c = "250";
console.log(typeof c);

var d = true;
console.log(typeof d);

var e = ""; // empty
console.log(typeof e);

var k;
console.log(k);
console.log(typeof k);

//oparator

console.log(10+5);
console.log(100 - 5);
console.log(10 / 5);
console.log(10 * 5);

console.log(10% 5);
console.log(14 % 3);
console.log(21 % 2);

console.log(2 ** 4);
console.log(10 ** 2);

var q = 5 + 10 ;
console.log(q);
console.log(typeof q);

var w = '5' + '10';
console.log(w);
console.log(typeof w);

var h = "Milad";
var i = "Bahrami";
var t = h + i ;
console.log(t);
console.log(typeof e);

var d = 5 + 5 + 'milad';
console.log(d);
console.log(typeof d);

var g = 'Ali'+ 5 + 6 ;
console.log(g);
console.log(typeof g);

//Prefix Increment
//Prefix decrement
var a = 10 ;
console.log(++a);
console.log(--a);

// Postfix Increment
// Postfix Decremnet
console.log(a++);
console.log(a);
console.log(a--);
console.log(a);

console.log('------------------');

var n = 10 ;
console.log(n);
console.log(n++);
console.log(n);
console.log(n * 10);

console.log('-------------------');

var b = 10;
console.log(b);
console.log(++b);
console.log(b);

var a = 2 + 3 * 4 ;
console.log(" a = " + a);

var b = (2 + 3) * 4;
console.log(" b = " + b);

var o = 2 * 3 ** 2 ;
console.log(" O = " + o);

var j = 2 + 3 * 5 ** 2 ;
console.log(" j = " + j);

var g = 100 + 50 - 3;
console.log(" g = " + g);

//operator precedence

var b = 5;
b +=2; // b = b + 2;
console.log(" b = " + b);

var c = 10 ;
c -= 6; // c = c - 6;
console.log(" c = " + c);

var d = 10;
d *= 6 ; // d = d * 6;
console.log(" d = " + d);

var e = 20;
e /= 6; // e = e / 6;
console.log(" e = " + e);

var t = 20;
t %= 6; // t = t % 6;
console.log(" t = " + t );

var y = 2 ;
y **= 2; // y = y ** 2;
console.log(" y = " + y);

//comparison operators
console.log("------------");
//== 
console.log(6 == 6);
console.log(8 == 3);

// !=
console.log(6 != 6);
console.log(8 != 3);

// >
console.log(2 > 2);
console.log(3 > 2);

// < 
console.log( 2 < 2 );
console.log(3 < 2 );

// >=
console.log(5 >= 5);
console.log(7 >= 2);

// <=

console.log(5 <= 5);
console.log(7 <= 5);

// === & !==

console.log(2==2);
console.log(2=="2");

console.log (2 === 2);
console.log(2 === "2");

console.log(2 != 2);
console.log( 2 != "2");

console.log(2 !== 2);
console.log( 2 !== "2");
