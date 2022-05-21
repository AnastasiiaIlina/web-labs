document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('list');
  const nextNode = document.querySelector('#list + *');

  const getRandomColor = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);

    return `rgb(${red}, ${green}, ${blue})`;
}

  list.addEventListener('click', () => {
    list.style.backgroundColor = getRandomColor();
    list.style.color = getRandomColor();
  });

  nextNode.addEventListener('click', () => {
    nextNode.style.backgroundColor = getRandomColor();
    nextNode.style.color = getRandomColor();
  });

  const parentNode = document.getElementById('image-wrap');
  document.getElementById('add').addEventListener('click', () => {
    if(parentNode.hasChildNodes()){
        alert('Спочатку видаліть зображення!');
        return;
    }

    const imageNode = document.createElement('img');
    imageNode.src = 'https://tut-cikavo.com/images/Geographic/kviv-ukraine.jpg';
    imageNode.alt = 'Київ';

    parentNode.appendChild(imageNode);
  });

  const changeImageSize = ({ type }) => {
    const child = parentNode.querySelectorAll('img')[0];
    if(!child) {
        alert('Спочатку додайте зображення!');
        return;
    }
    let width = child.width;
    let height = child.height;

    if(type === 'enlarge') {
        width += 40;
        height +=40;
    } else {
        width -= 40;
        height -=40;
    }

    child.width = width;
    child.height = height;
  }

  document.getElementById('enlarge').addEventListener('click', () => changeImageSize({type: 'enlarge'}));
  document.getElementById('reduce').addEventListener('click', () => changeImageSize({type: 'reduce'}));

  document.getElementById('delete').addEventListener('click', () => {
    if(!parentNode.hasChildNodes()){
        alert('Спочатку додайте зображення!');
        return;
    }
    parentNode.removeChild(parentNode.childNodes[0]);    
  })
});