/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  ENABLE_CONTACTS,
  ENABLE_LOCATION,
  ENABLE_NOTIFICATIONS
} from '../actions/const'

const initialState = {
  name: 'tester',
  contactsEnabled: false,
  locationEnabled: false,
  notificationsEnabled: false
}

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state)

  switch (action.type) {

    case ENABLE_CONTACTS:
    {
      nextState.contactsEnabled = true
      return nextState
    }

    case ENABLE_LOCATION:
    {
      nextState.locationEnabled = true
      return nextState
    }

    case ENABLE_NOTIFICATIONS:
    {
      nextState.notificationsEnabled = true
      return nextState
    }

    default:
      {
        /* Return original state if no actions were consumed. */
        return state
      }
  }
}

module.exports = reducer
