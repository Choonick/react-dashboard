import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Grid, Message } from 'semantic-ui-react';

class ApiPage extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    const { persons } = this.state;
    const { width } = this.props;

    const apiList = persons.map(person => (
      <Message icon="inbox" header={person.username} content={person.email} />
    ));
    return (
      <Grid.Column width={width}>
        <Form>
          <Form.Field>{apiList}</Form.Field>
        </Form>
      </Grid.Column>
    );
  }
}

ApiPage.propTypes = {
  width: PropTypes.number.isRequired
};

export default ApiPage;
