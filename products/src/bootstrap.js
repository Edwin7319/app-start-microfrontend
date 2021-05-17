import faker from 'faker';


const mount = (element) => {
    const arrayLength = [1, 1, 1, 1, 1, 1, 1, 1];

    element.innerHTML = arrayLength
        .map(
            (arr) => `<div>${faker.commerce.productName()}</div>`
        )
        .join('');

}

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#test-products');

    // asuminos que nuestro contenedor no tiene un elemanto con el id
    // test-products
    if(element) {
        // probablemente corriendo en solitario
        mount(element);
    }
}

export {mount};

// context #1
// correr el archivo in desarrollo y en aislamiento
// usar el archivo index.html local, el cual tiene un elemento con un id.
// Renderizar inmediantamente nuestra app

// context #2
// correr el archivo en desarrollo o produccion a traves del container app
// No existe garantia del elemento id del html exita.
// No queremos tratar de inmediatamente renderizar la app



