import React, { Component } from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      }) 
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path='/add-smurf' render={props => <SmurfForm />} />
      </div>
    );
  }
}

export default App;
