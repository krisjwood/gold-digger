import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className='app'>
        <section className="hero is-primary is-small">
          <div className="hero-body">
            <h1 className="title is-1">Gold Digger</h1>
            <p className="subtitle is-3">Gold tracker for the kids</p>
          </div>
        </section>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <div className="columns is-mobile is-centered is-primary">
          <div className="column box is-primary">
            <p className="title">Lily</p>
            <p>Bla bla Bla</p>
          </div>
          <div className="column title">Fred</div>
          <div className="column title">Ruby</div>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
