import { ENABLE_NOTIFICATIONS } from './const';

function action(parameter) {
  return { type: ENABLE_NOTIFICATIONS, parameter };
}

module.exports = action;
