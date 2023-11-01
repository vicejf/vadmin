interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '陈剑飞',
    date: '刚刚',
    desc: `更新了 <a>数据库</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '陈剑飞',
    date: '一周前',
    desc: `推送了代码到 <a>Github</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '陈剑飞',
    date: '两周前',
    desc: `创建了 <a>Oracle数据库</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '陈剑飞',
    date: '2023-09-28 15:23',
    desc: `创建了后端项目 <a>Spring Boot</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '陈剑飞',
    date: '2023-09-25 10:07',
    desc: `在 <a>测试库</a> 创建了项目 <a>Vue</a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: '自制产品成本核算',
    icon: 'ion:logo-angular',
    color: '',
    desc: '以生产订单作为成本核算对象，按生产订单计算产品成本。',
    group: '开发科',
    date: '2023-11-01',
  },
  {
    title: '委外加工产品成本核算',
    icon: 'bx:bxl-react',
    color: '#3fb27f',
    desc: '加工费成本采用采购入库核算的逻辑，由委外入库单与应付单进行勾稽核算得到。',
    group: '计划科',
    date: '2023-11-01',
  },
];
