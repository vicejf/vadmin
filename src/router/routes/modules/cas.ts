import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const cas: AppRouteModule = {
  path: '/cas',
  name: 'Cas',
  component: LAYOUT,
  redirect: '/cas/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance',
    title: t('routes.cas.cas'),
    orderNo: 14,
  },
  children: [
    {
      path: 'index',
      name: 'CasPage',
      component: () => import('/@/views/cas/index.vue'),
      meta: {
        title: t('routes.cas.cas'),
        hideMenu: true,
      },
    },
  ],
};

export default cas;
