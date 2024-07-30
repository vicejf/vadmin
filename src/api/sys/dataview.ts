import { defHttp } from '@/utils/http/axios';
import { Params } from './model/fetchModels';
import { ErrorMessageMode } from '#/axios';

enum Api {
  QueryFetch = '/fetch',
}

/**
 * @description: database query
 */
export function findPageList(params: Params, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<any>(
    {
      url: Api.QueryFetch,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
