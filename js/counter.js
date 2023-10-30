const currentNum = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreasBtn = document.getElementById('decrease');

let newNum;

increaseBtn.addEventListener('click',function(){
    newNum = Number(currentNum.innerHTML) + 1;
    currentNum.innerHTML = newNum;
    // currentNum.style.color = 'green';
    if(newNum > 0){
        currentNum.style.color = 'green';
    }
    else if(newNum == 0){
        currentNum.style.color = 'white';
    }
    
});
//reset
resetBtn.addEventListener('click',function(){
    currentNum.innerHTML = 0;
    currentNum.style.color = 'white';
});
//decrease
decreasBtn.addEventListener('click',function(){
    newNum = Number(currentNum.innerHTML) - 1;
    currentNum.innerHTML = newNum;
    // currentNum.style.color = 'red';
    if(newNum < 0){
        currentNum.style.color = 'red';
    }
    else if(newNum == 0){
        currentNum.style.color = 'white';
    }
    
});
