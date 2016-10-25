import {connect} from 'react-redux'
import Recorder from './recorder'
import {startRecording, stopRecording, addNotes} from '../../actions/tracks_actions'

const mapStateToProps = state => ({
  isRecording: state.recording
})

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording()),
  addNotes: (key) => dispatch(addNotes(key))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
