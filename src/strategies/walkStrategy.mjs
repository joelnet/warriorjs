export const test = () => true

export const run = ({ warrior, player }) => (
  warrior.walk(player.direction), 'walk'
)
