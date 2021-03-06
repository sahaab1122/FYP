import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer'
import appReducer from './reducers/appReducer'
import cartReducer from './reducers/cartReducer'

import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
    authReducer,
    appReducer,
    cartReducer
    
})


const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    blacklist: ['globalReducer','authReducer', ]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store)
 
export default { store, persistor };