/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

import Educational from './EducationField.jsx'
import JobField from './JobField.jsx';
import PersonalField from './PersonalField.jsx';

class CoverForm extends Component {
  constructor(props) {
    super(props);
  }
 
  render () {
    const { personal, jobs, education } = this.props.values
    const { addEducationField, addJobField, onEducationChange, onJobChange, onHandlePersonalChange } = this.props
      return (
        <div className='input__wrapper'>
          <form>
            <div>
              <h3>Personal Information</h3>
              <PersonalField data={personal} onChange={onHandlePersonalChange}/>
            </div>

            <div>
              <h3>Experience</h3>
              {jobs.map((jobItem) => {
                return (
                  <JobField data={jobItem} id={jobItem.id} key={jobItem.id} onChange={onJobChange}/>
                )
              })}
              <button onClick={addJobField}>Add Field</button>
            </div>

            <div>
              <h3>Education</h3>
              {education.map((eduItem) => {
                return (
                  <Educational data={eduItem} id={eduItem.id} key={eduItem.id} onChange={onEducationChange}/>
                )
              })}
              <button onClick={addEducationField}>Add Field</button>
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