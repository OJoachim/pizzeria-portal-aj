import React from 'react';
import styles from './BookedTabNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const BookedTabNew = () => {
  
  let day = new Date();
  let today = day.toISOString().substr(0,10);
  
  const [date, setDate] = React.useState(today);
  const changeDate = date => {
    setDate(date);
    console.log(date);
  };
  
  const [table, setTable] = React.useState('');
  const handleChangeTable = (booking) => {
    setTable(booking.target.value);
  };
  
  const [duration, setDuration] = React.useState('');
  const handleChangeDuration = (booking) => {
    setDuration(booking.target.value);
  };
  
  const [state, setState] = React.useState({
    water: true,
    bread: false,
  });
  const handleChangeStarter = (booking) => {
    setState({ ...state, [booking.target.name]: booking.target.checked });
  };
  
  const { water, bread } = state;

  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar} component={Link} to={`${process.env.PUBLIC_URL}/tables`}>
        <EventOutlinedIcon />
      </Avatar>
      <Typography className={styles.bookingview} variant="h5" component="h3" >
        Add new table reservation
      </Typography>
      <form className={styles.form} noValidate>
        <Grid item xs={6}>
          <TextField className={styles.dateform} id='date' defaultValue={date} label='CHOOSE DATE:' type='date' onChange={changeDate} InputLabelProps={{ shrink: true}} />
        </Grid>
        <Grid item xs={12}>
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="id" label="Booking id" name="id" autoComplete="id" autoFocus size="small" />
          <FormControl className={styles.textField} size="small" margin="normal" variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Table</InputLabel>
            <Select className={styles.select} labelId="table" id="table" value={table} onChange={handleChangeTable} label="Table"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={styles.textField} size="small" margin="normal" variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Duration</InputLabel>
            <Select className={styles.select} labelId="duration" id="duration" value={duration} onChange={handleChangeDuration} label="Duration"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
          <TextField className={styles.textField} margin="normal" size="small" id="outlined-number" label="People" type="number" InputLabelProps={{ shrink: true }} variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Starters</FormLabel>
            <FormGroup className={styles.starters}>
              <FormControlLabel
                control={<Checkbox color="primary" checked={water} onChange={handleChangeStarter} name="water" />}
                label="Water"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bread} onChange={handleChangeStarter} name="bread" />}
                label="Bread"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="phone" label="Phone" name="phone" autoComplete="phone" autoFocus size="small"
          />
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="mail" label="E-mail" name="mail" autoComplete="mail" autoFocus size="small"
          />
        </Grid>
        <Button className={styles.addbtn} type="submit" fullWidth variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables`}>Add table booking</Button>
      </form>
    </Paper>
  );
};

export default BookedTabNew;
