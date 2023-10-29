// const acc = document.querySelector('.accordion');
// const panel = document.querySelector('.panel');

// acc.addEventListener('click',function(){
//     acc.classList.toggle("active");
//     if(panel.style.maxHeight){
//         panel.style.maxHeight = null;
//     }
//     else{
//         panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
// });

const acc = document.getElementsByClassName('accordion');
for(var i = 0;i < acc.length ; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle('active'); 
        const panel= this.nextElementSibling;
       if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }
        else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}

let text = document.getElementById('item1').nextElementSibling.innerHTML;
document.getElementById('demo').innerHTML = text;