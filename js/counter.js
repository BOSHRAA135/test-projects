const currentNum = document.getElementById('number');
const increseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decresBtn = document.getElementById('decrease');

let newNum;
//increase
increseBtn.addEventListener('click',function(){
    newNum = Number(currentNum.innerHTML) + 1;
    currentNum.innerHTML = newNum;
    currentNum.style.color = 'green';
});
//reset
resetBtn.addEventListener('click',function(){
    currentNum.innerHTML = 0;
    currentNum.style.color = 'white';
});
//decrease
decresBtn.addEventListener('click',function(){
    newNum = Number(currentNum.innerHTML) - 1;
    currentNum.innerHTML = newNum;
    currentNum.style.color = 'red';
}) 
