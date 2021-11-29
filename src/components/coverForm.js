/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class CoverForm extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <form>
        <div>
          <h1>Personal Information</h1>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
          <input type='email' placeholder='Email'/>
          <input type='text' placeholder='Phone Number'/>
          <textarea placeholder='Description'></textarea>
        </div>

        <div>
          <h1>Educational Experience</h1>
          <input type='text' placeholder='School Name'/>
          <input type='text' placeholder='Title Of Study'/>
          <input type='date' placeholder='From'/>
          <input type='date' placeholder='To (Leave blank if still attending)'/>
          <input type='text' placeholder='Location'/>
        </div>

        <div>
          <h1>Practical Experience</h1>
          <input type='text' placeholder='Company Name'/>
          <input type='text' placeholder='Position Title'/>
          <input type='date' placeholder='Date started'/>
          <input type='date' placeholder='Dated ended (Leave blank if still attending)'/>
          <textarea placeholder='Main tasks'></textarea>
        </div>

        <div>
          <button type='submit'>Add</button>
        </div>
    </form>
    )
  }
}

export default CoverForm