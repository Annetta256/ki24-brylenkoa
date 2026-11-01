// Викликає функції з lab3.js і виводить результати в консоль.

const validFormData = {
    name: "John",
    email: "John@example.com",
    age: 20,
    password: "12345678",
    address: {
        country: 'Ukraine',
        city: 'Kyiv',
    }
};

const invalidFormData = {
    name: "",
    email: "annaexample.com",
    age: 16,
    password: "123",
    address: {
        country: 'Ukraine',
        city: 'Kyiv',
    }
};

const partiallyInvalidFormData = {
    name: "A",
    email: "anna@example.com",
    age: 25,
    password: "123",
    address: {
        country: 'Ukraine',
        city: 'Kyiv',
    }
};

const invalidAddressFormData = {
    name: "A",
    email: "anna@example.com",
    age: 25,
    password: "123",
    address: {
        country: 'Ukraine',
        city: 'Kyiv',
    }
};


console.log('=== Завдання 1: validateForm ===');
console.log('Валідні дані:');
console.log(validateForm(validFormData));

console.log('Некоректні дані:');
console.log(validateForm(invalidFormData));

console.log('Частково некоректні дані:');
console.log(validateForm(partiallyInvalidFormData));

console.log('Частково некоректні дані:');
console.log(validateForm(partiallyInvalidFormData));

console.log('Частково некоректні дані (адреса):');
console.log(validateForm(invalidAddressFormData));

console.log('');

console.log('=== Завдання 2: validateFormByFields ===');
console.log('Валідні дані:');
console.log(validateFormByFields(validFormData));

console.log('Некоректні дані:');
console.log(validateFormByFields(invalidFormData));

console.log('Частково некоректні дані:');
console.log(validateFormByFields(partiallyInvalidFormData));


console.log('Частково некоректні дані (адреса):');
console.log(validateFormByFields(invalidAddressFormData));