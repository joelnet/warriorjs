import playTurn from './playTurn'
import getState from './getState'

class Player {
  prevState = {
    health: 20
  }

  direction = 'backward'

  playTurn = warrior => {
    const player = this
    const state = getState({ warrior, player })
    const action = playTurn({ warrior, player, state })

    if (action === 'rescue') {
      player.direction = 'forward'
    }

    player.prevState = { ...state, action }
  }
}

global.Player = Player
