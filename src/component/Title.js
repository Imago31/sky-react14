import { connect } from 'react-redux'

function Title(props) {


  return (
    <div className="card-title">
      <div className="card-title-top">
        <input className='input' type="text" onChange={props.inp} />
        <p>{props.input}</p>
      </div>
      <p>{props.title}</p>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    inp: () => {
      
      const action = { type: 'INPUT',
                       input:  document.querySelector('.input').value
                     }
      console.log('click_title')
      console.log(action)
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
    title: state.title,
    input: state.input
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Title)
