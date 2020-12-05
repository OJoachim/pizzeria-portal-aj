import React from 'react';
import PropTypes from 'prop-types';
//import styles from './Event.module.scss';

const Event = (eventId) => (
  <div /*className={styles.component}*/>
    <h2>Event view</h2>
    {eventId}
  </div>
);

Event.propTypes = {
  eventId: PropTypes.string,
};

export default Event;