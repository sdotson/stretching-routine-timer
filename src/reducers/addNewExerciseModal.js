import {
  TOGGLE_ADD_NEW_EXERCISE_MODAL,
  ADD_EXERCISE
} from '../actions/types';

export default function(state = false, action) {
  switch(action.type) {
    case TOGGLE_ADD_NEW_EXERCISE_MODAL:
    console.log('prev: ', state, ' curr: ', !state);
      return !state;
    case ADD_EXERCISE:
      return false;
  }

  return state;
}