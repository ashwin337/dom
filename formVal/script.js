document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const successMessage = document.getElementById('successMessage');

 
    function showError(inputElement, errorElement, message) {
        errorElement.textContent = message;
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }

 
    function clearError(inputElement, errorElement) {
        errorElement.textContent = '';
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    }

    function validateName() {
        const nameValue = nameInput.value.trim();
        if (nameValue.length < 3) {
            showError(nameInput, nameError, 'Name must be at least 3 characters long.');
            return false;
        }
        clearError(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            showError(emailInput, emailError, 'Please enter a valid email address.');
            return false;
        }
        clearError(emailInput, emailError);
        return true;
    }

    function validatePassword() {
        const passwordValue = passwordInput.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

        if (passwordValue.length < 8) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters long.');
            return false;
        } else if (!passwordRegex.test(passwordValue)) {
            showError(passwordInput, passwordError, 'Password must include uppercase, lowercase, number, and special character.');
            return false;
        }
        clearError(passwordInput, passwordError);
        return true;
    }

    function validateConfirmPassword() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        if (confirmPasswordValue === '') {
            showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password.');
            return false;
        } else if (passwordValue !== confirmPasswordValue) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match.');
            return false;
        }
        clearError(confirmPasswordInput, confirmPasswordError);
        return true;
    }

    nameInput.addEventListener('blur', validateName); 
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            successMessage.textContent = 'Registration successful! You can now log in.';
            successMessage.style.display = 'block';
            
            nameInput.classList.remove('valid');
            emailInput.classList.remove('valid');
            passwordInput.classList.remove('valid');
            confirmPasswordInput.classList.remove('valid');
            form.reset(); 
            setTimeout(() => {
                successMessage.style.display = 'none';
                successMessage.textContent = '';
                
            }, 5000);
        } else {
            successMessage.style.display = 'none'; 
        }
    });
});