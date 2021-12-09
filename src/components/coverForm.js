/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Educational
 from './Educational';
class CoverForm extends Component {
  constructor(props) {
    super(props);
  }
 
  render () {
    const { personal, jobs, education } = this.props.values
    const { addEducationField, onEducationChange } = this.props
      return (
        <div className='cover-wrapper'>
          <form>
            <div>
              {/* <h3>Personal Information</h3>
              <input type='text' placeholder='First Name' name='firstName' required onChange={onChange} value={values.firstName}/>
              <input type='text' placeholder='Last Name' name='lastName' required onChange={onChange} value={values.lastName}/>
              <input type='email' placeholder='Email' name='email' required onChange={onChange} value={values.email}/>
              <input type='text' placeholder='Phone Number' name='phone' required onChange={onChange} value={values.phone}/>
              <input placeholder='Description' name='description' required onChange={onChange} value={values.description}/> */}
            </div>

            <div>
              <h3>Educational Experience</h3>
              {education.map((item) => {
                return (
                  <Educational data={item} id={item.id} key={item.id} onChange={onEducationChange}/>
                )
              })}
              <button onClick={addEducationField}>Add Field</button>
            </div>

            <div>
              <h3>Practical Experience</h3>
              {/* <input type='text' onChange={onChange} value={values.company} name='company' placeholder='Company Name'/>
              <input type='text' onChange={onChange} value={values.companyTitle} name='companyTitle' placeholder='Company Title'/>
              <input type='date' onChange={onChange} value={values.companyDateStart} name='companyDateStart' placeholder='Date started'/>
              <input type='date' onChange={onChange} value={values.companyDateEnd} name='companyDateEnd' placeholder='Dated ended (Leave blank if still attending)'/>
              <input placeholder='Main tasks' onChange={onChange} value={values.companyTasks} name='companyTasks'/> */}
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