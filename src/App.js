/* eslint-disable no-useless-constructor */

import React, { Component } from 'react'
import CoverForm from "./components/coverForm";
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
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
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <section className='cover-container'>
        <CoverForm onChange={this.handleChange} values={this.state} onSubmit={this.onSubmit}/>
      </section>
    )
  }
}

export default App;
