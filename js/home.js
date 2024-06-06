// forms js
//  to open the form of create new password 
function openNewPasswordPopup() {
  $('#newPasswordPopup').modal('show');
};



// validation of the login popup

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login_form');
    const errorAlert = document.createElement('div');
    errorAlert.classList.add('alert', 'alert-danger', 'd-none');
    errorAlert.setAttribute('role', 'alert');
    const errorMessage = document.createElement('div');
    errorAlert.appendChild(errorMessage);
    loginForm.prepend(errorAlert);

    const successAlert = document.getElementById('alert-success');
    const closeSuccessAlert = document.querySelector('#alert-success .close-btn');

    closeSuccessAlert.addEventListener('click', () => {
        successAlert.classList.add('d-none');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        let errorMessages = [];

        // Validate username
        const username = document.getElementById('log_username').value.trim();
        if (username === '') {
            valid = false;
            errorMessages.push('Username is required.');
        }

        // Validate password
        const password = document.getElementById('log_password').value.trim();
        if (password === '') {
            valid = false;
            errorMessages.push('Password is required.');
        }

        // Show error or success messages
        if (!valid) {
            errorAlert.classList.remove('d-none');
            errorMessage.innerHTML = errorMessages.map(message => `<p>${message}</p>`).join('');
        } else {
            errorAlert.classList.add('d-none');
            errorMessage.innerHTML = '';
            successAlert.classList.remove('d-none');
            loginForm.reset();
        }
    });
});













// validation for the forgotpassword popup 

document.addEventListener("DOMContentLoaded", function() {
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');

  forgotPasswordForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get input value
      const email = document.getElementById('forgot_email').value.trim();

      // Validate input field
      if (email === '') {
          alert('Please enter your email address.');
          return;
      }

      // If validation passes, submit the form
      this.submit();
  });
});




// validation for new password form  

document.addEventListener("DOMContentLoaded", function() {
  const newPasswordForm = document.getElementById('newPasswordForm');

  newPasswordForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get input values
      const newPassword = document.getElementById('new_password').value.trim();
      const confirmPassword = document.getElementById('confirm_password').value.trim();

      // Validate input fields
      if (newPassword === '') {
          alert('Please enter your new password.');
          return;
      }

      if (confirmPassword === '') {
          alert('Please confirm your new password.');
          return;
      }

      if (newPassword !== confirmPassword) {
          alert('Passwords do not match. Please try again.');
          return;
      }

      // If validation passes, submit the form
      this.submit();
  });
});



// // validation for the sign up fprm


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const errorAlert = document.getElementById('errorAlert');
    const errorMessage = document.querySelector('.error-message div');
    const successAlert = document.getElementById('alert-success');
    const closeErrorAlert = document.querySelector('#errorAlert .close-btn');
    const closeSuccessAlert = document.querySelector('#alert-success .close-btn');

    closeErrorAlert.addEventListener('click', () => {
        errorAlert.style.display = 'none';
    });

    closeSuccessAlert.addEventListener('click', () => {
        successAlert.classList.add('d-none');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        let errorMessages = [];

        // Validate first name
        const firstName = document.getElementById('reg_firstName').value.trim();
        if (firstName === '') {
            valid = false;
            errorMessages.push('First Name is required.');
        }

        // Validate last name
        const lastName = document.getElementById('reg_lastName').value.trim();
        if (lastName === '') {
            valid = false;
            errorMessages.push('Last Name is required.');
        }

        // Validate email
        const email = document.getElementById('reg_email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            valid = false;
            errorMessages.push('Email is required.');
        } else if (!emailPattern.test(email)) {
            valid = false;
            errorMessages.push('Please enter a valid email address.');
        }

        // Validate date of birth
        const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
        if (dateOfBirth === '') {
            valid = false;
            errorMessages.push('Date of Birth is required.');
        }

        // Validate gender
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            valid = false;
            errorMessages.push('Gender is required.');
        }

        // Validate password
        const password = document.getElementById('reg_password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (password === '') {
            valid = false;
            errorMessages.push('Password is required.');
        } else if (!passwordPattern.test(password)) {
            valid = false;
            errorMessages.push('Password must be at least 8 characters long, including a combination of uppercase and lowercase letters, numbers, and symbols.');
        }

        // Validate confirm password
        if (confirmPassword === '') {
            valid = false;
            errorMessages.push('Confirm Password is required.');
        } else if (password !== confirmPassword) {
            valid = false;
            errorMessages.push('Passwords do not match.');
        }

        // Validate terms and conditions
        const termsAndConditions = document.getElementById('termsAndConditions').checked;
        if (!termsAndConditions) {
            valid = false;
            errorMessages.push('You must agree to the Terms and Conditions.');
        }

        // Show error or success messages
        if (!valid) {
            errorAlert.style.display = 'block';
            errorMessage.innerHTML = errorMessages.map(message => `<p>${message}</p>`).join('');
        } else {
            errorAlert.style.display = 'none';
            successAlert.classList.remove('d-none');
            form.reset();
        }
    });
});



// first home section

$(document).ready(function(){
  $('#imageCarousel').carousel({
      interval: 2000 // 2 seconds
  });

  $('#imageCarousel').on('slide.bs.carousel', function () {
      $('.carousel-caption').removeClass('animated').css('transform', 'translateX(-100%)');
  });

  $('#imageCarousel').on('slid.bs.carousel', function () {
      $('.carousel-caption').addClass('animated').css('transform', 'translateX(0)');
  });
});













