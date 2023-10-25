//document.body.style.backgroundColor = 'black';
function eventHandler(){
    document.body.style.backgroundColor = "pink";
}
let button1 = document.querySelector('#button1');
button1.onclick = function(){
    document.body.style.backgroundColor = "purple";
}
button1.onclick = function(){
    console.log('javascript');
}
button1.onclick = function(){
    console.log('Hello World');
}
let button2 = document.querySelector('#button2');
// button2.addEventListener('click',changeeColor);
// function changeeColor(){
//     document.body.style.backgroundColor = 'yellow';
// } 
button2.addEventListener('click',function(){
    document.body.style.backgroundColor = 'red';
});
button2.addEventListener('click',function(){
    console.log('Script');
});
button2.addEventListener('click',function(){
    console.log('code');
});

// button2.addEventListener('click',() => document.body.style.backgroundColor = 'orange');
//Mouse events / Click
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function(){
    console.log('click');
});
let button4 = document.querySelector('#button4');
button4.addEventListener('click',function(){
    console.log('click');
});
button4.addEventListener('dblclick',function(){
    console.log('double click');
});

let button5 = document.querySelector('#button5');
button5.addEventListener('mousedown',function(){
    document.body.style.backgroundColor = 'red';
    console.log('mousedown');
});
button5.addEventListener('mouseup',function(){
    document.body.style.backgroundColor = 'yellow';
    console.log('mouseup');
});
button5.addEventListener('click',function(){
    document.body.style.backgroundColor = 'purple';
    console.log('click');
});
button5.addEventListener('contextmenu',function(){
    console.log('right click');
});

