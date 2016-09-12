import { createStore } from 'redux'

const moneyFieldReducer = (state="", action) => {
  switch (action.type) {
    case "UPDATE_MONEY_FIELD":
      const commaAdjustedValue = ((value) => {
          // I got lazy, refactor this if you can
          const _value = value.replace(/,/g, '')
          const lio = _value.lastIndexOf('.')
          const start = lio != -1 ? lio - 1 : _value.length - 1
          var output = ""
          for (var i = 0; i <= start; i++) {
            if(i % 3 == 0 && i > 0){
              output = ',' + output
            }
            output = _value[start - i] + output
          }
          if (lio != -1) {
            output = output + _value.slice(lio)
          }
          return output
      })(action.value)
      const validationPattern = /^((\d{1,3}(,\d{3})*)|(\d{0,3}))(\.\d{0,2})?$/

      if(commaAdjustedValue.search(validationPattern) == 0) {
        return commaAdjustedValue
      }
      return state
    default:
      return state
  }
}

const topLevelReducer = (state={}, action) => {
  return {
    moneyText: moneyFieldReducer(state.moneyText, action),
  }
}

const store = createStore(topLevelReducer)


export default store
export const _test = {
  topLevelReducer
}
