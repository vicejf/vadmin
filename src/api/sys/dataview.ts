import { defHttp } from '@/utils/http/axios';
import { Params } from './model/fetchModels';
import { ErrorMessageMode } from '#/axios';

enum Api {
  Query = '/api/query',
  Fetch = '/tasks/fetch',
  Task = '/tasks/start',
}

/**
 * @description: database query
 */
export function findPageList(params: Params, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<any>(
    {
      url: Api.Query,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function fetchData(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.Fetch,
    },
    {
      errorMessageMode: mode,
    },
  );
}
export function fixData(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.Task,
    },
    {
      errorMessageMode: mode,
    },
  );
}
