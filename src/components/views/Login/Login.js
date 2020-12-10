import React from 'react';
import styles from './Login.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => (
  
  <Paper className={styles.component}>
    <Avatar className={styles.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography className={styles.login} variant="h5" component="h3" >
      sign in
    </Typography>
    <form className={styles.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="login"
        label="Login"
        name="login"
        autoComplete="login"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button className={styles.button}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        component={Link} to={`${process.env.PUBLIC_URL}/`}>
        sign In
      </Button>
    </form>
  </Paper>
);

export default Login;