import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const timezoneList = require('timezone-list').getTimezones();

class TimeZoneSelect extends Component {
  render() {
    const { currentTimeZone, onChange } = this.props;
    return (
      <TextField
        id="select-timezone"
        select
        label="Select"
        className={''}
        value={currentTimeZone}
        onChange={(event) => onChange(event)}
        SelectProps={{}}
        helperText="Please select your timezone"
        margin="normal"
      >
        {timezoneList.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    )
  }
}

TimeZoneSelect.propTypes = {
  currentTimeZone: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TimeZoneSelect;
