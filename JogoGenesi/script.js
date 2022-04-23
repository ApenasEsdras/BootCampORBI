let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = auzl

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

let shuffleOrder = () => {
    let colorOder = Math.floor(Math.random() * 4);
    order[order.length] = colorOder;
    clickedOrder = [];

    for (let i in order) {
        let elementdColor = createColorElement(order[i]);

    }
}