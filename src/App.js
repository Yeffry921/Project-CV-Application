/* eslint-disable no-useless-constructor */

import React, { Component } from 'react'
import CoverForm from "./components/coverForm";
import CoverOutput from './components/coverOutput';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
      school: '',
      title: '',
      fromDate: '', 
      toDate: '',
      location: '',
      company: '',
      companyTitle: '',
      companyDateStart: '',
      companyDateEnd: '',
      companyTasks: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <section>
        <CoverForm onChange={this.handleChange} values={this.state}/>
        <CoverOutput output={this.state}/>
      </section>
    )
  }
}

export default App;
