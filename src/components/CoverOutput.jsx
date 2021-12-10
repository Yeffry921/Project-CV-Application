import React, { Component } from "react";
/* eslint-disable no-useless-constructor */
import JobItemOutput from './JobItemOutput'
import EducationalItemOutput from './EducationItemOutput'

class CoverOutput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { personal, education, jobs } = this.props.data

    return(
      <div className='output__wrapper'>
       <header className='heading'>
          <div className='heading__name'>{personal.firstName} {personal.lastName}</div>
          <div className='heading__email'>{personal.email}</div>
          <div className='heading__phone'>{personal.phone}</div>
       </header>
       <section className='body__wrapper'>
         <main className='body__content'>
          <div className='body__description'>
            <h3>Description</h3>
            <p>{personal.description}</p>
          </div>
          <div className='body__experience'>
            <h3>Experience</h3>
            <JobItemOutput dataJobs={jobs}/>
          </div>
          <div>
            <h3>Education</h3>
            <EducationalItemOutput dataEdu={education}/>
          </div>
         </main>
         <aside></aside>
       </section>
      </div>
    )
  }
}

export default CoverOutput