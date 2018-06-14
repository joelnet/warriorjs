import getAction from './getAction'
import getState from './getState'

class Player {
  prevState = {
    health: 20
  }

  direction = 'backward'

  playTurn = warrior => {
    const player = this
    const state = getState({ warrior, player })
    const [action, ...args] = getAction({ warrior, player, state })

    warrior[action](...args)

    if (action === 'rescue') {
      player.direction = 'forward'
    }

    player.prevState = { ...state, action }
  }
}

global.Player = Player
