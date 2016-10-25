import React from 'react'


class NoteKey extends React.Component {

  render () {
    let {note, pressed} = this.props

    console.log(pressed, "pressed");
    return (
      <li key={note}>note</li>
    )
  }
}

export default NoteKey;
