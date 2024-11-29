export function chunkArray(array, size) {
    if (Array.isArray(array) && size > 0) {
        if (array.length !== 0) {
            const newArr = [];
            const safetyArray = [...array];
            while (safetyArray.length > size) {
                let newArrayElement = safetyArray.splice(0, size)
                newArr.push(newArrayElement)
                if (safetyArray.length <= size) {
                    newArr.push(safetyArray)
                }
            }
            return console.log('new array:', newArr)
        } else {
            return console.log('Передан пустой массив')
        }
    } else {
        return console.log('Переданы невалидные данные')
    }
    }
    chunkArray([0, 1, 2, 3, 4], 2)