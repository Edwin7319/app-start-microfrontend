import faker from 'faker';

const arrayLength = [1, 1, 1, 1, 1, 1, 1, 1];

const arrayProductsName = arrayLength
    .map(
        (arr) => `<div>${faker.commerce.productName()}</div>`
    );

document.querySelector('#test-products')
    .innerHTML = arrayProductsName.join('');
