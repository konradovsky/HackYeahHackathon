import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import valuesConfig from './valuesConfig';
import { updateMyOffers } from '../../../actions/myOffers';
import { initializeForm } from '../../../utils/formHelpers';
import { renderTextField, inputStyle } from '../../../utils/renderHelpers';
import { Form, StyledRaisedButton } from './AddOffer_styles';

class AddOffer extends Component {
  componentWillMount() {
    initializeForm(this, valuesConfig);
  }

  submit = (values) => {
    console.log(values);
    updateMyOffers(values);
  }

  render() {
    return (
      <Form>
        {renderTextField(this, 'Title', 'title', { fullWidth: true })}
        {renderTextField(this, 'Description', 'description', { multilline: true, rows: 2, rowsMax: 4, fullWidth: true })}
        <DatePicker
          hintText="Date of start"
          value={this.state.date}
          onChange={(e, date) => { this.setState({ date }); }}
          {...inputStyle}
        />
        <TimePicker
          hintText="Time of start"
          value={this.state.time}
          onChange={(e, time) => { this.setState({ time }); }}
          {...inputStyle}
        />
        {renderTextField(this, 'Hours', 'hours')}
        <SelectField
          floatingLabelText="Type of the offert"
          value={this.state.type}
          onChange={(event, index, value) => this.setState({ type: value })}
          {...inputStyle}
        >
          <MenuItem value="Babysitting" primaryText="Babysitting" />
          <MenuItem value="Blood donation" primaryText="Blood donation" />
          <MenuItem value="Charity events" primaryText="Charity events" />
          <MenuItem value="Care for the elderls" primaryText="Care for the elderls" />
          <MenuItem value="Housekeeping" primaryText="Housekeeping" />
          <MenuItem value="Pet care" primaryText="Pet care" />
          <MenuItem value="Care for the disabled" primaryText="Care for the disabled" />
        </SelectField>
        <StyledRaisedButton label="Add offer" primary onClick={this.handleSubmit} />
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMyOffers }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddOffer);
