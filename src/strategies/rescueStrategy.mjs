export const test = ({ state }) => state.isBound
export const run = ({ warrior, player }) => (
  warrior.rescue(player.direction), 'rescue'
)
