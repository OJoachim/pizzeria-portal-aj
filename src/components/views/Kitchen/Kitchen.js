import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import SwitchChanger from '@material-ui/core/Switch';

const localContent = [
  {
    id: 1,
    table: 3,
    order: 'pizza',
    options: ['cheese', 'salami', 'tomato', 'oregano'],
    amount: 3,
    status: 'in preparation',
  },
  {
    id: 2,
    table: 2,
    order: 'salad',
    options: ['cucumber', 'tomatoes'],
    amount: 2,
    status: 'done',
  }, 
  {
    id: 3,
    table: 1,
    order: 'pizza',
    options: ['cheese', 'tomato', 'mushrooms'],
    amount: 7,
    status: 'done',
  },
];

const remoteContent = [
  {
    id: 1,
    orderId: '123abc',
    order: 'pizza',
    options: ['cheese', 'salami', 'tomato', 'oregano'],
    amount: 1,
    status: 'in delivery',
  },
  {
    id: 2,
    orderId: '789xyz',
    order: 'pizza',
    options: ['cheese', 'tomato', 'mushrooms'],
    amount: 2,
    status: 'in preparation',
  },
];

const Kitchen = () => {
  
  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar}>
        <RestaurantOutlinedIcon />
      </Avatar>
      <Typography className={styles.kitchenview} variant="h5" component="h3" >
        kitchen
      </Typography>
      <h3 className={styles.subtitle}>Local orders</h3>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>ID</TableCell>
              <TableCell className={styles.titletable}>Table</TableCell>
              <TableCell className={styles.titletable}>Order</TableCell>
              <TableCell className={styles.titletable}>Options</TableCell>
              <TableCell className={styles.titletable}>Amount</TableCell>
              <TableCell className={styles.titletable}>Status</TableCell>
              <TableCell className={styles.titletable}>Action: Yes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {localContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.table}</TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>
                  <div>
                    {row.options.map(option => (
                      <p key={option}>{option}</p>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <SwitchChanger />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3 className={styles.subtitle}>Remote orders</h3>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.titletable}>ID</TableCell>
              <TableCell className={styles.titletable}>Order id</TableCell>
              <TableCell className={styles.titletable}>Order</TableCell>
              <TableCell className={styles.titletable}>Options</TableCell>
              <TableCell className={styles.titletable}>Amount</TableCell>
              <TableCell className={styles.titletable}>Status</TableCell>
              <TableCell className={styles.titletable}>Action: Yes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {remoteContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.orderId}</TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>
                  <div>
                    {row.options.map(option => (
                      <p key={option}>{option}</p>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <SwitchChanger />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Kitchen;