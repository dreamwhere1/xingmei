import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import saga from './saga'
import home from './home/reducer'
import search from './search/reducer'
import detail from './detail/reducer'
import movie from './movie/reducer'
import login from './login/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleWare = createSagaMiddleWare(saga)

export default createStore(
  combineReducers({ home, search, detail, movie, login }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(saga)
