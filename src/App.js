import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/Waiter';
import Table from './components/views/Table/Table';
import Kitchen from './components/views/Kitchen/Kitchen';
import Order from './components/views/Order/Order';
import OrderNew from './components/views/OrderNew/OrderNew';
import Event from './components/views/Event/Event';
import EventNew from './components/views/EventNew/EventNew';
import BookedTab from './components/views/BookedTab/BookedTab';
import BookedTabNew from './components/views/BookedTabNew/BookedTabNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#2B4C6F',
    },
    //secondary: { main: '#11cb5f'},
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:orderId`} component={Order} />
              <Route exact path={process.env.PUBLIC_URL + '/table'} component={Table} />
              <Route exact path={`${process.env.PUBLIC_URL}/table/event/new`} component={EventNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/table/event/:eventId`} component={Event} />
              <Route exact path={`${process.env.PUBLIC_URL}/table/booking/new`} component={BookedTabNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/table/booking/:tableId`} component={BookedTab} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
