/* eslint-disable no-useless-constructor */

import React, { Component } from 'react'
import CoverForm from "./components/coverForm";

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <CoverForm/>
    )
  }
}

export default App;
