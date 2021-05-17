import faker from 'faker';

const array = [1,2,3,4,5];

const names = array
.map(
    (arr) => {
        const name = faker.commerce.productName();
        return `<div>${name}</div>`
    }
)

document.querySelector('#products').innerHTML = names.join('')