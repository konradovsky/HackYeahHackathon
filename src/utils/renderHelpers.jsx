import React from 'react';
import TextField from 'material-ui/TextField';

const inputStyle = {
  floatingLabelFocusStyle: { fontWeight: 400 },
  floatingLabelShrinkStyle: { fontWeight: 700 },
  style: { fontWeight: 400 },
};

export const renderTextField = (comp, label, stateName, extend = {}) => {
  const { errors } = comp.state;
  const attrs = {
    floatingLabelText: label,
    value: comp.state[stateName],
    onChange: (e) => { comp.setState({ [stateName]: e.target.value }); },
    errorText: (errors[stateName]),
    ...inputStyle,
    ...extend,
  };
  return <TextField {...attrs} />;
};
