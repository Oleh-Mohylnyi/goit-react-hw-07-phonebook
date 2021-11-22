// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
import contactsReducer from './contacts/reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const contactsPersistConfig = {
  key: 'phonebook',
    storage,
    whitelist: [],
    blacklist: ['filter']
}

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}), logger];

const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer)
    },
    middleware,
    // devTools: process.env.MODE.ENV === 'development'
});

const persistor = persistStore(store);

// const store = createStore(rootReducer, composeWithDevTools());

const storeForExport = { store, persistor };

export default storeForExport;
