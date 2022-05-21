document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    const validationData = {
        name: {
            regExp: /[a-zA-Zа-яА-ЯЀ-Џ]+\s[a-zA-Zа-яА-ЯЀ-Џ][.][a-zA-Zа-яА-ЯЀ-Џ][.]$/,
            errorText: 'Введіть дані у форматі ТТТТТТ Т.Т.'
        },
        card: {
            regExp: /[a-zA-Zа-яА-ЯЀ-Џ]{2}\s№\d{6}$/,
            errorText: 'Введіть дані у форматі ТТ №ЧЧЧЧЧЧ'
        },
        faculty: {
            regExp: /[a-zA-Zа-яА-ЯЀ-Џ]{4}$/,
            errorText: 'Введіть дані у форматі ТТТТ'
        },
        birth: {
            regExp: /^\d{2}.\d{2}.\d{4}$/,
            errorText: 'Введіть дані у форматі ЧЧ.ЧЧ.ЧЧЧЧ'
        },
        address: {
            regExp: /^м.\s\d{6}$/,
            errorText: 'Введіть дані у форматі м.ЧЧЧЧЧЧ'
        },
        default: {
            regExp: null,
            errorText: 'Невірний формат даних'
        }
    }

    const addErrorBlock = (field) => {
        const parentNode = field.parentElement;
        const errorNode =  parentNode.querySelector('.field__error');
        errorNode && errorNode.remove();

        const validationFieldData = validationData[field.name];
        const test = validationFieldData.regExp.test(field.value);

        if(test) return false;

        const node = document.createElement('span');
        node.classList.add('field__error');
        node.textContent = validationFieldData.errorText;
        parentNode.appendChild(node);

        return true;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        Array.from(form.elements).forEach(el => {
            if(el.nodeName === 'INPUT') {
                const isError = addErrorBlock(el);
  
                if(isError) {
                    isValid = false;
                }
            }
        });
        if(isValid) {
            const result = document.getElementById('result');
            result.innerHTML ='';
            result.innerHTML = `<h1>Введені дані</h1>`;
            Array.from(form.elements).forEach(el => {
                if(el.nodeName !== 'INPUT') return;
                const item = document.createElement('p');
                item.innerHTML = `${el.name} - <strong>${el.value}</strong>`;
                result.appendChild(item)
            });
        }
    })
})