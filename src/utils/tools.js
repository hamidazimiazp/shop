export const textShortener = (string, len) => {
    let newString = string.slice(0, len);
    if (newString.length > 20) {
        newString += " ...";
    }
    return newString;
}


export const sumItems = list => {
    const itemsCounter = list.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = list.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);


    return {
        itemsCounter,
        totalPrice
    }
}


export const isInCart = (state, id) => {
    const status = !!state.list.find(item => item.id === id);
    return status;
}


export const quntityCount = (state, id) => {
    const index = state.list.findIndex(item => item.id === id);
    if (index === -1) {
        return false;
    }
    return state.list[index].quantity;
}