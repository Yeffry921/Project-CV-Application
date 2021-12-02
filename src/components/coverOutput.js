import React, { Component } from "react";
/* eslint-disable no-useless-constructor */

class CoverOutput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      firstName, 
      lastName, 
      email, 
      phone,
      description,
      school,
      title,
      fromDate, 
      toDate,
      location,
      company,
      companyTitle,
      companyDateStart,
      companyDateEnd,
      companyTasks
      } = this.props.data

    console.log()
    return(
      <div className='output__wrapper'>
       <header className='heading'>
          <button onClick={this.props.onClick}>Edit</button>
          <div className='heading__name'>{firstName} {lastName}</div>
          <div className='heading__email'>{email}</div>
          <div className='heading__phone'>{phone}</div>
       </header>
       <section className='body__wrapper'>
         <main className='body__content'>
          <div className='body__description'>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className='body__experience'>
            <h3>Experience</h3>
            <div>
              <p className='company__name'>{company}</p>
              <p className='company__title'>{companyTitle}</p>
            </div>
            <div>
              <p>{companyDateStart} -</p>
              <p>{companyDateEnd}</p>
            </div>
          </div>
          <div>
            <h3>Education</h3>
            <p>{school}</p>
            <p>{title}</p>
            <p>{fromDate} -</p>
            <p>{toDate}</p>
            <p>{location}</p>
          </div>
           
         </main>
         <aside></aside>
       </section>
      </div>
    )
  }
}

export default CoverOutput