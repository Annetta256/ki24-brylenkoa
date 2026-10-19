// Завдання 0. Пошук елемента в масиві
const numbers = [1, 5, 10, 12, 15, 16];
const birthDay = 15;

function containsBirthDay(numbers, birthDay) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] === birthDay) {
            return true;
        }
    }
    return false;
}

console.log('containsBirthDay([1..10], birthDay): ', containsBirthDay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], birthDay)
);
console.log('containsBirthDay([11..20], birthDay): ', containsBirthDay([11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    birthDay));
console.log('containsBirthDay([21..31], birthDay): ', containsBirthDay([21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
31], birthDay));

// Приклад реалізації  аналога методу map()
function myMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}

// Завдання 1. Реалізація аналога методу indexOf().
const indexOfNumbers = [10, 20, 30, 20];
const letters = ['a', 'b', 'c'];

function myIndexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log('myIndexOf([10, 20, 30, 20], 20): ', myIndexOf(indexOfNumbers, 20));
console.log('[10, 20, 30, 20].indexOf(20): ', indexOfNumbers.indexOf(20));

console.log('myIndexOf([10, 20, 30, 20], 50): ', myIndexOf(indexOfNumbers, 50));
console.log('[10, 20, 30, 20].indexOf(50): ', indexOfNumbers.indexOf(50));

console.log("myIndexOf(['a', 'b', 'c'], 'c'): ", myIndexOf(letters, 'c'));
console.log("['a', 'b', 'c'].indexOf('c'): ", letters.indexOf('c'));

// Завдання 2. Реалізація аналога методу filter()
const filterNumbers = [1, 2, 3, 4, 5, 6];
const isEven = function (number) {
    return number % 2 === 0;
}

const anotherNumbers = [4, 11, 25, 7, 10];
const greaterThanTen = function (number) {
    return number > 10;
};

function myFilter(array, predicate) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log('myFilter - парні числа з [1, 2, 3, 4, 5, 6]: ', myFilter(filterNumbers, isEven));

console.log('filter() - парні числа з [1, 2, 3, 4, 5, 6]: ', filterNumbers.filter(isEven));

console.log('myFilter - числа > 10 з [4, 11, 25, 7, 10]: ', myFilter(anotherNumbers, greaterThanTen));

console.log('filter() - числа > 10 з [4, 11, 25, 7, 10]: ', anotherNumbers.filter(greaterThanTen));

// Завдання 3. Аналіз роботи методів shift та pop()
function getShiftAndPopResult() {
    const numbers = [10, 20, 30, 40, 50];

    const first = numbers.shift();
    const last = numbers.pop();

    return {
        first: first,
        last: last,
        numbers: numbers,
    };
}

console.log('getShiftAndPopResult(): ', getShiftAndPopResult());

//У змінній first збережено 10
// У змінній last збережено 50
// Масив numbers має вигляд [ 20, 30, 40 ]
// Shift() видаляє перший елемент масиву, а Pop() видаляє останній елемент

// Завдання 4. Пошук елементів, що не є спільними для двох масивів
first = [1, 2, 3, 4];
second = [3, 4, 5, 6];

function getNonCommonElements(first, second) {
    const result = [];

    for (let i = 0; i < first.length; i++) {
        if (myIndexOf(first[i], second) === -1) {
            result.push(first[i]);
        }
    }

    for (let i = 0; i < second.length; i++) {
        if (myIndexOf(first, second[i]) === -1) {
            result.push(second[i]);
        }
    }

    return result;
}

console.log('getNonCommonElements([1, 2, 3, 4], [3, 4, 5, 6]): ', getNonCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));

console.log('getNonCommonElements([10, 20, 30], [20, 40]): ', getNonCommonElements([10, 20, 30], [20, 40]));