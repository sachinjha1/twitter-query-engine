const stringSizeValidator = [(val) => {
  return (val.length >= 0 && val.length <= 50);
}, '{PATH} must be between 1 & 50 characters long'];

export default stringSizeValidator;
