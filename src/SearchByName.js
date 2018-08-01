import React, { Component } from 'react';
import { withRouter } from 'react-router'

class SearchByNameBare extends Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: "" }
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }
  submitHandler(evt) {
    evt.preventDefault()
    this.props.history.push('/name/' + this.state.inputValue)
  }

  changeHandler(evt) {
    this.setState({ inputValue: evt.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input value={this.state.inputValue} onChange={this.changeHandler} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

let SearchByName = withRouter(SearchByNameBare)

export default SearchByName;
