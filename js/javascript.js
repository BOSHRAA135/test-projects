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

//condition
//Example 1
var gender = 'female';
if( gender == 'male'){
    console.log('تو پسری');
}
if (gender == 'female'){
    console.log('تو دختری')
}
//Example 2
var age = 25;
if(age > 18 && gender == 'female'){
    console.log("welcome to my site")
}
// Example 3
var grade = 34;
if (grade > 10){
    console.log( grade + " > 10")
}
if(grade > 20){
    console.log(grade + " > 20");
}
if(grade > 30){
    console.log(grade + " > 30");
}
if (grade > 40){
    console.log(grade + " > 40");
}
if (grade > 50){
    console.log(grade + " > 50");
}
// else
var num = 20;
if (num % 2 == 0 ){
    console.log( num + " is even");
}
else{
    console.log(num + " is odd");
}
console.log("-----------------------");
var Age = 25;
if ( Age > 18 ){
    console.log("+18");
} 
else{
    console.log("-18");
}
console.log("----------------------");
var num1 = -10;
if (num1 > 0 ){
    console.log(num1);
}
else{
    console.log(-num1);
}
console.log("---------------------");
var num2 = 60;
if(num2 > 10){
    console.log(num2 + " > 10 ");
}
else if(num2 > 20){
    console.log(num2 + " > 20 ");
}
else if(num2 > 30){
    console.log(num2 + " > 30 ");
}
else if(num2 > 40){
    console.log(num2 + " > 40 ");
}
else if(num2 > 50){
    console.log(num2 + " > 50 ");
}
else{
    console.log(" ****** ");
}
console.log("---------");
// Example 4
if(gender == "male"){
    if( age > 18){
        console.log("The boy's age is older than 18");
    }
    else{
        console.log("The boy's age is younger than 18");
    }
}
else{
    if( age > 18){
        console.log("The girl's age is older than 18");
    }
    else{
        console.log("The girl's age is younger than 18");
    }
}
//switch
var day = 4;
switch (day){
    case 1:
        console.log("Today is Saturday");
    break;
    case 2:
        console.log("Today is Sunday");
    break;
    case 3:
        console.log("Toaday is Monday");
    break;
    case 4:
        console.log("Today is Tuesday");
    break;
    case 5:
        console.log("Today is Wednesday");
    break;
    case 6:
        console.log("Today is Thursday");
    break;
    case 7:
        console.log("Today is Friday");
    break;
    default:
        console.log("invalid");
} 
if(day == 1)
    console.log("Today is Saturday");
else if(day == 2)
    console.log("Today is Sunday");
else if(day == 3)
    console.log("Toaday is Monday");
else if(day == 4)
    console.log("Today is Tuesday");
else if(day == 5)
    console.log("Today is Wednesday");
else if(day == 6)
    console.log("Today is Thursday");
else if(day == 7)
    console.log("Today is Friday");
else
    console.log("invalid");
//loop  
var i = 1;
while(i <= 10){
    console.log('JavaScript');
    i++;
}
var num = 1 ;
while (num < 10){
    console.log(num);
    num++;
}
console.log("-------------");
var num4 = 100;
while(num4 <= 200){
    if(num4 % 7 == 0 && num4 % 4 == 0){
        console.log(num4);
    }
    num4++;
}
var sum = 0 , i = 1;
while (i <=5){
    sum += i;
    i++;
}
console.log("sum = " + sum);
console.log(i);

