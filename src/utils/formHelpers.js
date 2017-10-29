import validate from './validation';
import { renderTextField } from './renderHelpers';

export const initializeForm =  (comp, valuesConfig) => {
  const state = {};
  comp.values = [];
  comp.toValidate = {};
  Object.keys(valuesConfig).map((name) => {
    const el = valuesConfig[name];
    comp.values.push(name);
    state[name] = (comp.props.data && comp.props.data[name]) || el.default;
    if (el.validate) {
      comp.toValidate[name] = el.validate;
    }
  });

  // Validation with submit callback.
  comp.handleSubmit = () => { validate(comp, comp.submit); };

  // Initialize state of module.
  comp.setState({
    errors: {},
    ...state,
  });
};
