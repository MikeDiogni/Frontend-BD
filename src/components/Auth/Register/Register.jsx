import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Registration successful:', formData);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({
        ...errors,
        server: 'Registration failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Create Account</h2>
      
      <div className='inscription'>
        <img src="/register.png" alt="image de connexion" />
      </div>

      {errors.server && (
        <div className={styles.serverError}>{errors.server}</div>
      )}

      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`${styles.input} ${errors.firstName ? styles.errorInput : ''}`}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`${styles.input} ${errors.lastName ? styles.errorInput : ''}`}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className={styles.errorMessage}>{errors.lastName}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`${styles.input} ${errors.password ? styles.errorInput : ''}`}
            placeholder="Create a password (min 6 characters)"
          />
          {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`${styles.input} ${errors.confirmPassword ? styles.errorInput : ''}`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <span className={styles.errorMessage}>{errors.confirmPassword}</span>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
        <div className={styles.loginLink}>
          <span>vous avez deja un compte? </span>
          <a href="/login" className={styles.link}>Se connecter</a>
        </div>
      </form>
    </div>
  );
};

export default Register;