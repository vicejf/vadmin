import { defHttp } from '@/utils/http/axios'
import { Params } from './model/fetchModels'
import { ErrorMessageMode, SuccessMessageMode } from '#/axios'

enum Api {
  Query = '/api/query',
  Fetch = '/tasks/fetch',
  Task = '/tasks/start',
  Hotlist = '/api/hotlist',
  EastMoney = '/api/eastmoney',
  DyHotSearch = '/api/douyin',
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
    }
  )
}

export function fetchData(timeout: number, mode: SuccessMessageMode = 'message') {
  return defHttp.post<any>(
    {
      url: Api.Fetch,
      timeout: timeout,
    },
    {
      successMessageMode: mode,
    }
  )
}
export function fixData(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.Task,
    },
    {
      errorMessageMode: mode,
    }
  )
}

export function getHotlist(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<any>(
    {
      url: Api.Hotlist,
    },
    {
      errorMessageMode: mode,
    }
  )
}

export function fetchEastMoney() {
  return defHttp.get<any>(
    {
      url: Api.EastMoney,
    },
    {
      errorMessageMode: 'none',
    }
  )
}

export function getDyHotSearch() {
  return defHttp.get<any>(
    {
      url: Api.DyHotSearch,
    },
    {
      errorMessageMode: 'none',
    }
  )
}
