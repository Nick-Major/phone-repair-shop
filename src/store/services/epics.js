import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from } from 'rxjs';
import {
  fetchServices as fetchServicesApi,
  fetchServiceDetails as fetchServiceDetailsApi,
} from '../../api/servicesApi';
import {
  fetchServicesRequest,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsRequest,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from './actions';

const fetchServicesEpic = (action$) =>
  action$.pipe(
    ofType(fetchServicesRequest.type),
    mergeMap(() =>
      from(fetchServicesApi()).pipe(
        map((response) => fetchServicesSuccess(response)),
        catchError((error) => [fetchServicesFailure(error.message)])
      )
    )
  );

const fetchServiceDetailsEpic = (action$) =>
  action$.pipe(
    ofType(fetchServiceDetailsRequest.type),
    mergeMap((action) =>
      from(fetchServiceDetailsApi(action.payload)).pipe(
        map((response) => fetchServiceDetailsSuccess(response)),
        catchError((error) => [fetchServiceDetailsFailure(error.message)])
      )
    )
  );

export const servicesEpics = combineEpics(
  fetchServicesEpic,
  fetchServiceDetailsEpic
);
