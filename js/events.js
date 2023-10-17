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