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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const customData =
  {
    id: '123',
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
              <TableCell className={styles.title}>{customData.id}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="date" disabled="date" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="date" label={customData.date} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="hour" disabled="hour" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="hour" label={customData.hour} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="table" disabled="table" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="table" label={customData.table} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="duration" disabled="duration" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="duration" label={customData.duration} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="people" disabled="people" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="people" label={customData.ppl} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="starters" disabled="starters" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="starters" label={customData.starters} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="phone" disabled="phone" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="phone" label={customData.phone} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="e-mail" disabled="e-mail" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="mail" label={customData.mail} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button type="submit" fullWidth variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/:id`}>edit & submitt</Button>
      </TableContainer>
    </Paper>
  );
  
};

BookedTab.propTypes = {
  tableId: PropTypes.string,
};

export default BookedTab;