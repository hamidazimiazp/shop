export const textShortener = (string, len) => {
    let newString = string.slice(0, len);
    if (newString.length > 20) {
        newString += " ...";
    }
    return newString;
}