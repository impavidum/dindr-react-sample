import 'babel-polyfill'
import axios from 'axios'
import {call, put, takeEvery, select} from 'redux-saga/effects'

/* ------------------ INITIALIZE ------------------ */

// Init stuff here

/* ------------------ SAGAS ------------------ */

// Login Saga
export function * login(action) {
  // Make some call
}

export function * watchLogin() {
  yield takeEvery('LOGIN', login)
}

// single entry point to start all Sagas at once
export default function * userSagas() {
  yield [
    watchLogin()
  ]
}
