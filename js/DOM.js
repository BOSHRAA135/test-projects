let doc = document;
console.log(doc);
let element = document.getElementById('heading');
console.log(element);
console.log(typeof element);

//getElementById()
//getElementsByTagName()

let element1 =document.getElementsByTagName('h1');
console.log(element1);
console.log(element1[0]);
console.log(element1[1]);

let elements = document.getElementsByTagName('p');
console.log(elements);
console.log(elements[0]);
console.log(elements[1]);
//107
//getElementByClassName()

let element3 = document.getElementsByClassName('p1');
console.log(element3);
//108
//querySelector()
//querySelectorAll()

let element4 = document.querySelector('h2');
console.log(element4);

// let element5 = document.querySelectorAll('#heading');
let element5 = document.querySelectorAll('h1 ,h2');
console.log(element5);
let element6 = document.querySelectorAll('.p1');
console.log(element6);
let element7 = document.querySelectorAll('p.p1');
console.log(element7);
//109
let element8 = document.querySelector('.container');
console.log(element8);
console.log(typeof element8);
console.log(element8.nodeName);
console.log(element8.nodeType);
console.log(element8.parentNode.nodeName);
console.log(element8.firstElementChild);
console.log(element8.lastElementChild);
console.log(element8.childElementCount);
console.log(element8.innerHTML);

//110
console.log(document.body);
console.log(document.html);
console.log(document.documentElement);
console.log(document.head);
console.log(document.title);
console.log(document.links);
console.log(document.forms);
console.log(document.scripts);
console.log(document.images);
//111
//change innerHTML
// document.getElementById('id').innerHTML = 'new innerhtml';
console.log(element8);
console.log(element8.innerHTML);

let element9 = document.getElementById('test');
console.log(element9);
console.log(element9.innerHTML);
// 112
console.log('--------------------------------');
let p = document.getElementById('test1').innerHTML = 'next Code';
console.log(p);

function changeText(){
    document.getElementById('test').innerHTML ='next1code.ir';
}
// 113
//change Attribute
// document.getElementById('id').attribute = 'new value';
// document.getElementById('id').className = 'new value';
// document.getElementById('box').className = 'box2';
function change(){
    document.getElementById('class').className = 'box1 box3';
}
//114
let div = document.getElementById('myid');
console.log(div.id);
console.log(div.title);
console.log(div.className);
console.log(div.getAttribute('id'));
console.log(div.getAttribute('class'));
console.log(div.getAttribute('title'));
console.log(div.getAttribute('src')); //null
//div.title = 'mytitle';
div.setAttribute('title','mytitle');
console.log(div.getAttribute('title'));
div.setAttribute('class','newclass');
console.log(div.className);
console.log(div.getAttribute('class'));
div.removeAttribute('title');
console.log(div.getAttribute('title'));
div.removeAttribute('class');
console.log(div.getAttribute('class'));
function myfunction(){
    document.getElementById('box4').style.backgroundColor='green';
    document.getElementById('box4').style.borderRadius= '20px';
    document.getElementById('box4').style.width = '200px';
}
function Random(){
    let maxVal = 0xFFFFFF; //16777215
    let randomNumber = Math.random() * maxVal;
    const RandomColor = Math.floor(randomNumber).toString(16);
    document.body.style.backgroundColor = '#' + RandomColor;
}
//116
// floor() Method
console.log(Math.floor(1.1));
// console.log(Math.floor(1.2));
// console.log(Math.floor(1.3));
// console.log(Math.floor(1.4));
// console.log(Math.floor(1.5));
// console.log(Math.floor(1.6));
// console.log(Math.floor(1.7));
// console.log(Math.floor(1.8));
console.log(Math.floor(1.9));

console.log(Math.floor(10.65));
console.log(Math.floor(10.95515141));

console.log(Math.floor(0.5));
console.log(Math.floor(0.57));
console.log(Math.floor(0.576));

console.log(Math.floor(-5.1));

//rgb(Math.random()*256,Math.random()*256,Math.random()*256)
let random = Math.random()*256;
console.log(random);
function randNum(){
    return Math.floor(Math.random()*256);
}
function randColor(){
    return `rgb(${randNum()},${randNum()},${randNum()})`;
}
console.log(randColor());
function changeColor(){
    document.body.style.backgroundColor = randColor();
}
let firstName = "milad";
console.log(firstName);
console.log("your name is : firstName")
console.log('your name is : ' + firstName);
console.log(`your name is : ${firstName}`); // backtick

function randnum(min , max ){
    let x = max - min ; 
    return Math.floor(min + Math.random() * x);
}
console.log(randnum(80 , 92));

let div1 = document.getElementById('main');
div1.style.backgroundColor = "lightgray";
console.log(div1.style.backgroundColor);
console.log(div1.style.width);
let elementstyle = getComputedStyle(div1); // important
console.log(elementstyle.width);
console.log(elementstyle.border);
console.log(elementstyle.padding);
console.log(elementstyle.textAlign);
console.log(elementstyle.color);
console.log(elementstyle.direction);
console.log(elementstyle.borderRadius);
//119
let div2 = document.getElementById('main1');
console.log(div2.id);
console.log(div2.className);
console.log(div2.classList);

div2.classList.add('box13','box14');
console.log(div2.classList);
div2.classList.remove('box12','box8');
console.log(div2.classList);
div2.classList.toggle('box13');
console.log(div2.classList);
div2.classList.replace('box14','box12');
console.log(div2.classList);
console.log(div2.classList.contains('box10'));
console.log(div2.classList.contains('box2'));
//120
console.log(div1.innerHTML);
console.log(div1.outerHTML);

let div3 = document.getElementById('main2');
console.log("-------------");
console.log(div3.outerHTML);
// div3.classList.replace('box4' , 'box5');
div.outerHTML = `${div3.classList.replace('box4','box5')}`;
// div3.outerHTML = `
// <div id='main2' class="box5">
// <p>JavaScript</p>
// <p>JavaScript</p>
// <p>JavaScript</p>
// </div>
// `;
console.log(div3.outerHTML);