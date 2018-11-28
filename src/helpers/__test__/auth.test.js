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
});
