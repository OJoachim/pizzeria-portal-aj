import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedTab.module.scss';

const BookedTab = ({tableId}) => (
  <div className={styles.component}>
    <h2>BookedTab view</h2>
    {tableId}
  </div>
);

BookedTab.propTypes = {
  tableId: PropTypes.string,
};

export default BookedTab;