import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Correct import
import categoryReducer from './categorySlice';
import cartReducer from './cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    categoryReducer,
    cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);