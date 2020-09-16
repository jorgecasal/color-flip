const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexOnTheFly = '#';
    for(let i = 0; i < 6; i++){
        hexOnTheFly += hex[getRandomNumber()];
    }
    color.textContent = hexOnTheFly;
    document.body.style.backgroundColor = hexOnTheFly;
})

const getRandomNumber = () => {
    return Math.floor(Math.random()*hex.length);
}