import {KEY_PRESSED, KEY_RELEASED} from '../actions/note_actions'
import {TONES} from '../util/tones'

const initialState = {notes:[]}

const notesReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case KEY_PRESSED:
    if (state.notes.includes(action.key)) {
      return state
    } else if (TONES[action.key]) {
      return {
        notes: [
          ...state.notes,
          action.key
        ]
      }
    }
    else {
      return state
    }


    case KEY_RELEASED:
      if (TONES[action.key]) {
        return {
          notes: state.notes.filter((key) => key !== action.key)
        }
      }
    default:
      return state
  }
}


export default notesReducer
