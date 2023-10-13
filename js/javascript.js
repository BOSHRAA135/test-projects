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
// Example 8
for(var a = 1 ; a <= 2 ; a++){
    console.log('outer' + a);
    for(var b =1 ; b <= 3 ; b++){
        console.log('inner'+b);
    }
}
// var str = ''; 
// str = str + '*'; // str += '*';
// str = str + '*'; 
// str = str + '*';
// str = str + '\n';
// str = str + '*';
// str = str + '*';
// str = str + '*';
// console.log(str); 
console.log("-------------------------");
var str = '';
for(var i = 1 ; i <= 2 ; i++){
    for(var j = 1 ; j <=3 ; j++){
        str = str + '*';
    }
    str = str + '\n';
}
console.log(str);
console.log('practice 1 -------------------');
// practice 1
var str = '';
for(var i = 1 ; i <=5; i++){
    for(var j = 1 ; j <= i ; j++ ){
        str = str + '*';
    }
    str = str + '\n'
}
console.log(str);
console.log(' practice 2 -----------------------');
var str = '';
for(var i = 1 ; i <= 5 ; i++){
    for(var j = 5 ; j >= i ; j-- ){
        str = str + '*';
    }
    str = str + '\n';
}
console.log(str);
console.log(' practice 3 -----------------------');
var str = '';
for(var i = 1 ; i <=5 ; i++){
    for(var j = 5; j > i ; j-- ){
        str = str + ' ';
    }
    for(var s = 1 ; s <= i ; s++){
        str = str + '*';
    }
    str = str + '\n';
}
console.log(str);
console.log('practice 4 -----------------------');
var str = '';
for(var i = 1 ; i <= 5 ; i++){
    for(var s = 1 ; s < i; s++){ 
        str = str + ' ';
    }
    for( var j = 5; j >= i ; j--){
        str = str + '*';
    }
   
    str = str + "\n";
}
console.log(str);
// Array
var a = 20;
console.log(typeof a);
var b = "javaScript";
console.log(typeof b);
var c = [12 , 14 ,16 ,'javascript'];
console.log(typeof c );
console.log(c);

var d = [];
console.log(d);

d[0]= 10;
d[1]= 20;
d[2]= "javascript";
console.log(d);

var t = [];
t [3]= 'javascript';
t [0] = 'java';
console.log(t);
console.log("-----------------");

var u = [1, 'java' , 3 , true];
console.log(u);
console.log(u.length); 

u.length = 5;
console.log(u);

var s = [1, 'java' , 3];
var k = [1, 'java' , 3];

console.log(s == k); 
console.log( s[0] == k[0] );

//Example 8
var grade1 = 14.5;
var grade2 = 18;
var grade3 = 17;
var grade4 = 16.75;
var grade5 = 20; 
var sum = grade1 + grade2 + grade3 + grade4+ grade5;
var avg = sum / 5;
console.log(avg);

var grades =[ 14.5 , 18 , 17 , 16.75 , 20];
var sum = grades[0]+ grades[1]+ grades[2]+ grades[3] + grades[4];
var average = sum / grades.length;
console.log(average);

var num =[1 , 2, 3, 4 ,5];
var sum = 0 ;
for (var i = 0 ; i<5 ; i++){
    sum = sum + num[i];
}
var av = sum / num.length;
console.log(av);


var num7 = [17 , 20 , 24 , 31 ,44];
for (var i = 0 ; i<num7.length ; i++){
    if (num7[i]%2 == 0){
        console.log(num7[i]);
    }
}

var grade = [14.5,18,17,16.75,15,12,19,18.25,10,20];
var sum = 0;
for(var i = 0 ; i<grade.length ; i++){
    sum = sum + grade[i];
}
var avg = sum / grade.length;
console.log(avg);

var array1 = [1 , true , 'javascript', 13.4];
console.log(array1.toString());
console.log(array1.join(' * '));
console.log('-----------------------');

var x = array1.toString();
console.log(x);

console.log(array1.pop());
array1.pop();
console.log(array1);
console.log(array1.pop());
console.log(array1); 
array1.push('push');
console.log(array1); 
console.log(array1.push());
var l = array1.push(2);
console.log(l);
console.log(array1);

console.log('--------------');
var array2=[1 , true, 'javascript', 20];
var x = array2.shift();
console.log(array2);
console.log(x);
console.log(array2.shift());
console.log(array2);
console.log('0------------------');
var x = array2.unshift(5);
console.log(array2);
console.log(array2.unshift());
console.log(x);

