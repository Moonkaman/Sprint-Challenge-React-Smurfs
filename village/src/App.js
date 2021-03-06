import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';
import SmurfPage from './components/SmurfPage';
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

  updateState = data => {
    console.log(data)
    this.setState({
      smurfs: data
    })
  }

  removeSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
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
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} removeSmurf={this.removeSmurf} />} />
        <Route path='/add-smurf' render={props => <SmurfForm {...props} updateState={this.updateState} />} />
        <Route path='/smurfs/:sId' render={props => <SmurfPage {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
