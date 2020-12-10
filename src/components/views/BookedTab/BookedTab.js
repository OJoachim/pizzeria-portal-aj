import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedTab.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';

const customData =
  {
    date: '2020-12-23',
    hour: '17:00',
    table: '1',
    duration: '3',
    ppl: '7',
    starters: ['water'],
    phone: '888888888',
    mail: 'test@onet.pl',
  };


const BookedTab = ({tableId}) => {
  
  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/tables`}>
        <EventOutlinedIcon />
      </Avatar>
      <Typography className={styles.tabview} variant="h5" component="h3" >
        Reservation view
      </Typography>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Reservation id</TableCell>
              <TableCell className={styles.title}>{tableId}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>date</TableCell>
              <TableCell>{customData.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>hour</TableCell>
              <TableCell>{customData.hour}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>table</TableCell>
              <TableCell>{customData.table}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>duration</TableCell>
              <TableCell>{customData.duration}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>people</TableCell>
              <TableCell>{customData.ppl}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>starters</TableCell>
              <TableCell>{customData.starters}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>phone</TableCell>
              <TableCell>{customData.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>e-mail</TableCell>
              <TableCell>{customData.mail}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
  
};

BookedTab.propTypes = {
  tableId: PropTypes.string,
};

export default BookedTab;