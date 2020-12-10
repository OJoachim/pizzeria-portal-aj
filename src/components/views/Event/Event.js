import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
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
    hour: '18:00',
    table: '3',
    duration: '4',
    ppl: '6',
    starters: ['water'],
    phone: '888888888',
    mail: 'test@onet.pl',
  };

const Event = ({eventId}) => {
  
  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/tables`}>
        <SupervisedUserCircleIcon />
      </Avatar>
      <Typography className={styles.eventview} variant="h5" component="h3" >
        Event view
      </Typography>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Event id</TableCell>
              <TableCell className={styles.title}>{eventId}</TableCell>
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

Event.propTypes = {
  eventId: PropTypes.string,
};

export default Event;