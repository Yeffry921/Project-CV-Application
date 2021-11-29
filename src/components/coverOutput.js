import React, { Component } from "react";
/* eslint-disable no-useless-constructor */

class CoverOutput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.output)
    return(
      <div></div>
    )
  }
}

export default CoverOutput