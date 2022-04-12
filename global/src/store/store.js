import {combineReducers, configureStore} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import {passengerSlice} from "./passenggerSlice";

const reducers = combineReducers({
  passenger: passengerSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({reducer: persistedReducer});
const persistor = persistStore(store);

export {store, persistor};
