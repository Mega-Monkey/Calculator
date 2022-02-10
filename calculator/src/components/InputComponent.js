import React from 'react'

export default class InputComponent extends React.Component {
  render () {
    return <div>
      <input type="text" onChange={e => this.props.onChange(e.target.value)} />
    </div>
  }
}