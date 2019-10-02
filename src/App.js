import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

// Styling
import './App.css';

// Components
import Main from './components/MainComponent';
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
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
