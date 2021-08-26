import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { PAUSE, FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import contactsReducers from './contacts/contacts-reduser';

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PAUSE, FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER,],
    },
}).concat(logger);
const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
