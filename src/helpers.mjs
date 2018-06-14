import complement from 'ramda/src/complement'

// TODO: move to config file
const FULL_HEALTH = 20

export const reverse = direction =>
  direction === 'forward' ? 'backward' : 'forward'

export const isFullHealth = ({ state }) => state.health >= FULL_HEALTH
export const isLowHealth = ({ state }) => state.health < FULL_HEALTH / 2
export const isNotFullHealth = complement(isFullHealth)
export const isTakingDamage = ({ state, player }) =>
  player.prevState.health > state.health
export const isNotTakingDamage = complement(isTakingDamage)

export const getFirstNonEmpty = ([space, ...spaces]) =>
  space == null || (!space.isEmpty && !space.isWall)
    ? space
    : getFirstNonEmpty(spaces)

export const isEnemy = space => space != null && !!space.isEnemy