// while && do-while
var num5 = 1;
while (num5 <=5){
    console.log(num5);
    num5++;
}
console.log("---------------");
var num5 = 1;
do {
    console.log(num5);
    num5++;
}
while(num5 <= 5);
console.log(num5);
console.log("----------------------");
var num6 = 5;
while(num6 >= 1){
    console.log(num6);
    num6--;
}
console.log("-----------"); 
var num6 = 5;
do {
    console.log(num6);
    num6--;
}
while(num6 >= 1);
// practice
console.log("------3-----");
var number = 1 ;
while (number <=5){
    console.log(number);
    number++;
}
console.log("------3------");
var number = 5;
while( number >= 1){
    console.log(number);
    number--;
}
console.log("------4------");
var number = 1;
do{
    console.log(number);
    number++;
}
while(number <=5);
console.log("-------4--------");
var number = 5;
do{
    console.log(number);
    number--;
}
while(number>=1);
console.log("------5-------");
for(var i = 1 ; i <=5 ; i++ ){
    console.log(i);
}
console.log("-------5-------");
for (var number = 5 ; number >=1; number--){
    console.log(number);

}
console.log("---------6----------");
var sum= 0;
//var sum = 0 , num ; 
for(var num = 10; num <=90; num++){
    sum += num;
}
console.log(" sum = " + sum);
//example 5
var counter = 0 , num = 5;
for (var i = 1; i <= num ; i++ ){
    if(num % i == 0)
    counter++;
}
if(counter == 2)
    console.log("prime number");
else
    console.log("complex number");
//example 6
var num6 = 20; 
while( num6 >= 1){
    console.log(num6);
    num6--;
}  
console.log('----------7--------');
var num6 = 20;
do {
    console.log(num6);
    num6--;
}  
while(num6 >= 1);
console.log("---------7---------");
for(var num6 = 20; num6 >= 1 ; num6-- ){
    console.log(num6);
}
// infinite loop 
// var num = 1;
// while(true){
//     console.log(num);
//     num++;
// } 
while(0){
    console.log("JavaScript");
}
console.log(Boolean(" "));
if(' '){
    console.log("javaScript");
}
//false
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(''));
console.log(Boolean(undefined));
var zo ;
console.log(typeof zo);
console.log(Boolean(zo));
if (zo){
    console.log("javascript");
}
var jj = NaN; // Not a Number
var div = "JavaScript"/ 5;
console.log(div);
console.log(Boolean(NaN));
if(NaN){
    console.log("javaScript");
}
if("AAAa"){
    console.log("javaScript");
}
// implicit conversion
console.log('3'+ 2);
console.log('3'+ true);
console.log('3'+ undefined);
//---------------------------------
console.log('4' - 2);
console.log('4' * 2);
console.log('10' / 2);
//---------------------------------
console.log("JavaScript" - "java");
console.log("javaScript" * 5);
//---------------------------
console.log('4' - true);
console.log('4' + true);
console.log(4 + true);
console.log('4' * true);
console.log('4' * false);
//-----------------------------
console.log(4 + null);
console.log(4 - null);
console.log(4 * null);
//-------------------------------
console.log(undefined + 2);
console.log(undefined + true);
console.log(undefined + null);
//------------------------------48
console.log("-----48-----")
var a = "JavaScript";
console.log(typeof a);

var b = Number(a);
console.log(typeof b);

// String --> Number
console.log(Number('3.14'));
console.log(Number(''));
console.log(Number(' '));
console.log(Number('javaScript'));
console.log(Number('123Script'));
console.log(Number('123 48'));

// number --> string 
console.log(String(100));
console.log(String(3.14));
console.log(String(100 + 23));

// Boolean --> number
console.log(Number(true));
console.log(Number(false));

// Number --> Boolean 
console.log(Boolean(100));
console.log(Boolean(0));
console.log('-----------------');
// String --> boolean
console.log(Boolean('0'));
console.log(Boolean('JavaScript'));
console.log(Boolean(''));
console.log(Boolean(' '));
//--------------------------
console.log('------------------');
console.log(Number(' '));
console.log(Boolean(' '));
if(''){
    console.log('JavaScript')
}
//------------------------------------
//Example 6 again 
for(var i = 1 ; i <= 10 ; i++){
    console.log("JavaScript");
    if(i == 5){
        break;
    }
}
var counter1 = 0 , num = 6;
for(var i =1 ; i <= num ; i++){
    if(num % i == 0 ){
        counter1++;
    }
}
if(counter1 == 2){
    console.log("prime number");
}
else {
    console.log("complex number");
}

// Example 7
for(var i = 1 ; i <= 10 ; i++){
    if(i % 2 == 0 ){
        continue;
    }
    console.log(i);
}