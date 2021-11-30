/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class CoverForm extends Component {
  constructor(props) {
    super(props);
  }
 
  render () {
    const { onChange, values, onSubmit } = this.props
      return (
        <div className='cover-wrapper'>
          <form onSubmit={onSubmit}>
            <div>
              <h3>Personal Information</h3>
              <input type='text' placeholder='First Name' name='firstName' onChange={onChange} value={values.firstName}/>
              <input type='text' placeholder='Last Name' name='lastName' onChange={onChange} value={values.lastName}/>
              <input type='email' placeholder='Email' name='email' onChange={onChange} value={values.email}/>
              <input type='text' placeholder='Phone Number' name='phone' onChange={onChange} value={values.phone}/>
              <input placeholder='Description' name='description' onChange={onChange} value={values.description}/>
            </div>

            <div>
              <h3>Educational Experience</h3>
              <input type='text' onChange={onChange} value={values.school} name='school' placeholder='School Name'/>
              <input type='text' onChange={onChange} value={values.title} name='title' placeholder='Title Of Study'/>
              <input type='date' onChange={onChange} value={values.fromDate} name='fromDate' placeholder='From'/>
              <input type='date' onChange={onChange} value={values.toDate} name='toDate' placeholder='To (Leave blank if still attending)'/>
              <input type='text' onChange={onChange} value={values.location} name='location' placeholder='Location'/>
            </div>

            <div>
              <h3>Practical Experience</h3>
              <input type='text' onChange={onChange} value={values.company} name='company' placeholder='Company Name'/>
              <input type='text' onChange={onChange} value={values.companyTitle} name='companyTitle' placeholder='Company Title'/>
              <input type='date' onChange={onChange} value={values.companyDateStart} name='companyDateStart' placeholder='Date started'/>
              <input type='date' onChange={onChange} value={values.companyDateEnd} name='companyDateEnd' placeholder='Dated ended (Leave blank if still attending)'/>
              <input placeholder='Main tasks' onChange={onChange} value={values.companyTasks} name='companyTasks'/>
            </div>

            <div>
              <button type='submit' className='btn'>Add</button>
            </div>
          </form>
      </div>
      )
  }
}

export default CoverForm