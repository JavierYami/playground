export const validation = (userInfo) => {
    const errors = {};

    const nameRegex =  /^[^\d]*$/;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+[\]{};:'",.<>?/]).{8,}$/;

    
    if(!userInfo.firstName) errors.firstName = 'This field cannot be empty.';
    else if(!nameRegex.test(userInfo.firstName)) errors.firstName = 'This field cannot contain numbers.';

    if(!userInfo.lastName) errors.lastName = 'This field cannot be empty';
    else if(!nameRegex.test(userInfo.lastName)) errors.lastName = 'This field cannot contain numbers.';

    if(!emailRegex.test(userInfo.email)) errors.email = 'Please, introduce a valid email.';

    if(!passwordRegex.test(userInfo.password)) errors.password = 'The password must have a special character, an uppercase letter, a lowercase letter, and must be at least 8 characters long.'
}