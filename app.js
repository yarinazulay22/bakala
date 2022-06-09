
function addTax(price) {
    if (!price || price <= 0 || typeof(price) === 'string') {
        throw Error ('Nothing is for free! please supply a price');
    }

    /* const vat = 1.17; //maam  */
    const total = (price * 1.17).toFixed(2);
    return total;
}

function generateId(){
    /* const rand = Math.random();
    const num = rand * 100000;
    const floor = Math.floor(num)
    return floor;  */

    const time = new Date().getTime();
    return Math.floor(Math.random() * time);
}


