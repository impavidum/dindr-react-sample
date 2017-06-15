/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/

import enableLocation from '../actions/enableLocation.js';
import enableContacts from '../actions/enableContacts.js';
import enableNotifications from '../actions/enableNotifications.js';

const actions = {
  enableLocation,
  enableContacts,
  enableNotifications,
};
// module.exports = actions;
