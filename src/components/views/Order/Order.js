import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const customData =
  {
    orderId: 123,
    table: 1,
    order: 'pizza',
    options: ['salami', 'cheese', 'tomatosouse', 'oregano'],
    amount: 2,
    salad: ['cucumber', 'feta', 'tomatoes'],
    price: '$150',
  };

const Order = ({ orderId }) => {
  
  const [table, setTable] = React.useState('');
  const handleChangeTable = (event) => {
    setTable(event.target.value);
    console.log('table', table);
  };

  const [amountPizza, setAmountPizza] = React.useState('');
  const handleChangeAmountPizza = (event) => {
    setAmountPizza(event.target.value);
    console.log(amountPizza);
  };

  const [amountSalad, setAmountSalad] = React.useState('');
  const handleChangeAmountSalad = (event) => {
    setAmountSalad(event.target.value);
    console.log(amountSalad);
  };

  const [state, setState] = React.useState(
    { cheese: false, cucumber: true, tomatoes: false, feta: false, mushrooms: false, oregano: false, tomatosouse: true, salami: true,
    }
  );

  const handleChangePizza = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChangeSalad = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const { cheese, cucumber, tomatoes, tomatosouse, feta, mushrooms, oregano, salami } = state;
  
  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
        <RestaurantMenuOutlinedIcon />
      </Avatar>
      <Typography className={styles.orderview} variant="h5" component="h3" >
        Order view
      </Typography>
      <form className={styles.form} noValidate component={Paper}>
        <Grid className={styles.grid}>
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="id" label="Order id" name="id" autoComplete="id" autoFocus size="small" defaultValue={customData.orderId} />
        </Grid>
        <Grid className={styles.grid}>
          <FormControl className={styles.textField} size="small" margin="normal" variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Table</InputLabel>
            <Select className={styles.select} id="table" defaultValue={customData.table} onChange={handleChangeTable} label="Table" variant="outlined"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={styles.grid}>
          <TextField className={styles.dateform} id='order' label='order' type='text' variant="outlined" defaultValue={customData.order} />
        </Grid>
        <Grid container justify="space-around">
          <FormControl size="small" margin="normal" component="fieldset" defaultValue={customData.order} >
            <FormLabel component="legend">Pizza with options</FormLabel>
            <FormGroup className={styles.formgroup} >
              <FormControlLabel
                control={<Checkbox checked={cheese} onChange={handleChangePizza} color="primary" name="cheese" />}
                label="Cheese"
                defaultValue={customData.order}
              />
              <FormControlLabel
                control={<Checkbox checked={tomatosouse} onChange={handleChangePizza} color="primary" name="tomatosouse" />}
                label="Tomato souse"
                defaultValue={customData.order}
              />
              <FormControlLabel
                control={<Checkbox checked={mushrooms} onChange={handleChangePizza} color="primary" name="mushrooms" defaultValue={customData.options} />}
                label="Mushrooms"
                defaultValue={customData.order}
              />
              <FormControlLabel
                control={<Checkbox checked={salami} onChange={handleChangePizza} color="primary" name="salami" />}
                label="Salami"
                defaultValue={customData.order}
              />
              <FormControlLabel
                control={<Checkbox checked={oregano} onChange={handleChangePizza} color="primary" name="oregano" />}
                label="Oregano"
                defaultValue={customData.order}
              />
            </FormGroup>
          </FormControl>
          <FormControl size="small" margin="normal" variant="outlined" className={styles.select} >
            <InputLabel>Pizza amount</InputLabel>
            <Select
              id="amount"
              defaultValue={customData.amount}
              onChange={handleChangeAmountPizza}
              label="Amount of pizza"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container justify="space-around">
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Salad with options</FormLabel>
            <FormGroup className={styles.formgroup}>
              <FormControlLabel
                control={<Checkbox checked={cucumber} onChange={handleChangeSalad} color="primary" name="cucumber" />}
                label="Cucumber"
                defaultValue={customData.salad}
              />
              <FormControlLabel
                control={<Checkbox checked={tomatoes} onChange={handleChangeSalad} color="primary" name="tomatoes" />}
                label="Tomatoes"
                defaultValue={customData.salad}
              />
              <FormControlLabel
                control={<Checkbox checked={feta} onChange={handleChangeSalad} color="primary" name="feta" />}
                label="Feta"
                defaultValue={customData.salad}
              />
            </FormGroup>
          </FormControl>
          <FormControl size="small" margin="normal" variant="outlined" className={styles.select} >
            <InputLabel>Salad amount</InputLabel>
            <Select
              id="amount"
              defaultValue={customData.amount}
              onChange={handleChangeAmountSalad}
              label="Amount of salad"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={styles.grid}>
          <TextareaAutosize aria-label="empty textarea" placeholder="comment to order" className={styles.comment} variant="outlined" fullWidth margin="normal" id="comment"  name="comment" autoComplete="comment" autoFocus size="small" />
        </Grid>
        <Grid className={styles.grid}>
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="price" label="Price" name="price" autoComplete="price" autoFocus size="small" defaultValue={customData.price} />
        </Grid>
        <Button className={styles.addbtn} type="submit" fullWidth variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>edit & submit</Button>
      </form>
    </Paper>
  );
};

Order.propTypes = {
  orderId: PropTypes.string,
};

export default Order;