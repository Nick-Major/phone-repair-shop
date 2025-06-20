import { createAction } from '@reduxjs/toolkit';

export const fetchServicesRequest = createAction('services/fetchServicesRequest');
export const fetchServicesSuccess = createAction('services/fetchServicesSuccess');
export const fetchServicesFailure = createAction('services/fetchServicesFailure');

export const fetchServiceDetailsRequest = createAction('services/fetchServiceDetailsRequest');
export const fetchServiceDetailsSuccess = createAction('services/fetchServiceDetailsSuccess');
export const fetchServiceDetailsFailure = createAction('services/fetchServiceDetailsFailure');
