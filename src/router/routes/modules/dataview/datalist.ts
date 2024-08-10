import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

// const IFrame = () => import('@/views/sys/iframe/FrameBlank.vue');
const dataview: AppRouteModule = {
  path: '/dataview',
  name: 'Dataview',
  component: LAYOUT,
  redirect: '/dataview/fetchtable',
  meta: {
    hideChildrenInMenu: false,
    icon: 'flat-color-icons:add-database',
    title: t('routes.dataview.dataview'),
    orderNo: 10,
  },
  children: [
    {
      path: 'fetchtable',
      name: 'Fetchtable',
      component: () => import('@/views/dataview/Fetchtable.vue'),
      meta: {
        title: t('routes.dataview.fetchtable'),
        hideMenu: false,
        // ignoreKeepAlive: true,
      },
    },
    {
      path: 'fetchctrl',
      name: 'FetchCtrl',
      component: () => import('@/views/dataview/FetchCtrl.vue'),
      meta: {
        title: t('routes.dataview.fetchctrl'),
        hideMenu: false,
        // ignoreKeepAlive: true,
      },
    },
  ],
};

export default dataview;
