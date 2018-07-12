import React, { Component } from 'react';
import { Grid, Form, Button, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ChartTable from '../components/ChartTable';

class ChartsPage extends Component {
  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //   const persons = res.data;
    //   this.setState({ persons });
    // });
  }

  render() {
    const { width } = this.props;
    return (
      <Grid.Column width={width}>
        <Form>
          <Form.Field>
            <Container textAlign="justified">
              <Button primary>Create</Button>
              <Button secondary>Delete</Button>
            </Container>
          </Form.Field>
          <Form.Field>
            <ChartTable />
          </Form.Field>
        </Form>
      </Grid.Column>
    );
  }
}

ChartsPage.propTypes = {
  width: PropTypes.number.isRequired
};

export default ChartsPage;
