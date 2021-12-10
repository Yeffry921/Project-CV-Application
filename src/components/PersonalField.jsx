import React, { Component } from "react";

class PersonalField extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { data, onChange } = this.props
    return(
      <div>
        <input type='text' placeholder='First Name' name='firstName' required onChange={onChange} value={data.firstName}/>
        <input type='text' placeholder='Last Name' name='lastName' required onChange={onChange} value={data.lastName}/>
        <input type='email' placeholder='Email' name='email' required onChange={onChange} value={data.email}/>
        <input type='text' placeholder='Phone Number' name='phone' required onChange={onChange} value={data.phone}/>
        <input placeholder='Description' name='description' required onChange={onChange} value={data.description}/>
      </div>
    )
  }
}

export default PersonalField