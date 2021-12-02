/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import CoverForm from './components/coverForm';
import CoverOutput from './components/coverOutput';
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCover: false,
      data: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: '',
        company: '',
        companyTitle: '',
        companyDateStart: '',
        companyDateEnd: '',
        companyTasks: '',
        school: '',
        title: '',
        fromDate: '', 
        toDate: '',
        location: '',
      }
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
          ? <CoverOutput data={this.state.data} onClick={this.isValid}/>
          : <CoverForm onChange={this.handleChange} values={this.state.data} onSubmit={this.handleSubmit}/>
        }
      </section>
    )
  }
}

export default App;
