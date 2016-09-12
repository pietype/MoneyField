import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

import store from './store'


const MoneyFieldView = (props) => <div>
  <input type="text" value={ props.value } onChange={ props.onChange }/>
</div>
const MoneyField = connect((state) => {
  return {
    value: "$ " + state.moneyText,  // cosmetics
  }
}, (dispatch) => {
  return {
    onChange: (e) => {
      dispatch({
        type: "UPDATE_MONEY_FIELD",
        value: e.target.value.slice(2, e.target.value.length),  // cosmetics propagating here
        cursorHack: e.target.select
      })
    },
  }
})(MoneyFieldView)

const AppView = (props) => <div>
  <h1>Moneyfield</h1>
  <MoneyField />
</div>
const App = connect((state) => {
  return {}
}, (dispatch) => {
  return {}
})(AppView)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)
