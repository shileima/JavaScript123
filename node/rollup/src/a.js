export const a = 122;
export const b = 300;

import { version } from '../package.json'
export const getVersion = function () {
  console.log('version-' + version)
}
