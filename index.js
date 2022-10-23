let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;
function increaseBtn(){
    count += 1;
    countEl.textContent = count;
}
function decreaseBtn(){
    if(count === 0){
    
    }else{
        count -= 1;
        countEl.textContent = count;
    }
}
function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
