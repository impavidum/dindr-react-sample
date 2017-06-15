import { LOGIN } from './const';

function action(parameter) {
  return { type: LOGIN, parameter };
}

module.exports = action;
