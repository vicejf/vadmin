import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const dataview: AppRouteModule = {
  path: '/dataview',
  name: 'dataview',
  component: LAYOUT,
  redirect: '/dataview/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance',
    title: t('routes.dataview.dataview'),
    orderNo: 10,
  },
  children: [
    {
      path: 'index',
      name: 'CasPage',
      component: () => import('@/views/dataview/index.vue'),
      meta: {
        title: t('routes.dataview.dataview'),
        hideMenu: true,
      },
    },
  ],
};

export default dataview;