var array3=[1 , true , 'javascript', 20];
array3.unshift('java');
console.log(array3);
console.log(array3.length);

array3[array3.length] = 'Milad';
console.log(array3);

var array4=[1 , true , 'javascript', 20];
delete array4[1];
console.log(array4);

var str1 = "javaScript"; 
var str2 = "java";
console.log(str1 + str2); // concatenation

var array5 = [1,2,3];
var array6 = [4,5,6];
var array8 = [7,8,9];

var array7 = array5.concat(array6 , array8);
console.log(array7);

var array9 = [1, true , 2 , 3 , 'milad'];
//array9.splice(0);
var x = array9.splice(1 , 2 ,'next','code');
console.log(array9); 
console.log(x);

var array10 = [1, true , 2 , 3 , 'milad'];
var z = array10.slice(2 , 4);
console.log(array10);
console.log(z);

//sort()
var array11 = ['milad','ali','reza','Fatemeh','babak'];
console.log(array11);
array11.sort();
console.log(array11);

var array12 = [100 , 25, 35, 120];
console.log(array12);

array12.sort();
console.log(array12);

var array13 =[1 ,'javascript', true, 20];
console.log(array13);

array13.reverse();
console.log(array13);

var array13 =[1 ,'javascript', true, 20,'javascript', true, 20];
console.log(array13);
console.log(array13.indexOf('ali'));
console.log(array13.indexOf(20));
console.log(array13.lastIndexOf(20));
console.log(array13.lastIndexOf('ali'));

var array15 = [14,14.5,16,18,9.75,17,15];
var max = 0;
var min = max ; 
for(var i = 0 ; i < array15.length ; i++){
    if( max < array15[i]){
        max = array15[i];  
    }
}
console.log(max);

var min = max ; 
for(var i = 0 ; i < array15.length ; i++){
    if (min > array15[i]){
        min = array15[i];
    }
}
console.log(min);
var array16 =[1 ,'javascript', ['java',['javaF','code']], 20];
console.log(array16);
console.log(array16[2][0]);
console.log(array16[2][1]);
console.log(array16[2][1][1]);

// console.log('first name = Sara');
// console.log('last name = Rahimi');
// console.log('age = 26');

// for(var i = 1 ; i < 3 ; i++){
//     console.log('first name = Sara');
//     console.log('last name = Rahimi');
//     console.log('age = 26');
// }
function showBio(){
    console.log('first name = Sara');
    console.log('last name = Rahimi');
    console.log('age = 26');
}

showBio();
console.log("---------------------");

var Bio1 = function(){
    console.log('first name = Sara');
    console.log('last name = Rahimi');
    console.log('age = 26');
}

Bio1();

//Example 9
function addNumber(num1 , num2){
    console.log(num1 + num2);
}

addNumber(5 ,  10);
addNumber(100 , 10);
addNumber(300 , 50 );

var addNumber1 = function(num3 , num4){
    console.log(num3 + num4);
}

addNumber1(20 , 20);

function add(num1 , num2){
    return num1 + num2; 
}
var x = add(4 , 8);
console.log(x);

var add1 = function(num4 , num5 ){
    return num4 + num5;
}
var t = add1(9 , 9);
console.log(t);
//Example 10
var num1 = 10;
var num2 = 5;
var num3 = 12;
var num4 = 8;
var num5 = 16;

var total = num1 + num2 + num3 + num4 + num5;
var av = total/5;

if(av >= 12){
    console.log("accepted");
}
else{
    console.log("conditionally");
}
console.log("------------------------");


function average1(num1 , num2 , num3 , num4 , num5){
    var total = num1 + num2 + num3 + num4 + num5;
    var av = total/5;

    if(av >= 12){
        return "accepted";
    }
    else{
        return "conditionally";
    }
}

console.log(average1(10 , 11 , 12, 10.5 , 11.75));
console.log(average1(12,15,18,20,19));
var state = average1(14 ,16, 18,19,11);
console.log(state);
console.log("----------------");

var average2 = function(num1 , num2 , num3 , num4 ,num5){
    var total = num1 + num2 + num3 + num4 + num5;
    var av = total/5;

    if (av >= 12){
        return "accepted";
    }
    else{
        return "conditionally";
    }
}

var state2 = average2(11 , 12, 17,10, 6);
console.log(state2);

function sum1(num1 , num2 , num3){
  //  var total = num1 + num2 + num3;
    return num1 + num2 + num3;
}
console.log(sum1(1,2,3));
console.log(sum1(10,5 ,3));
console.log(sum1(10 , 5));
console.log(sum1(5 , 15 ,3 ,2));
console.log('------------------');

