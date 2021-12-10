import React, { Component } from "react";

class JobItemOutput extends Component {
  
  render() {
    const { dataJobs } = this.props
    console.log(dataJobs)
    return (
      <React.Fragment>
      {dataJobs.map((job) => {
        return (
          <div key={job.id}>
            <div>
              <p className='company__name'>{job.company}</p>
              <p className='company__title'>{job.companyTitle}</p>
              </div>
              <div>
              <p>{job.companyDateStart} -</p>
              <p>{job.companyDateEnd}</p>
            </div>
          </div>
        )
      })}
      </React.Fragment>
      
    )
  }
}

export default JobItemOutput