import cond from 'ramda/src/cond'
import * as attack from './strategies/attackStrategy'
import * as rescue from './strategies/rescueStrategy'
import * as retreat from './strategies/retreatStrategy'
import * as rest from './strategies/restStrategy'
import * as walk from './strategies/walkStrategy'

const getAction = cond([
  [retreat.test, retreat.run],
  [rescue.test, rescue.run],
  [attack.test, attack.run],
  [rest.test, rest.run],
  [walk.test, walk.run]
])

export default getAction
