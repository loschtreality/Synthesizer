import React from 'react'
import {NOTE_NAMES,TONES} from '../../util/tones'
import Note from '../../util/note'
import {NoteKey} from './note_key'
import $ from 'jquery'

class Synth extends React.Component {
  constructor(props) {
    super(props)
    this.notes = {}
    NOTE_NAMES.forEach((note)=> {

      this.notes[note] = new Note(TONES[note])

    })
    this.playNotes = this.playNotes.bind(this)
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key)
    if (this.props.isRecording) this.props.addNotes(this.props.notes)
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key)
    if (this.props.isRecording) this.props.addNotes(this.props.notes)
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  generateKeys() {

  }

  playNotes () {
    for (var key in this.notes) {
      if (this.props.pressed.notes.includes(key)) {
        this.notes[key].start()
      } else {
        this.notes[key].stop()
      }
    }
  }


  render () {
    return (
      <div>
        {
          this.playNotes()
        }
      </div>

    )
  }

}

export default Synth;
