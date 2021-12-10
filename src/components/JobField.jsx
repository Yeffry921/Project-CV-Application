/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

class JobField extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { onChange, data } = this.props
    return(
      <div>
        <input type='text' onChange={(e) => onChange(e ,data.id)} value={data.company} name='company' placeholder='Company Name'/>
        <input type='text' onChange={(e) => onChange(e ,data.id)} value={data.companyTitle} name='companyTitle' placeholder='Company Title'/>
        <input type='date' onChange={(e) => onChange(e ,data.id)} value={data.companyDateStart} name='companyDateStart' placeholder='Date started'/>
        <input type='date' onChange={(e) => onChange(e ,data.id)} value={data.companyDateEnd} name='companyDateEnd' placeholder='Dated ended (Leave blank if still attending)'/>
      </div>
    )
  }
}

export default JobField