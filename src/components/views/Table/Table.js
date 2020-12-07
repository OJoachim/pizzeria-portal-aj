import React from 'react';
import styles from './Table.module.scss';
import { Link } from 'react-router-dom';

const Table = () => (
  <div className={styles.component}>
    <h2>Table view</h2>
    <Link to={`${process.env.PUBLIC_URL}/table/booking/new`} activeClassName='active'>New booked table </Link>
    <Link to={`${process.env.PUBLIC_URL}/table/booking/123abc`} activeClassName='active'>Booked table 123abc </Link>
    <Link to={`${process.env.PUBLIC_URL}/table/event/new`} activeClassName='active'>New event </Link>
    <Link to={`${process.env.PUBLIC_URL}/table/event/123abc`} activeClassName='active'>Event 123abc</Link>
  </div>
);

export default Table;