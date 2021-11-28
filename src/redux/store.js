import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import counterReducer from "./counter/counter-reducer"
import todosReducer from "./todos/todos-reducer"
//Экшн дошел до редюсера

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
