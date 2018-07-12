import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Container, Grid } from 'semantic-ui-react';
import MenuComponent from './components/MenuComponent';
import ApiPage from './pages/ApiPage';
import DashboardPage from './pages/DashboardPage';
import ChartsPage from './pages/ChartsPage';

class App extends Component {
  state = {
    menuItems: [
      {
        id: 0,
        name: 'TMON ADMIN',
        iconName: 'list alternate outline',
        routeName: 'api'
      },
      {
        id: 1,
        name: 'API LIST',
        iconName: 'list alternate outline',
        routeName: 'api'
      },
      {
        id: 2,
        name: 'DASHBOARD',
        iconName: 'clipboard outline',
        routeName: 'dashboard'
      },
      {
        id: 3,
        name: 'CHARTS',
        iconName: 'chart area',
        routeName: 'charts'
      }
    ]
  };

  render() {
    const { menuItems } = this.state;
    return (
      <Container fluid>
        {/* <br /> */}
        {/* <Header as="h2">
          <Icon name="chart area" />TMON ADMIN
        </Header> */}
        {/* <Divider /> */}

        <MenuComponent items={menuItems} />
        <Grid>
          <Grid.Column width={4} />
          <Route
            exact
            path="/api"
            render={props => <ApiPage width={11} {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            render={props => <DashboardPage width={11} {...props} />}
          />
          <Route
            exact
            path="/charts"
            render={props => <ChartsPage width={11} {...props} />}
          />
        </Grid>
      </Container>
    );
  }
}

export default App;
