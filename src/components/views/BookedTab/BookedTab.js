import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedTab.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
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
  
  let day = new Date();
  let today = day.toISOString().substr(0,10);
  
  const [date, setDate] = React.useState(today);
  const changeDate = date => {
    setDate(date);
    console.log('date', date);
  };
  
  const [table, setTable] = React.useState('');
  const handleChangeTable = (booking) => {
    setTable(booking.target.value);
    console.log('table', table);
  };
  
  const [duration, setDuration] = React.useState('');
  const handleChangeDuration = (booking) => {
    setDuration(booking.target.value);
    console.log('duration', duration);
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
      <Typography className={styles.tabview} variant="h5" component="h3" >
        Reservation view
      </Typography>
      <form className={styles.form} noValidate component={Paper}>
        <Grid className={styles.grid}>
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="id" label="Booking id" name="id" autoComplete="id" autoFocus size="small" defaultValue={customData.id} />
        </Grid>
        <Grid className={styles.grid}>
          <Typography className={styles.booksub}>
            today: {date}
          </Typography>
          <TextField className={styles.dateform} id='date' label='Booking day' type='date' onChange={changeDate} defaultValue={customData.date} />
        </Grid>
        <Grid className={styles.grid}>
          <TextField className={styles.dateform} id='hour' label='time' type='hour' variant="outlined" defaultValue={customData.hour} />
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
          <TextField className={styles.textField} margin="normal" size="small" id="outlined-number" label="People" type="number" variant="outlined" defaultValue={customData.ppl} />
          <FormControl className={styles.textField} size="small" margin="normal" variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Duration</InputLabel>
            <Select className={styles.select} labelId="duration" id="duration" onChange={handleChangeDuration} label="duration" defaultValue={customData.duration} variant="outlined" 
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
        </Grid>
        <Grid className={styles.grid}>
          <FormControl size="small" margin="normal" component="fieldset" >
            <FormLabel component="legend">Starters</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={water} onChange={handleChangeStarter} name="water" defaultValue={customData.starters} />}
                label="Water"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bread} onChange={handleChangeStarter} name="bread" defaultValue={customData.starters} />}
                label="Bread"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid className={styles.grid}>
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="phone" label="Phone" name="phone" autoComplete="phone" autoFocus size="small" defaultValue={customData.phone} />
          <TextField className={styles.textField} variant="outlined" fullWidth margin="normal" id="mail" label="E-mail" name="mail" autoComplete="mail" autoFocus size="small" defaultValue={customData.mail} />
        </Grid>
        <Button className={styles.addbtn} type="submit" fullWidth variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables`}>edit & submit</Button>
      </form>
    </Paper>
  );
  
};

BookedTab.propTypes = {
  tableId: PropTypes.string,
};

export default BookedTab;