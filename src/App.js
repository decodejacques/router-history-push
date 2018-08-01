import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchByName from './SearchByName'
import { BrowserRouter, Route } from 'react-router-dom'

let data = [
  {
    username: "bob",
    email: "bob@gmail.com",
    userid: "15321xyz"
  }
]

function formatUser(user) {
  return (<div>
    <div>Username: {user.username}</div>
    <div>Email: {user.email} </div>
    <div> id: {user.userid} </div>
  </div>)
}

class App extends Component {
  constructor(props) {
    super(props)
  }
  renderUserByName(routerData) {
    let usernameSupplied = routerData.match.params.username
    let matchingUsers = data.filter(x => x.username === usernameSupplied)
    if (matchingUsers.length === 0) {
      // No matching usernames
      return (<div> invalid username </div>)
    }
    let userFound = matchingUsers[0]
    return formatUser(matchingUsers[0])
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchByName />
          <Route path="/name/:username" render={this.renderUserByName} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
