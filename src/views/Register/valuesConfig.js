export default {
  firstname: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  lastname: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  address: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  zipcode: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  city: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  phone: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  email: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  pesel: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  password: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  password2: {
    default: undefined,
    validate: {
      required: true,
      equalPasswords: 'password',
    },
  },
};