function myFunction(){
    console.log(arguments.length);
}
myFunction();
myFunction(10);
myFunction(10,6,4,19);
console.log('----------');

function sum2(){
    var total = 0;
    for(var i = 0 ; i < arguments.length; i++){
        total += arguments[i];
        // total = total + arguments[i]
    }
    return total;
}
console.log(sum2());
console.log(sum2(5));
console.log(sum2(5 , 10));
console.log(sum2(7 , 8 ,5 ,40 , 40));

var a = [ 13, 12,13];
console.log(a);

function myFunction1(){
    console.log(arguments);
}
myFunction1(5);

function myFunction2(...numbers){
    console.log(numbers);
}
myFunction2();
myFunction2(6);
myFunction2(10,8,13,2);

function myfunction3(...Numbers){ //rest 
    var total = 0;
    for(var i = 0 ; i < Numbers.length ;i++){
        total += Numbers[i];
    }
    return total;
}
console.log(myfunction3(1 ,2,3));
console.log(myfunction3(5 , 20));

function Sum(num1 , num2 , num3 =0){
    return num1 + num2 + num3;
}
console.log(Sum(10,4,5));
console.log(Sum(10,4));

var result = 1;
for (var i = 1 ; i <=3 ; i++){
    result *= 3;
}
console.log(result);
function power(base , exponent){
    var result = 1;
    for (var i = 1 ; i <=exponent ; i++){
        result *= base;
    }
    return result;
}
console.log(power(2,0));

var count = 0; num = 11;
for(var i = 1 ; i <= num ; i++){
    if (num % i == 0){
        count++;
    }
}
if (count == 2 ){
    console.log("yes");
}
else{
    console.log("No");
}
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.7));
console.log("-------------------");
function isPrime(num){
    var count = 0;
    for(var i = 1 ; i <= num ; i++){
        if (num % i == 0)
            count++;
    }
    if (count == 2 )
        return true;
    else
        return false;
}
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(9));
console.log('----------------------------------------------------');

function isPrime(num){
    for(var i = 2 ; i < num; i++){
        if (num % i == 0)
            return false;
    }
    return true;   
}

console.log(isPrime(10));
console.log(isPrime(11));
console.log('--------------------------------------------------------');

function rangePrime(firstnum , lastnum){
    var result = [];
    for(var i = firstnum; i <=lastnum ;i++){
         if(isPrime(i)==true)
            result.push(i);
    }
    return result;
}

console.log( rangePrime(12 , 20));
console.log(rangePrime(50 , 100));
console.log(rangePrime(150 , 200));

console.log("----------------------------------------------------------------");
var result =[];
for(var i = 12 ; i<= 20;i++){
    var count = 0;
    for(var j = 1 ; j <= i ; j++ ){
        if(i % j == 0)
        count++;
    }
    if(count == 2)
        result.push(i);
}
console.log(result);
console.log("----------------------------------------------------------------");
//function Declaration 
function message(){
    console.log("Javascript");
} 
// function Expression
var message1 = function(){
    console.log("JavaScript");
}
//Arrow function expressions
var message1 = () => console.log("javaScript");
message1();

var sum5 = function(num1 , num2){
    return num1 + num2;
}

var sum6 = (num1 , num2) => num1 + num2;
console.log(sum6(5,10));

var power1 = function(num1){
    return num1 * num1;
}

var power2 = (num1) => num1 * num1; 
console.log(power2(10));
console.log(power2(9));

//var isPrime = function(num){
//     for(var i = 2 ; i < num; i++){
//         if (num % i == 0)
//             return false;
//     }
//     return true;   
// }

var isPrime = (num) => {
    for(var i = 2 ; i < num; i++){
        if (num % i == 0)
            return false;
    }
    return true; 
}
//---------------------------------------------------
function firstfunction(callback){
    console.log("first function");
    callback();
}

firstfunction(secondFunction);

function secondFunction(){
    console.log("second function");
}

var a = 5;
function myFunction4(){
    var b = 10;
}
//console.log(b); //Error

function myFunction5(){
    console.log(a);
    if(a < 6 ){
        console.log(a);
    }
}
myFunction5();

function myFunction6(){
    let c = 8;
    if(c>4){
        console.log(c);
    }
} //function Scope
myFunction6();
console.log("-----------------------------------------");
function myFunction7(){

    if(true){
        const yt = 9;
    }
    //console.log(yt);
}
myFunction7();
console.log("-----------------------------------------");
var firstname;
console.log(firstname);
firstname = "milad";


