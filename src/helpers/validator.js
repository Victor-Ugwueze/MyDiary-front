const validator = {
  errors: [],
  requestsInput: null,
  trimSpaces: (input) => {
    const validType = validator.requestsInput[input];
    return validType ? validType.replace(/^\s+|\s+$/g, '') : '';
  },

  validate: (req, inputs) => {
    validator.requestsInput = req;
    validator.errors = [];
    Object.getOwnPropertyNames(validator).filter((name) => {
      if (inputs.indexOf(name) !== -1) {
        if (name === 'password') {
          validator[name]('');
        } else {
          validator[name]('');
        }
      }
    });
    return validator.errors;
  },

  // Validate email
  email: () => {
    const email = validator.trimSpaces('email');
    if (email === '') {
      const error = 'Email is required';
      validator.errors.push({ message: error });
    } else {
      const regex = /^[\w.]+\w+@\w+\.com(\.(ru|cn))?$/;
      if (!regex.test(email)) {
        const error = 'Please enter a valid email address.';
        validator.errors.push({ message: error });
      }
    }
  },

  // Validate phone
  phone: () => {
    const phone = validator.trimSpaces('phone');
    const regex = /^[0]\d{10}$/gm;
    if (phone === '') {
      const error = 'Phone number is required';
      validator.errors.push({ message: error });
    } else if (!regex.test(phone)) {
      const error = 'please enter a valid phone number';
      validator.errors.push({ message: error });
    }
  },

  password: () => {
    const password = validator.trimSpaces('password');
    const confirmPassword = validator.trimSpaces('confirmPassword');
    if (password === '') {
      const error = 'Password is required';
      validator.errors.push({ message: error });
    } else if (password.length < 6) {
      const error = 'Password lenght should be greater than 6 and less than 12';
      validator.errors.push({ message: error });
    } else if (confirmPassword && password !== confirmPassword) {
      const error = 'Password do not match';
      validator.errors.push({ message: error });
    }
  },

  name: () => {
    const firsname = validator.trimSpaces('firstName');
    const lastname = validator.trimSpaces('lastName');
    if (firsname.length < 2) {
      const error = 'firsname must should be more than five characters';
      validator.errors.push({ message: error });
    }
    if (lastname.length < 2) {
      const error = 'lastname must be should be more than two characters';
      validator.errors.push({ message: error });
    }
  },

  entry: () => {
    const title = validator.trimSpaces('title');
    const body = validator.trimSpaces('body');

    if (title.length < 15) {
      validator.errors.push({ message: "title can't be less than 15 characters" });
    }
    if (body === '') {
      validator.errors.push({ message: 'body cannot be empty' });
    }
  },
};

export default validator;
