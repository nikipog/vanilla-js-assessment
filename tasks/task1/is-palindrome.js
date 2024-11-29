export function isPalindrome(str) {
    if (str && typeof str === 'string') {
        const normalizedString =
            str.
                replaceAll(' ', '').
                replace(/[^\w\s]|_/g, "").
                toLowerCase();
        let reversedString = '';
        for (let i = normalizedString.length - 1; i >= 0; -- i) {
            reversedString += normalizedString[i]
        }
        if (normalizedString === reversedString) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    } else {
        console.log('Передано не строковое значение')
        return
    }
}
// isPalindrome('А роза упала на лапу Азора')