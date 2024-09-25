/* eslint-disable no-undef */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setErrors((prevErrors) => ({
    ...prevErrors,
    email: !emailRegex.test(email),
  }));
};

export const validatePhone = (name, phone) => {
  const phoneRegex = /^\d{10,}$/;
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: !phoneRegex.test(phone),
  }));
};

export const validateName = (name, value) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: !nameRegex.test(value),
  }));
};

export const validateDni = (dni) => {
  const dniRegex = /^\d{7,}$/;
  setErrors((prevErrors) => ({
    ...prevErrors,
    pickingUpPersonDni: !dniRegex.test(dni),
  }));
};
