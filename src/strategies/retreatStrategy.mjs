import allPass from 'ramda/src/allPass'
import { isLowHealth, isTakingDamage, reverse } from '../helpers'

export const test = allPass([isLowHealth, isTakingDamage])

export const run = ({ player }) => ['walk', reverse(player.direction)]
