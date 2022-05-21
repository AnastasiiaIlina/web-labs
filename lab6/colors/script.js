document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table');

    const fillTable = (tableNode) => {
        let counter = 1;
        for(let i = 0; i <6; i++) {
            const tr = document.createElement('tr');

            for(let k = 0; k < 6; k++) {
                const td = document.createElement('td');
                const label = document.createElement('label');
                label.classList.add('label');
                label.innerHTML = `<input type="color" />`
                td.textContent = counter;
                counter++;
                tr.appendChild(td);
                td.appendChild(label);
            }
            tableNode.appendChild(tr);
        }
    }
    fillTable(table);

    const getRandomColor = () => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        const red = getRandomInt(255);
        const green = getRandomInt(255);
        const blue = getRandomInt(255);

        return `rgb(${red}, ${green}, ${blue})`;
    }

    table.addEventListener('mouseover', (e) => {
        if(e.target.nodeName !== 'TD') return;

        e.target.style.backgroundColor = getRandomColor();
    })

})