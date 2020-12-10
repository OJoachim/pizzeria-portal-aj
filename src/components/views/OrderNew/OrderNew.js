import React from 'react';
import styles from './OrderNew.module.scss';
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
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';





const OrderNew = () => {
  
  const [table, setTable] = React.useState('');
  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  const [amountPizza, setAmountPizza] = React.useState('');
  const handleChangeAmountPizza = (event) => {
    setAmountPizza(event.target.value);
  };

  const [amountSalad, setAmountSalad] = React.useState('');
  const handleChangeAmountSalad = (event) => {
    setAmountSalad(event.target.value);
  };

  const [state, setState] = React.useState(
    { cheese: false, cucumber: false, tomato: false, feta: false, mushrooms: false, oregano: false,  tomatoes: false, tomatosouse: false, salami: false,
    }
  );

  const handleChangePizza = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChangeSalad = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const { cheese, cucumber, tomato, tomatosouse, feta, mushrooms, oregano, tomatoes, salami } = state;
  
  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
        <RestaurantMenuOutlinedIcon />
      </Avatar>
      <Typography className={styles.neworderview} variant="h5" component="h3" >
        Add new order
      </Typography>
      <form className={styles.form} noValidate>
        <Grid item xs={6}>
          <TextField className={styles.textField}
            variant="outlined"
            fullWidth
            margin="normal"
            id="id"
            label="Order id"
            name="id"
            autoComplete="id"
            autoFocus
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl size="small" margin="normal" variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Table</InputLabel>
            <Select className={styles.select}
              labelId="table"
              id="table"
              value={table}
              onChange={handleChangeTable}
              label="Table"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container justify="space-around">
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Pizza with options</FormLabel>
            <FormGroup className={styles.formgroup}>
              <FormControlLabel
                control={<Checkbox checked={cheese} onChange={handleChangePizza} name="cheese" />}
                label="Cheese"
              />
              <FormControlLabel
                control={<Checkbox checked={mushrooms} onChange={handleChangePizza} name="mushrooms" />}
                label="Mushrooms"
              />
              <FormControlLabel
                control={<Checkbox checked={tomatosouse} onChange={handleChangePizza} name="tomato souse" />}
                label="Tomato souse"
              />
              <FormControlLabel
                control={<Checkbox checked={mushrooms} onChange={handleChangePizza} name="mushrooms" />}
                label="Mushrooms"
              />
              <FormControlLabel
                control={<Checkbox checked={salami} onChange={handleChangePizza} name="salami" />}
                label="Salami"
              />
              <FormControlLabel
                control={<Checkbox checked={oregano} onChange={handleChangePizza} name="oregano" />}
                label="Oregano"
              />
            </FormGroup>
          </FormControl>
          <FormControl size="small" margin="normal" variant="outlined" className={styles.select} >
            <InputLabel id="demo-simple-select-outlined-label">Amount</InputLabel>
            <Select
              labelId="amountPizza"
              id="amountPizza"
              value={amountPizza}
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
                control={<Checkbox checked={cucumber} onChange={handleChangeSalad} name="cucumber" />}
                label="Cucumber"
              />
              <FormControlLabel
                control={<Checkbox checked={tomatoes} onChange={handleChangeSalad} name="tomatoes" />}
                label="Tomatoes"
              />
              <FormControlLabel
                control={<Checkbox checked={feta} onChange={handleChangeSalad} name="feta" />}
                label="Feta"
              />
            </FormGroup>
          </FormControl>
          <FormControl size="small" margin="normal" variant="outlined" className={styles.select} >
            <InputLabel id="demo-simple-select-outlined-label" >Amount</InputLabel>
            <Select
              labelId="amountSalad"
              id="amountSalad"
              value={amountSalad}
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
        <Button type="submit" fullWidth variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
          Add order
        </Button>
      </form>
    </Paper >
  ); 
};

export default OrderNew;