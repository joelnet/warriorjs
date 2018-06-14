import { reverse } from '../helpers'

export const test = ({ state }) => state.isWall
export const run = ({ player }) => ['pivot', reverse(player.direction)]