var myfunction4 = function(){
    console.log("my function");
}
myfunction4();
// function hoisting
myfunction5();
function myfunction5(){
    console.log("java sctipt");
}

// let , const , var 90
var firstname1 = "Ali";
console.log(firstname1);
 
let firstname2 = "mmmm";
console.log(firstname2);

const firstname3 = "HHHHH";
console.log(firstname3);

firstName1 = "milad";
console.log(firstName1)

function firstname12(){
    var firstname11 = "---ali";
    //console.log(firstname11);
    return firstname11;
    
}
firstname12();
console.log(firstname12());
// console.log(firstname11); // firstname11 is not defined
function firstname13(){
    firstname14 = "wwww";
}
firstname13();
console.log(firstname14); //wwww

function myFunction8(){
    'use strict';
    var first = "Nahid";
    return first;
}
console.log(myFunction8());
// objact 

const Green = {
    firstName0:'milad',
    lastName0:'Maneee',
    age:28,
    gender:'male',
    isMarried:false,
    favorites:['music','coding'],
    coding : function(){
        return 'milad is coding ...';
    },
    grades : {
        math : 20,
        geometry : 16,
        sport : 20,
        arabic: 18
    }
};
console.log(Green);
console.log(Green.age);
console.log(Green['lastName0']);
console.log(Green.coding());
console.log(Green.grades.geometry);

const blue ={};
blue.name = "Negin";
blue.age = '23';
blue.Lastname = ' bahrami';
blue.coding = function(){
    return 'Negin is coding...';
}
console.log(blue);

const black = {};
const yellow = black;
yellow.name = 'Nahid';
console.log(black);

const milad ={
    FirstName : 'milad' , 
    LastName : "Bahirami",
    age : 25
};

console.log(milad);
const Myobject = {...milad};
console.log(Myobject);
Myobject.FirstName = 'Ali';
Myobject.favcolor = 'black';
Myobject.age = 28;
console.log(Myobject);
console.log(milad);

const pink = {
    firstname:'Nahid',
    lastname : 'jalaie',
    age : 34,
    favorites : ['art','music'],
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
};

console.log(pink.fullname());

// for-of

let myArray = [5 , 20 , 15 , 18 , 21];
for(let i = 0 ; i < myArray.length ; i++){
    console.log(myArray[i]);
}
console.log('--------------------------------------');
for(let element of myArray){
    console.log(element);
}

let str3 = "milad barami";
for(let i = 0 ; i < str3.length ; i++){
    console.log(str3[i]);
}
console.log('--------------------------------------');
for(let ch of str3){
    console.log(ch);
}
console.log('--------------------------------------');
const object ={
    firstName : 'Sara',
    lastName : 'Alipoor',
    age : 23 
}

for (let key in object){
    //console.log(key);
   // console.log(object.key); undefined
    //console.log(object[key]);
    console.log(key +" => "+object[key]);
}

const nestedObject ={
    flag : 'CA',
    country : {
        city : 'vancouver'
    }
};
const ShallowClone = {...nestedObject}; //shallowclone
console.log(nestedObject);
console.log(ShallowClone);
console.log("-------------------------------------");
ShallowClone.flag = 'TW';
ShallowClone.country.city = 'taipei';
console.log(ShallowClone);
console.log(nestedObject);
console.log("-------------------------------------");
const nested ={
    flag : 'CA',
    country : {
        city : 'vancouver'
    }
};
const deepClone = JSON.parse(JSON.stringify(nested)); //deepclone
console.log(nested);
console.log(deepClone);
deepClone.flag = 'TW';
deepClone.country.city = 'taipei';
console.log("-----------2-------------------------");
console.log(nested);
console.log(deepClone);

const donia = {
    firstName : 'Donia',
    lastName : "green",
    age : 23
};
console.log(donia.firstName);
console.log(donia.phoneNumber);

console.log(donia.lastName == undefined);
console.log(donia.carName == undefined);
// in operator
console.log('firstName' in donia);
console.log('carname' in donia);

// object comparison
console.log("-------------------------");
let num13 = 10;
let num14 = 10;
console.log(num13 == num14);
const object1 ={
    FirstName : 'milad' , 
    LastName : "Bahirami",
    age : 25
};

const object2 = object1;
// const object2 = {
//     FirstName : 'milad' , 
//     LastName : "Bahirami",
//     age : 25
// };

console.log(object1 == object2);
console.log("-------------------------");
let num15 = [10 , 12 , 16 , 20];
let num16 = [10 , 12 , 16 , 20];


console.log(num15 == num16);