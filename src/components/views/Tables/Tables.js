import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const bookingContent = [
  { time: '12:30', table1: null, table2: 234, table3: 123 },
  { time: '13:00', table1: null, table2: 765, table3: 321 },
  { time: '13:30', table1: null, table2: 765, table3: 567 },
  { time: '14:00', table1: null, table2: null, table3: 123 },
  { time: '14:30', table1: null, table2: 234, table3: 789 },
  { time: '15:00', table1: null, table2: 234, table3: 123 },
  { time: '15:30', table1: null, table2: 234, table3: 123 },
  { time: '16:00', table1: null, table2: null, table3: 126 },
  { time: '16:30', table1: null, table2: 234, table3: 123 },
  { time: '17:00', table1: null, table2: 235, table3: 126 },
  { time: '17:30', table1: null, table2: 235, table3: 127 },
  { time: '18:00', table1: 154, table2: 237, table3: 127 },
  { time: '18:30', table1: null, table2: 234, table3: 123 },
  { time: '19:00', table1: null, table2: 234, table3: 123 },
  { time: '19:30', table1: 154, table2: 237, table3: 127 },
  { time: '20:00', table1: null, table2: null, table3: 128 },
  { time: '20:30', table1: null, table2: 234, table3: 123 },
  { time: '21:00', table1: null, table2: 234, table3: 123 },
  { time: '21:30', table1: null, table2: 239, table3: 128 },
  { time: '22:00', table1: null, table2: 239, table3: 128 },
];

const eventContent = [
  { time: '12:30', table1: null, table2: 889, table3: 909 },
  { time: '13:00', table1: null, table2: 765, table3: 321 },
  { time: '13:30', table1: null, table2: 333, table3: 222 },
  { time: '14:00', table1: null, table2: null, table3: 123 },
  { time: '14:30', table1: null, table2: 234, table3: 789 },
  { time: '15:00', table1: null, table2: 555, table3: 123 },
  { time: '15:30', table1: 444, table2: 234, table3: 666 },
  { time: '16:00', table1: null, table2: null, table3: 126 },
  { time: '16:30', table1: null, table2: 777, table3: 123 },
  { time: '17:00', table1: null, table2: 235, table3: 126 },
  { time: '17:30', table1: null, table2: 235, table3: 127 },
  { time: '18:00', table1: 111, table2: 237, table3: 127 },
  { time: '18:30', table1: null, table2: 234, table3: 123 },
  { time: '19:00', table1: null, table2: 228, table3: 123 },
  { time: '19:30', table1: 154, table2: 237, table3: 127 },
  { time: '20:00', table1: null, table2: null, table3: 128 },
  { time: '20:30', table1: null, table2: 229, table3: 193 },
  { time: '21:00', table1: null, table2: 274, table3: 173 },
  { time: '21:30', table1: null, table2: 289, table3: 128 },
  { time: '22:00', table1: null, table2: 239, table3: 128 },
];

const Tables = () => {
  
  let day = new Date();
  let today = day.toISOString().substr(0,10);
  
  const [date, setDate] = React.useState(today);
  const changeDate = date => {
    setDate(date);
    console.log(date);
  };
  
  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar}>
        <EventOutlinedIcon />
      </Avatar>
      <Typography className={styles.tabview} variant="h5" component="h3" >
        View of reservations
      </Typography>
      <ButtonGroup variant="contained" aria-label="contained primary button group" className={styles.buttons}>
        <Button className={styles.btn} color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New table reservation</Button>
        <Button className={styles.btn} color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}>Add new event</Button>
      </ButtonGroup>
      <Grid container justify="space-around">
        <Typography className={styles.tabtitle} variant="h5" component="h3" >
          Daily orders for the particular tables:
        </Typography>
        <div>
          <form className={styles.dateform} noValidate>
            <TextField id='date' defaultValue={date} label='CHOOSE DATE:' type='date' onChange={changeDate} InputLabelProps={{ shrink: true}} />
          </form>
        </div>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Time</TableCell>
              <TableCell className={styles.title}>Table1</TableCell>
              <TableCell className={styles.title}>Table2</TableCell>
              <TableCell className={styles.title}>Table3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingContent.map(row => (
              <TableRow key={row.time}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.table1 ?
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}>
                      <Typography className={styles.spanone}>see</Typography> 
                      {row.table1}
                    </Button>) : 
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
                      <Typography className={styles.spanone}>free</Typography>
                    </Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table2 ?
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table2}`}>
                      <Typography className={styles.spanone}>see:</Typography>
                      {row.table2}
                    </Button>) : 
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
                      <Typography className={styles.spanone}>free</Typography>
                    </Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table3 ?
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`}>
                      <Typography className={styles.spanone}>see</Typography>
                      {row.table3}
                    </Button>) : 
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
                      <Typography className={styles.spanone}>free</Typography>
                    </Button>)
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid container justify="space-around">
        <Typography className={styles.tabtitle} variant="h5" component="h3" >
          Reservations for events & free tables:
        </Typography>
        <div>
          <form className={styles.dateform} noValidate>
            <TextField id='date' defaultValue={date} label='CHOOSE DATE:' type='date' onChange={changeDate} InputLabelProps={{ shrink: true}} />
          </form>
        </div>
        <Table className={styles.table}>
          <TableHead>
            <TableRow className={styles.tablehead}>
              <TableCell className={styles.title}>Time</TableCell>
              <TableCell className={styles.title}>Table1</TableCell>
              <TableCell className={styles.title}>Table2</TableCell>
              <TableCell className={styles.title}>Table3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventContent.map(row => (
              <TableRow key={row.time}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.table1 ?
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/${row.table1}`}>
                      <Typography className={styles.spanone}>event:</Typography> 
                      {row.table1}
                    </Button>) : 
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}>
                      <Typography className={styles.spanone}>free</Typography>
                    </Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table2 ?
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/${row.table2}`}>
                      <Typography className={styles.spanone}>event:</Typography>
                      {row.table2}
                    </Button>) : 
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}>
                      <Typography className={styles.spanone}>free</Typography>
                    </Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table3 ?
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/${row.table3}`}>
                      <Typography className={styles.spanone}>event:</Typography>
                      {row.table3}
                    </Button>) : 
                    (<Button className={styles.tabstatus} component={Link} to={`${process.env.PUBLIC_URL}/tables/event/new`}>
                      <Typography className={styles.spanone}>free</Typography>
                    </Button>)
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <ButtonGroup variant="contained" aria-label="contained primary button group" className={styles.buttons}>
        <Button className={styles.btn} color="primary" component={Link} to={`${process.env.PUBLIC_URL}/`}>Back to Home</Button>
        <Button className={styles.btn} color="primary" component={Link} to={`${process.env.PUBLIC_URL}/kitchen`}>Go to Kitchen</Button>
        <Button className={styles.btn} color="primary" component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>Go to Waiter</Button>
      </ButtonGroup>
    </Paper >
  );
};

export default Tables;