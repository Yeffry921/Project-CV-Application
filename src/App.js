/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CoverForm from './components/CoverForm'
import CoverOutput from './components/CoverOutput'
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.isValid()
  }

  handleAddEducationField = (event) => {
    event.preventDefault()
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

  handleAddJobField = (event) => {
    event.preventDefault();
    this.setState({
      jobs: [
        ...this.state.jobs,
        {
          id: uuidv4(),
          company: '',
          companyTitle: '',
          companyDateStart: '',
          companyDateEnd: '',
        }
      ]
    })
  }

  handleEducationChange = (event, id) => {

    this.setState((prevState) => {
      const educationMatch = prevState.education.map((eduItem) => {
        if(eduItem.id === id) {
          return {
            ...eduItem,
            [event.target.name] : event.target.value
          }
        }
        return eduItem
      })

      return {
        ...prevState,
        education: [...educationMatch]
      }
    })
  }

  handleJobChange = (event, id) => {
    this.setState((prevState) => {
      const jobMatch = prevState.jobs.map((job) => {
        if(job.id === id) {
          return {
            ...job,
            [event.target.name]:event.target.value
          }
        }
        return job
      })
      return {
        ...prevState,
        jobs: [...jobMatch]
      }
    })
  }

  handlePersonalChange = (event) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [event.target.name]:event.target.value
      }
    })
  }

  render() {
    return(
      <section className='cover__container'>
        
        <CoverOutput data={this.state}/>
    
        <CoverForm 
          addEducationField={this.handleAddEducationField}
          addJobField={this.handleAddJobField} 
          values={this.state} 
          onSubmit={this.handleSubmit}
          onEducationChange={this.handleEducationChange}
          onJobChange={this.handleJobChange}
          onHandlePersonalChange={this.handlePersonalChange}
        />
      </section>
    )
  }
}

export default App;
