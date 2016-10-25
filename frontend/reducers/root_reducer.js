import {combineReducers} from 'redux'
import notesReducer from './notes_reducer'
import tracksReducer from './tracksReducer'
import isRecordingReducer from './isRecordingReducer'


const rootReducer = combineReducers({
  notes: notesReducer,
  tracks: tracksReducer,
  isRecording: isRecordingReducer
})

export default rootReducer
