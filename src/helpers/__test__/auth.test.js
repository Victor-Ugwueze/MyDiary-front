// auth helper
import jwt from 'jsonwebtoken';
import auth from '../auth';
import validator from '../validator';


describe('Auth helper test', () => {
  it('should decode token and return true token', () => {
    const token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '1hr' });
    const verifiedToken = auth.validateToken(token);
    expect(verifiedToken).toBe(true);
  });

  it('should decode token and return invalid token', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCjE1NDM0Mzc1NTIsImV4cCI6MTU0MzQ0MTE1Mn0.nfD6WF36KGN2jtyi_kvxzZsiEPhKxrXZu8ZFDnlogoY';
    const verifiedToken = auth.validateToken(token);
    expect(verifiedToken).toBe(false);
  });
});

describe('Input Validator test', () => {
  it('should return errors array to be empty', () => {
    const validateErrors = validator.validate({
      email: 'victor@gmail.com',
      phone: '08108893403',
      firstname: 'Victor',
    }, [
      'email'
    ]);
    expect(validateErrors.length).toBe(0);
  });

  it('should return errors array to include email is required when email is empty', () => {
    const validateErrors = validator.validate({ email: '' }, [
      'email'
    ]);
    expect(validateErrors[0].message).toBe('Email is required');
  });

  it('should return invalid email', () => {
    const validateErrors = validator.validate({ email: 'vuoh@gmail' }, [
      'email'
    ]);
    expect(validateErrors[0].message).toBe('Please enter a valid email address.');
  });

  it('should return phonenumber is required', () => {
    const validateErrors = validator.validate({ phone: '' }, [
      'phone'
    ]);
    expect(validateErrors[0].message).toBe('Phone number is required');
  });

  it('should return phonenumber is required', () => {
    const validateErrors = validator.validate({ phone: 'fdvev344rg' }, [
      'phone'
    ]);
    expect(validateErrors[0].message).toBe('please enter a valid phone number');
  });

  it('should return error in name', () => {
    const validateErrors = validator.validate({ firstname: '', lastname: '', username: '' }, [
      'name'
    ]);
    expect(validateErrors[0].message).toBe('firsname should be more than five characters');
  });

  it('should return password is required', () => {
    const validateErrors = validator.validate({ password: '' }, [
      'password'
    ]);
    expect(validateErrors[0].message).toBe('Password is required');
  });

  it('should return password length error', () => {
    const validateErrors = validator.validate({ password: 'bnb5' }, [
      'password'
    ]);
    expect(validateErrors[0].message).toBe('Password lenght should be greater than 6 and less than 12');
  });

  it('should return password mismatch', () => {
    const validateErrors = validator.validate({ password: 'bnb566666', confirmPassword: 'ccdd' }, [
      'password'
    ]);
    expect(validateErrors[0].message).toBe('Password do not match');
  });

  it('should return tittle tile length error', () => {
    const validateErrors = validator.validate({ title: 'tit', body: 'ccdd' }, [
      'entry'
    ]);
    expect(validateErrors[0].message).toBe("title can't be less than 15 characters");
  });


  it('should return entry body missing error', () => {
    const validateErrors = validator.validate({ title: 'tit', body: '' }, [
      'entry'
    ]);
    expect(validateErrors[1].message).toBe('body cannot be empty');
    expect(validateErrors[0].message).toBe("title can't be less than 15 characters");
  });

  it('should not return entry input errors message', () => {
    const validateErrors = validator.validate({ title: 'the title of my sermmon today is', body: 'the body' }, [
      'entry'
    ]);
    expect(validateErrors.length).toBe(0);
  });
});
