/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Educational extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { onChange, data } = this.props
    return(
      <div>
        <input type='text' onChange={(e) => onChange(e, data.id)} value={data.school} name='school' placeholder='School Name'/>
        <input type='text' onChange={(e) => onChange(e ,data.id)} value={data.title} name='title' placeholder='Title Of Study'/>
        <input type='date' onChange={(e) => onChange(e ,data.id)} value={data.fromDate} name='fromDate' placeholder='From'/>
        <input type='date' onChange={(e) => onChange(e ,data.id)} value={data.toDate} name='toDate' placeholder='To (Leave blank if still attending)'/>
        <input type='text' onChange={(e) => onChange(e ,data.id)} value={data.location} name='location' placeholder='Location'/>
      </div>
    )
  }
}

export default Educational