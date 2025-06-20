import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import servicesReducer from './services/reducer';
import { servicesEpics } from './services/epics';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(servicesEpics);

export default store;