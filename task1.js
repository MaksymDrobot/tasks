function maxRecurringChar(str) {
    const charObj = {}
    let maxCharValue = 0
    let maxChar = ''
    for (let char of str.toLowerCase()) {
        if (charObj.hasOwnProperty(char)) {
            charObj[char]++
        } else {
            charObj[char] = 1
        }
    }
    for (let char in charObj) {
        if (charObj[char] > maxCharValue) {
            maxCharValue = charObj[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxRecurringChar('aaaabbbdddddD'))
