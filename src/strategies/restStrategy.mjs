import allPass from 'ramda/src/allPass'
import { isNotFullHealth, isNotTakingDamage } from '../helpers'

export const test = allPass([isNotFullHealth, isNotTakingDamage])
export const run = ({ warrior }) => (warrior.rest(), 'rest')
