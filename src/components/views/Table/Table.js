import React from 'react';
import styles from './Table.module.scss';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Link } from 'react-router-dom';

const demoContent = [
  { time: '12:00', table1: null, table2: null, table3: null },
  { time: '13:00', table1: null, table2: 765, table3: 321 },
  { time: '13:30', table1: null, table2: 765, table3: 321 },
  { time: '14:00', table1: null, table2: null, table3: 123 },
  { time: '14:30', table1: null, table2: 234, table3: 123 },
  { time: '15:00', table1: null, table2: 234, table3: 123 },
  { time: '16:30', table1: null, table2: null, table3: 126 },
  { time: '17:00', table1: null, table2: 235, table3: 126 },
  { time: '17:30', table1: null, table2: 235, table3: 127 },
  { time: '18:00', table1: 154, table2: 237, table3: 127 },
  { time: '19:30', table1: 154, table2: 237, table3: 127 },
  { time: '20:00', table1: null, table2: null, table3: 128 },
  { time: '21:30', table1: null, table2: 239, table3: 128 },
  { time: '22:00', table1: null, table2: 239, table3: 128 },
];

const Table = () => {
  
  return (
    <Paper className={styles.component}>
      <Avatar className={styles.avatar}>
        <EventOutlinedIcon />
      </Avatar>
      <Typography className={styles.tabview} variant="h5" component="h3" >
        Tables view
      </Typography>
      <ButtonGroup variant="contained" aria-label="contained primary button group" className={styles.buttons}>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/event/new`}>Add new event</Button>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/new`}>Add new reservation</Button>
      </ButtonGroup>
      <Grid container justify="space-around">
        <Typography className={styles.tabview} variant="h5" component="h3" >
          Choose date & time
        </Typography>
        /*
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
            {demoContent.map(row => (
              <TableRow key={row.time}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.table1 ?
                    (<Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/${row.table1}`}>
                      {row.table1}
                    </Button>) : (<Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/new`}></Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table2 ?
                    (<Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/${row.table2}`}>
                      {row.table2}
                    </Button>) : (<Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/new`}></Button>)
                  }
                </TableCell>
                <TableCell>
                  {row.table3 ?
                    (<Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/${row.table3}`}>
                      {row.table3}
                    </Button>) : (<Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/new`}></Button>)
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */
      </Grid>
    </Paper >
  );
};

export default Table;