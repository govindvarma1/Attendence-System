module.exports.dateParser = () => {
    let date = new Date();
    let string = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    return string;
} 