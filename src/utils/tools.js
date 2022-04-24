export const textShortener = (string, len) => {
    let newString = string.slice(0, len);
    if (newString.length > 20) {
        newString += " ...";
    }
    return newString;
}


export const sumItems = (list) => {
    const totalPrice = list.reduce((total, product) => total + (product.price * product.quantity), 0);
    const itemsCounter = list.reduce((total, product) => total + product.quantity, 0)


    return {
        itemsCounter,
        totalPrice
    }
}