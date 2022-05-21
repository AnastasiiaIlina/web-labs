document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('main');
    const usersNode = document.getElementById('users');
    const addUserButton = document.getElementById('add-user');

    const createUserNode = (data) => {
        const usersItem = document.createElement('div');
        usersItem.classList.add('users__item');

        const { picture, name, city, postcode, phone } = data;

        const template = `
            <img src=${picture} alt="user picture" />
            <p>Name: <span>${name}</span></p>
            <p>City: <span>${city}</span></p>
            <p>Postcode: <span>${postcode}</span></p>
            <p>Phone: <span>${phone}</span></p>
        `;
        usersItem.innerHTML = template;
        usersNode.appendChild(usersItem)
    }

    addUserButton.addEventListener('click', () => {
        mainContainer.classList.add('loading');
        fetch('https://randomuser.me/api')
            .then((response) => {
                if(response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                mainContainer.classList.remove('loading');
                const result = data.results[0];
                const selectedData = {
                    picture: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    city: result.location.city,
                    postcode: result.location.postcode,
                    phone: result.phone
                }
                createUserNode(selectedData);
            })
            .catch(error => {
                console.log('error', error);
                usersNode.textContent = 'Помилка при загрузці даних - ' + error;
            })
    })
});