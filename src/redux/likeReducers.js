import { DECREMENT } from './types'
import { INCREMENT } from './types'
import { INPUT } from './types'

const initialState = {
  likes: 0,
  title: 'My picture',
  input: ''
}

export const likeReducer = (state = initialState, action) => {
  console.log('reducer>', action)

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      }
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      }
      case INPUT:
        return {
          ...state,
          input: action.input,
        }
    default:
      return state
  }
}
