import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
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
    table: 1,
    order: 'pizza',
    options: ['salami', 'cheese', 'tomato', 'oregano'],
    amount: 2,
    price: '$150',
  };

const Order = ({ orderId }) => {

  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
        <RestaurantMenuOutlinedIcon />
      </Avatar>
      <Typography className={styles.orderview} variant="h5" component="h3" >
        Order view
      </Typography>
      <TableContainer className={styles.table} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Order id</TableCell>
              <TableCell className={styles.title}>{orderId}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>table</TableCell>
              <TableCell>{customData.table}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>order</TableCell>
              <TableCell>{customData.order}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>options</TableCell>
              <TableCell>
                <div>
                  {customData.options.map(option => (
                    <p key={option}>{option}</p>
                  ))}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>amount</TableCell>
              <TableCell>{customData.amount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>price</TableCell>
              <TableCell>{customData.price}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
  
  Order.propTypes = {
    orderId: PropTypes.string,
  };
};
export default Order;