const CELLS_IN_ROW = 6;
const VARIANT = 4;

const fillTable = (tableNode) => {
    let counter = 1;
    for(let i = 0; i < CELLS_IN_ROW; i++) {
        const tr = document.createElement('tr');

        for(let k = 0; k < CELLS_IN_ROW; k++) {
            const td = document.createElement('td');
            td.textContent = counter;
            counter++;
            tr.appendChild(td);
        }
        tableNode.appendChild(tr);
    }
}

const getRandomColor = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);

    return `rgb(${red}, ${green}, ${blue})`;
}

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table');
    const inputColor =document.getElementById('input-color');
    fillTable(table);

    const currentCell  = table.querySelectorAll('td')[VARIANT - 1];
    currentCell.classList.add('variant');

    currentCell.addEventListener('mouseover', () => currentCell.style.backgroundColor = getRandomColor());
    currentCell.addEventListener('click', () =>  currentCell.style.backgroundColor = inputColor.value);
    currentCell.addEventListener('dblclick', () =>  {
        const rows = table.querySelectorAll('tr');

        rows.forEach((row, index) => {
            console.log('CELLS_IN_ROW - index', CELLS_IN_ROW - index);
            row.querySelectorAll('td')[CELLS_IN_ROW - index - 1].style.backgroundColor = inputColor.value
        } )
    });
});