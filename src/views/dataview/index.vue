<template>
  <PageWrapper
    content="在现代成本管理的过程中，预测、决策、分析、控制和核算都是密不可分的，在预测、决策中要进行成本的分析，要对企业核算的数据进行研究，并且核算的数据也是其他各个环节的依据。"
    contentFullHeight
    fixedHeight
  >
    <vxe-grid ref="tableRef" v-bind="gridOptions">
      <!-- <template #action="{ row }">
        <TableAction outside :actions="createActions(row)" />
      </template> -->
    </vxe-grid>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  // import { ActionItem, TableAction } from '/@/components/Table';
  import { PageWrapper } from '@/components/Page';
  import { useMessage } from '@/hooks/web/useMessage';
  // import { vxeTableColumns } from '/@/views/demo/table/tableData';
  import { findPageList } from '@/api/sys/dataview';
  import { VxeGridProps, VxeGridInstance } from 'vxe-table';
  import { VxeColumnPropTypes } from 'vxe-table/types/all';

  const { createMessage } = useMessage();

  const tableRef = ref<VxeGridInstance>();
  const $gird = tableRef.value;

  interface RowVO {
    [key: string]: any;
  }

  const nameOptions = ref<VxeColumnPropTypes.Filter[]>([{ data: '' }]);

  const gridOptions = reactive<VxeGridProps<RowVO>>({
    id: 'VxeTable',
    keepSource: true,
    editConfig: { trigger: 'click', mode: 'cell', showStatus: true },
    columns: [
      { type: 'checkbox', width: 50 },
      { type: 'seq', width: 60 },
      {
        field: 'title',
        title: 'title',
        filters: nameOptions.value,
      },
      { field: 'nickname', title: 'Nickname' },
      { field: 'role', title: 'Role' },
      { field: 'address', title: 'Address', showOverflow: true },
    ],
    toolbarConfig: {
      import: true,
      export: true,
      custom: true,
      buttons: [
        {
          content: '在第一行新增',
          buttonRender: {
            name: 'AButton',
            props: {
              type: 'primary',
              preIcon: 'mdi:page-next-outline',
            },
            events: {
              click: () => {
                $gird?.insert({ name: '新增的' });
                createMessage.success('新增成功');
              },
            },
          },
        },
        {
          content: '在最后一行新增',
          buttonRender: {
            name: 'AButton',
            props: {
              type: 'warning',
            },
            events: {
              click: () => {
                $gird?.insertAt({ name: '新增的' }, -1);
              },
            },
          },
        },
      ],
    },
    formConfig: {
      enabled: true,
      items: [
        {
          field: 'name',
          title: '列1',
          span: 8,
          titlePrefix: { message: 'app.body.valid.rName', icon: 'vxe-icon-question-circle-fill' },
          itemRender: { name: '$input', props: { placeholder: '请输入名称' } },
        },
        {
          field: 'title',
          // visible: false,
          title: '标题',
          span: 8,
          titlePrefix: {
            useHTML: true,
            message:
              '点击链接：<a class="link" href="https://vxetable.cn" target="_blank">vxe-table官网</a>',
            icon: 'vxe-icon-question-circle-fill',
          },
          itemRender: { name: '$input', props: { placeholder: '请输入邮件' } },
        },
        {
          field: 'nickname',
          title: '昵称',
          span: 8,
          itemRender: { name: '$input', props: { placeholder: '请输入昵称' } },
        },
        {
          field: 'role',
          title: '角色',
          span: 8,
          folding: true,
          itemRender: { name: '$input', props: { placeholder: '请输入角色' } },
        },
        {
          field: 'sex',
          title: '性别',
          span: 8,
          folding: true,
          titleSuffix: { message: '注意，必填信息！', icon: 'vxe-icon-question-circle-fill' },
          itemRender: { name: '$select', options: [] },
        },
        {
          field: 'age',
          title: '年龄',
          span: 8,
          folding: true,
          itemRender: {
            name: '$input',
            props: { type: 'number', min: 1, max: 120, placeholder: '请输入年龄' },
          },
        },
        {
          span: 24,
          align: 'center',
          collapseNode: true,
          itemRender: {
            name: '$buttons',
            children: [
              { props: { type: 'submit', content: '查询', status: 'primary' } },
              { props: { type: 'reset', content: '重置' } },
            ],
          },
        },
      ],
    },
    importConfig: {
      // 自定义类型
      types: ['xlsx'],
    },
    exportConfig: {
      type: 'xlsx',
      // 自定义类型
      types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
    },
    pagerConfig: {
      enabled: true,
      pageSize: 10,
      pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
    },
    height: 'auto',
    proxyConfig: {
      filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
      form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
      props: {
        result: 'result',
        total: 'page.total',
      },
      ajax: {
        query: async ({ page, form }) => {
          // 调用接口获取数据
          const response = await findPageList(page);

          // const dataList = response.result;

          if (form.name) {
            console.log('responsedata1', response.result.values);
            const filteredList = customFilter();
            // const filteredList = dataList?.values.filter((item) => {
            //   // 在这里添加过滤条件，例如：
            //   return item.name.startsWith(form.name);
            // });
            return {
              result: filteredList,
              page: {
                total: filteredList.length,
              },
            };
          }
          console.log('responsedata2', response.result.values);
          return response.result.values;
        },
        // queryAll: async ({ form }) => {
        //   return await demoListApi(form);
        // },
      },
    },
  });
  // 自定义筛选
  const customFilter = (): RowVO[] => {
    if (tableRef.value) {
      const column = tableRef.value.getColumnByField('name');

      if (column) {
        // Modify first option to checked state
        const options = column.filters;
        // options[0].data = 'Test2';
        options[0].value = 'Test1';
        // options[0].checked = true;
        tableRef.value.setFilter(column, options);
        // Update grid data
        tableRef.value.updateData();

        // Get updated grid data
        const gridData = tableRef.value.getTableData();

        if (gridData && gridData.visibleData) {
          return gridData.visibleData as RowVO[];
        }
      }
    }

    return [];
  };

  // 操作按钮（权限控制）
  // const createActions = (record) => {
  //   const actions: ActionItem[] = [
  //     {
  //       label: '详情',
  //       onClick: () => {
  //         console.log(record);
  //       },
  //     },
  //     {
  //       label: '编辑',
  //       onClick: () => {},
  //     },
  //     {
  //       label: '删除',
  //       color: 'error',
  //       popConfirm: {
  //         title: '是否确认删除',
  //         confirm: () => {
  //           tableRef.value?.remove(record);
  //         },
  //       },
  //     },
  //   ];

  //   return actions;
  // };
</script>
