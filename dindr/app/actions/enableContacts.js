import { ENABLE_CONTACTS } from './const';

function action(parameter) {
  return { type: ENABLE_CONTACTS, parameter };
}

module.exports = action;
