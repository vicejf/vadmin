export interface ListItem {
  id: string;
  avatar: string;
  // 通知的标题内容
  title: string;
  // 是否在标题上显示删除线
  titleDelete?: boolean;
  datetime: string;
  type: string;
  read?: boolean;
  description: string;
  clickClose?: boolean;
  extra?: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
  unreadlist?: ListItem[];
}

export const tabListData: TabItem[] = [
  {
    key: '1',
    name: '通知',
    list: [
      {
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '系统试运行通知',
        description: '各部门，电容器成本核算系统拟定于2024-01-10试用上线',
        datetime: '2023-10-09',
        type: '1',
      },
      {
        id: '000000003',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: '问题反馈方式',
        description: '统一汇报给电容器信息科IT管理员',
        datetime: '2023-10-07',
        // read: true,
        type: '1',
      },
      {
        id: '000000004',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: '系统说明',
        description: '目前系统部分数据为演示数据',
        datetime: '2023-10-07',
        type: '1',
      },
    ],
  },
  {
    key: '2',
    name: '消息',
    list: [
      {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '消息提醒',
        description: '系统管理员拍了拍你',
        datetime: '2023-10-07',
        type: '2',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '消息提醒',
        description: '这种模板用于提醒谁与你发生了互动',
        datetime: '2023-10-07',
        type: '2',
        clickClose: true,
      },
    ],
  },
  {
    key: '3',
    name: '待办',
    list: [
      {
        id: '000000009',
        avatar: '',
        title: '成本核算任务',
        description: '需要在2024-01-29前完成当月成本核算',
        datetime: '',
        extra: '未开始',
        color: '',
        type: '3',
      },
      {
        id: '000000010',
        avatar: '',
        title: '系统重启',
        description: '在 2024-01-07 前完成代码变更任务',
        datetime: '',
        extra: '马上到期',
        color: 'red',
        type: '3',
      },
    ],
  },
];
