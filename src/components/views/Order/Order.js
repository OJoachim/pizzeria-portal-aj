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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const customData =
  {
    orderId: 123,
    table: 1,
    order: 'pizza',
    options: ['salami', 'cheese', 'tomato', 'oregano'],
    amount: 2,
    price: '$150',
  };

const orderOptions = customData.options.join(', ' );

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
              <TableCell className={styles.title}>{customData.orderId}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                <TextField fullWidth margin="normal" label="order" disabled="order" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="order" label={customData.order} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="options" disabled="options" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" label={orderOptions}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="amount" disabled="amount" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="customData.amount" label={customData.amount} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField fullWidth margin="normal" label="price" disabled="price" />
              </TableCell>
              <TableCell>
                <TextField fullWidth margin="normal" id="customData.price" label={customData.price} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button type="submit" fullWidth variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/:id`}>edit & submitt</Button>
      </TableContainer>
    </Paper>
  );
};

Order.propTypes = {
  orderId: PropTypes.string,
};

export default Order;