const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');


    function validateName() {
      const name = nameInput.value.trim();
      const nameError = document.getElementById('nameError');
      
      if (name.length < 2) {
        nameInput.classList.add('error');
        nameError.classList.add('show');
        return false;
      } else {
        nameInput.classList.remove('error');
        nameError.classList.remove('show');
        return true;
      }
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(email)) {
        emailInput.classList.add('error');
        emailError.classList.add('show');
        return false;
      } else {
        emailInput.classList.remove('error');
        emailError.classList.remove('show');
        return true;
      }
    }

    function validateMessage() {
      const message = messageInput.value.trim();
      const messageError = document.getElementById('messageError');
      
      if (message.length < 10) {
        messageInput.classList.add('error');
        messageError.classList.add('show');
        return false;
      } else {
        messageInput.classList.remove('error');
        messageError.classList.remove('show');
        return true;
      }
    }


    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);


    nameInput.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        validateName();
      }
    });

    emailInput.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        validateEmail();
      }
    });

    messageInput.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        validateMessage();
      }
    });
    form.addEventListener('submit', function(e) {
        e.preventDefault();
      
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();
      
      if (isNameValid && isEmailValid && isMessageValid) {

        successMessage.classList.add('show');
        console.log('Form submitted:', {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value
        });
        form.reset();
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 5000);
      } else {
        const firstError = document.querySelector('.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });