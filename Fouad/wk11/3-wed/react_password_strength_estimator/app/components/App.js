import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>hello world</h1>
      <label>Password Tester</label>
      <PasswordInput />
    </div>
  }

}
