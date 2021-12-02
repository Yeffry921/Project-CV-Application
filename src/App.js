/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import CoverForm from './components/coverForm';
import CoverOutput from './components/coverOutput';
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCover: true,
      data: {
        firstName: 'Yeffry',
        lastName: 'Fermin',
        email: 'yeffry45@gmail.com',
        phone: '929-474-7517',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id eleifend neque dolor sit amet, consectetur ',
        school: 'In-Tech Academy',
        title: 'Software Developer',
        fromDate: '9/2008', 
        toDate: '6/2012',
        location: 'New York City',
        company: 'Apples Company',
        companyTitle: 'Web Developer',
        companyDateStart: '12/2020',
        companyDateEnd: '',
        companyTasks: '',
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState((prevState) => {
     return {
       showCover: !prevState.showCover
     }
    })
  }

  handleChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]:event.target.value
      },
    })
  }

  render() {
    return(
      <section className='cover-container'>
        { this.state.showCover
          ? <CoverOutput data={this.state.data}/>
          : <CoverForm onChange={this.handleChange} values={this.state.data} onSubmit={this.handleSubmit}/>
        }
      </section>
    )
  }
}

export default App;
