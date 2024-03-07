let circle = document.getElementById('circle');
let up_btn = document.getElementById('up-btn');
let down_btn = document.getElementById('down-btn');

let rotateValue = circle.style.transform;
let rotateSum;

up_btn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
down_btn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
