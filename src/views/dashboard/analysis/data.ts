export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '材料费',
    icon: 'download-count|svg',
    value: 120000,
    total: 1230000,
    color: 'green',
    action: '月',
  },
  {
    title: '人工费',
    icon: 'total-sales|svg',
    value: 2000000,
    total: 25300000,
    color: 'blue',
    action: '月',
  },
  {
    title: '能耗',
    icon: 'visit-count|svg',
    value: 180000,
    total: 1189000,
    color: 'orange',
    action: '月',
  },
  {
    title: '销售额',
    icon: 'transaction|svg',
    value: 5000000,
    total: 55680000,
    color: 'purple',
    action: '月',
  },
];
