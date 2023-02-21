const reverseString = function(String) {

    const arrayedString = String.split('');
    const arrayedStringLength = arrayedString.length;
    const newArrayedString = [];

    for (i=0 ; i < arrayedStringLength ; i++) {
        
        newArrayedString.push(arrayedString.at(-1));
        arrayedString.pop(-1);
    }

    return newArrayedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
