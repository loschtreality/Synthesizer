import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from '../actions/tracks_actions'
import {merge} from 'lodash/merge'


const prevState = {}
let currTrackId = 0


const tracksReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case START_RECORDING:
      currTrackId++; // increment id of current (newest) track
      return merge({}, state, {
        [currTrackId]: trackReducer(undefined, action)
      });
    case STOP_RECORDING:
      return merge({}, state, {
        [currTrackId]: trackReducer(state[currTrackId], action)
      });
    case ADD_NOTES:
      return merge({}, state, {
        [currTrackId]: trackReducer(state[currTrackId], action)
      });
    case DELETE_TRACK:
      let nextState = merge({}, state);
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};



const trackReducer = (state = prevState, action) => {
  Object.freeze(state)
  switch (action.type) {

    case START_RECORDING:
    console.log(action, "action from TR");
      currTrackId += 1
      return {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeStart
      }

    case STOP_RECORDING:
      return merge({}, state, {
        roll: [
          ...state.roll,
          {notes: [], timeSlice: action.timeNow - state.timeStart}
        ]
      })

    case ADD_NOTES:
    return merge({}, state, {
      roll: [
        ...state.roll,
        {notes: action.notes, timeSlice: action.timeNow - state.timeStart}
      ]
    })

    default:
      return state
  }
}



export default tracksReducer
