import React from 'react'

export default class InputDisplayComponent extends React.Component {
  render () {
    return <div>
      <p>{this.props.inputVal}</p>
    </div>
  }
}