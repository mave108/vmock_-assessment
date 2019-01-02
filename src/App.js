import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Userlist from './Containers/User/Userlist';
import Userdetail from './Containers/User/Userdetail';


class App extends Component {
  render() {
    return (
      <BrowserRouter>      
      <Switch>     
      
      <Route path="/users/:username" >
            {(context) => (
              <Userdetail uid={ context.match.params.username }/>
            )}
      </Route>                                       
      <Route path="/" exact component={Userlist} />           
      </Switch>      
    </BrowserRouter>    
    );
  }
}

export default App;
