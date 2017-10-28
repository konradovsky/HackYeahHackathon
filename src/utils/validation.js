import pick from 'lodash/pick';
import keys from 'lodash/keys';

const hasAnyValue = (obj) => {
  for (let key in obj) {
    if (obj[key] !== null)
      return true;
    }
  return false;
};

const validation = {
  required: (value, message) => {
    if (!value || !value.toString().trim()) {
      return (typeof message === 'string')
        ? message
        : 'To pole jest wymagane';
    }
    return null;
  },
  minLength: (value, length) => {
    if (value.length < length) {
      return `Wartość w tym polu musi zawierać co najmniej ${length} znaków`;
    }
    return null;
  },
  noEmptyArr: (values) => {
    if (!values || values.length === 0) {
      return 'Musisz dodać co najmniej jeden element';
    }
    return null;
  },
  naturalNumber: (value) => {
    const naturalReg = /^(0|([1-9]\d*))$/;
    if (!naturalReg.test(value)) {
      return 'Wartość w tym polu musi być liczbą naturalną';
    }
    return null;
  },
  equalPasswords: (value, fieldToCompare, comp) => {
    if (value !== comp.state[fieldToCompare]) {
      return 'Oba hasła muszą być identyczne';
    }
    return null;
  },
  link: (value) => {
    const isLinkRegExp = /^(?:ftp|http|https):\/\/(?:[\w\.\-\+]+:{0,1}[\w\.\-\+]*@)?(?:[a-z0-9\-\.]+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+)|\?(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+))?$/;
    if (value && !value.match(isLinkRegExp)) {
      return 'Błędny format linku';
    }
    return null;
  },
};

// export default (validate, values, haveErrors, noErrors) => {
export default (comp, successCallback) => {
  const toValidate = pick(comp.state, keys(comp.toValidate));
  const errors = {};
  Object.keys(comp.toValidate).map((key) => {
    errors[key] = null;
    Object.keys(comp.toValidate[key]).map((innerKey) => {
      if (!errors[key]) {
        errors[key] = validation[innerKey](toValidate[key], comp.toValidate[key][innerKey], comp);
      }
    });
  });
  if (hasAnyValue(errors)) {
    comp.setState({ errors });
  } else {
    const valuesToSubmit = pick(comp.state, comp.values);
    successCallback(valuesToSubmit);
  }
};
