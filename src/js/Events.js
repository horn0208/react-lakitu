let React = require('react');

/* eslint-disable */
let Event = require('./Event');
/* eslint-enable */

let Events = React.createClass({
  render: function() {
    let eventNodes = this.props.events.map(function(event) {
      // TODO: Figure this out.  It's hard coded to CST right now
      // We should use UTC
      let timestamp = event.timestamp + '-0400';
      return (
          <Event key={event.key}
                 door={event.door}
                 eventType={event.eventType}
                 firstName={event.forename}
                 lastName={event.surname}
                 timestamp={timestamp} />
      );
    });
    return (
      <div id="events">
        <h2>
          <i className="medium material-icons left">today</i>
          Events
        </h2>
        <ul className="events collection">{eventNodes}</ul>
      </div>
    );
  }
});

module.exports = Events;
