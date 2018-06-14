import { getFirstNonEmpty, isEnemy } from '../helpers'

export const test = ({ state }) =>
  state.isEnemy || isEnemy(getFirstNonEmpty(state.forward))
export const run = ({ player }) => ['shoot', player.direction]
