import { reverse } from './helpers'

const getSpaceState = space => {
  const unit = space.getUnit()
  const isEmpty = space.isEmpty()
  const isWall = space.isWall()
  const isBound = unit ? unit.isBound() : false
  const isEnemy = unit ? unit.isEnemy() : false

  return {
    isEmpty,
    isEnemy,
    isBound,
    isWall
  }
}

const getState = ({ warrior, player }) => {
  const feel = warrior.feel(player.direction)
  const unit = feel.getUnit()
  const space = getSpaceState(feel)
  const health = warrior.health()

  return {
    ...space,
    forward: warrior.look(player.direction).map(getSpaceState),
    backward: warrior.look(reverse(player.direction)).map(getSpaceState),
    health
  }
}

export default getState
