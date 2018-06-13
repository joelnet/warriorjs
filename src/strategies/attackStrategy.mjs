export const test = ({ state }) => state.isEnemy
export const run = ({ warrior, player }) => (
  warrior.attack(player.direction), 'attack'
)
