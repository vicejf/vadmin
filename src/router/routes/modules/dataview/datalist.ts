import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const dataview: AppRouteModule = {
  path: '/dataview',
  name: 'Dataview',
  component: LAYOUT,
  redirect: '/dataview/fetchtable',
  meta: {
    hideChildrenInMenu: true,
    icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance',
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
        hideMenu: true,
      },
    },
  ],
};

export default dataview;
