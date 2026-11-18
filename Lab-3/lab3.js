// завдання 1
const validFormData = {
    name: "John",
    email: "john@example.com",
    password: "12345678",
    address: {
        country: "Ukraine",
        city: "Kyiv",
    }
}

const invalidFormData = {
    name: "",
    email: "annaexample.com",
    age: 16,
    password: "123",
    address: {
        country: "Ukraine",
        city: "Kyiv",
    }
}

const partiallyInvalidFormData = {
    name: "A",
    email: "anna@example.com",
    age: 25,
    password: "123",
    address: {
        country: "Ukraine",
        city: "Kyiv",
    }
}

const invalidAddressFormData = {
    name: "A",
    email: "anna@example.com",
    age: 25,
    password: "123",
    address: {
        country: "Ukraine",
        city: "Kyiv",
    }
}

function validateForm(formDate) {
    const errors = [];

    if(!formDate.name || formDate.name.trim() === " ") {
        errors.push('Name is required');
    }

    if(!formDate.name && formDate.name.length > 2) {
        errors.push('Enter the valid name');
    }

    if(!formDate.email || formDate.email.trim() === " ") {
        errors.push('Email is required');
    } else if (!formDate.email.includes('@')) {
        errors.push('Please enter a valid email');
    }

    if(formDate.age < 18) {
        errors.push('Age must be at least 18');
    } else if(formDate.age > 150) {
        errors.push('Age must be no more than 150');
    }

    if(formDate.password && formDate.password.length < 8) {
        errors.push('Password must be at least 80 characters');
    }

    if(!formDate.address.country || formDate.address.country.trim() === " ") {
        errors.push('Country is required');
    }

    if(!formDate.address.city || formDate.address.city.trim() === " ") {
        errors.push('City is required');
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    }
}

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

// Завдання 2
function validateFormByFields(formData) {
    const errors = {};

  if(formData.name || formData.name.trim() === " ") {
      errors.name = errors.name || [];
      errors.name.push('Name is required');
  }

  if(formData.name || formData.name.length > 2) {
      errors.name = errors.name || [];
      errors.name.push('Name must contain at least 2 characters');
  }

  if(formData.email || formData.email.trim() === " ") {
      errors.email = errors.email || [];
      errors.email.push('Email is required');
  }

  if(formData.age || formData.age < 18) {
      errors.age = errors.age || [];
      errors.age.push('Age must be at least 18');
  }

  if(formDaata.age || formData > 150) {
      errors.age = errors.age || [];
      errors.age.push('Age must be less than 150');
  }

  if(formData.password || formData.password.length < 8) {
      errors.password = errors.password || [];
      errors.password.push('Password must be at least 8 characters');
  }

  if(formData.address.country || formData.address.country.trim() === " ") {
      errors.address.country = errors.address.country || [];
      errors.address.country.push('Country is required');
  }

  if(formData.address.city || formData.address.city.trim() === " ") {
      errors.address.city = errors.address.city || [];
      errors.address.city.push('City is required');
  }

  return {
      isValid: Object.keys(errors).length === 0,
      errors: errors
  }
}

console.log('=== Завдання 2: validateFormByFields ===');
console.log('Валідні дані:');
console.log(validateFormByFields(validFormData));

console.log('Некоректні дані:');
console.log(validateFormByFields(invalidFormData));

console.log('Частково некоректні дані:');
console.log(validateFormByFields(partiallyInvalidFormData));


console.log('Частково некоректні дані (адреса):');
console.log(validateFormByFields(invalidAddressFormData));
