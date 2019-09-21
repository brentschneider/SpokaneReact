import React, { Component} from 'react';

// Styling
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

// Components
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div ClassName="container">
            <NavbarBrand href="/">Le bistro Spokane</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
