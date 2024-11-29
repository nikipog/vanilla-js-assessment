export function fizzBuzz(number) {
    if (number && typeof number === 'number') {
        if (number > 100 || number < 0) {
            console.log('Число должно быть в диапазоне от 0 до 100')
            return
        }
        if (number % 3 === 0 && number % 5 === 0) {
            return console.log('FizzBuzz')
        }
        else if (number % 3 === 0) {
            return console.log('Fizz')
        }
        else {
            return console.log(number)
        }

    } else {
        console.log('Передано не числовое значение')
        return
    }
}
// fizzBuzz(null)