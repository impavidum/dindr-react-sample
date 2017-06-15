import { ENABLE_LOCATION } from './const';

function action(parameter) {
  return { type: ENABLE_LOCATION, parameter };
}

module.exports = action;
