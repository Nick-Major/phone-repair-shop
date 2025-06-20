import { createReducer } from '@reduxjs/toolkit';
import {
  fetchServicesRequest,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsRequest,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from './actions';

const initialState = {
  services: [],
  serviceDetails: null,
  loading: false,
  error: null,
};

const servicesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchServicesRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchServicesSuccess, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    })
    .addCase(fetchServicesFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(fetchServiceDetailsRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchServiceDetailsSuccess, (state, action) => {
      state.loading = false;
      state.serviceDetails = action.payload;
    })
    .addCase(fetchServiceDetailsFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default servicesReducer;
