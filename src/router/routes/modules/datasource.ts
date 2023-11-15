import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const data: AppRouteModule = {
  path: '/data',
  name: 'Data',
  component: LAYOUT,
  redirect: '/data/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'flat-color-icons:add-database',
    title: t('routes.datasource.datasource'),
    orderNo: 14,
  },
  children: [
    {
      path: 'index',
      name: 'DataPage',
      component: () => import('/@/views/data/index.vue'),
      meta: {
        title: t('routes.datasource.datasource'),
        hideMenu: true,
      },
    },
  ],
};

export default data;
