export default {
  name: {
    default: undefined,
    validate: {
      required: true,
    },
  },
  personname: {
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
  nip: {
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
