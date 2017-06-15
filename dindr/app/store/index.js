import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// Saga Imports
import createSagaMiddleware from 'redux-saga'
import userSagas from '../sagas/userSagas.js'

// Saga Middleware
const sagaMiddleware = createSagaMiddleware()                

// Create Store
function reduxStore(initialState) {
  const store = createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ))

  // Start Up User Sagas
  sagaMiddleware.run(userSagas)

  store.subscribe(() => {
    // console.log('store changed', store.getState())
  })

  return store
}

export default reduxStore
