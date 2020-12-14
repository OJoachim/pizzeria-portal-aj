import React from 'react';
import styles from './Home.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const demoContent = [{ local: 10, remote: 20 }];
const demoContentListReservation = [{ reservation: 'reservation1' }, { reservation: 'reservation2' }, { reservation: 'reservation3' }];
const demoContentListEvent = [{ event: 'event1' }, { event: 'event2' }, { event: 'event3' }];

const Home = () => (
  <Paper className={styles.component}>
    <h2 className={styles.title}>managent system</h2>
    <h3 className={styles.subtitle}>Number of orders today</h3>
    
    <TableContainer className={styles.table} component={Paper}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.tablehead}>
            <TableCell className={styles.titletable}>Remote orders</TableCell>
            <TableCell className={styles.titletable}>Local orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.table}>
              <TableCell component="th" scope="row">
                {row.remote}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.local}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <h3 className={styles.subtitle}>List of reservations and events, today</h3>
    <Grid container justify="space-between">
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>Events</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContentListEvent.map(row => (
              <TableRow key={row.table}>
                <TableCell component="th" scope="row">
                  {row.event && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/event/${row.event}`}>
                      {row.event}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>Reservations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContentListReservation.map(row => (
              <TableRow key={row.table}>
                <TableCell component="th" scope="row">
                  {row.reservation && (
                    <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.reservation}`}>
                      {row.reservation}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    
    
  </Paper>
);

export default Home;