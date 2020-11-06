module.exports = {
    handleArray: function (arr) {
        return arr.map((item) => item.toObject());
    },
    handleObject: function (item) {
        return item ? item.toObject() : item;
    },
};
