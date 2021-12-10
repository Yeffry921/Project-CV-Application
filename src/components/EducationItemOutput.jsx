import React, { Component } from 'react'

class EducationalItemOutput extends Component {
  render() {
    const { dataEdu } = this.props
    return (
      <React.Fragment>
        {dataEdu.map((eduItem) => {
          return(
            <div key={eduItem.id}>
              <p>{eduItem.school}</p>
              <p>{eduItem.title}</p>
              <p>{eduItem.fromDate} -</p>
              <p>{eduItem.toDate}</p>
              <p>{eduItem.location}</p>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}

export default EducationalItemOutput