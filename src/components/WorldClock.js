import React, { Component } from 'react';
import Clock from 'react-live-clock';
import TimeZoneSelect from './TimeZoneSelect';

class WorldClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'HH:mm:ss',
      ticking: true,
      timezone: 'Europe/London',
    }
  }

  updateTimeZone = (event) => this.setState({ timezone: event.target.value })

  render() {
    const { format, ticking, timezone } = this.state;
    return (
      <div className="App">
        <div className="nav-bar">
          <TimeZoneSelect currentTimeZone={timezone} onChange={this.updateTimeZone} />
        </div>
        <Clock format={format} ticking={ticking} timezone={timezone} />
      </div>
    );
  }
}

export default WorldClock;
