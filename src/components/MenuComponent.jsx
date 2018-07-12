import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Grid } from 'semantic-ui-react';
import './MenuComponent.css';

class MenuComponent extends Component {
  state = {
    activeItem: ''
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { items, width } = this.props;
    const { activeItem } = this.state;
    const itemList = items.map(({ id, name, routeName }) => (
      <Menu.Item
        as={Link}
        to={`/${routeName}`}
        key={id}
        name={name}
        active={name === activeItem}
        onClick={this.handleItemClick}
      />
    ));
    console.log('this pros', this.props);
    return (
      // <Grid.Column width={width}>
      <Menu
        as="div"
        className="menu-tapm"
        pointing
        vertical
        secondary
        fixed="left"
      >
        {itemList}
      </Menu>
      // </Grid.Column>
    );
  }
}

MenuComponent.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
  width: PropTypes.number.isRequired
};

export default MenuComponent;
