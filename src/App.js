/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CoverForm from './components/coverForm';
import CoverOutput from './components/coverOutput';
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCover: false,
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: ''
      },
      jobs: [],
      education: []
    }
  }

  isValid = () => {
    this.setState((prevState) => {
      return {
        showCover: !prevState.showCover
      }
     })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.isValid()
  }

  handleAddEducationField = (e) => {
    e.preventDefault()
    this.setState({
     education: [
       ...this.state.education,
       {
        id: uuidv4(),
        school: '',
        title: '',
        fromDate: '', 
        toDate: '',
        location: ''
       }
     ]
    })
  }

  handleEducationChange = (event, id) => {
   
  }
  render() {
    return(
      <section className='cover-container'>
        {/* { this.state.showCover
          ? <CoverOutput data={this.state.data} onClick={this.isValid}/>
          : <CoverForm onChange={this.addEducationField} values={this.state.data} onSubmit={this.handleSubmit}/>
        } */}
        <CoverForm 
          addEducationField={this.handleAddEducationField} 
          values={this.state} 
          onSubmit={this.handleSubmit}
          onEducationChange={this.handleEducationChange}
        />
      </section>
    )
  }
}

export default App;
