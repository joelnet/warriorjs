const getState = ({ warrior, player }) => {
  const feel = warrior.feel(player.direction)
  const isEmpty = feel.isEmpty()
  const unit = feel.getUnit()
  const isBound = unit ? unit.isBound() : false
  const isEnemy = unit ? unit.isEnemy() : false
  const health = warrior.health()

  return {
    isEmpty,
    isEnemy,
    isBound,
    health
  }
}

export default getState
