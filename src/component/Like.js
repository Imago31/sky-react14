import { connect } from 'react-redux'
import Title from './Title'

function Likes(props) {
  console.log('render>', props)
  return (
    <div>
      <Title />
      <div className="button-controls">
        <button onClick={props.onIncrement}> ❤ {props.likes} </button>
        <button onClick={props.onDecrement}>Dislike</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
    likes: state.likes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      console.log('click +')
      const action = { type: 'INCREMENT' }
      dispatch(action)
    },
    onDecrement: () => {
      console.log('click -')
      const action = { type: 'DECREMENT' }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
