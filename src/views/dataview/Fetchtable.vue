<template>
  <PageWrapper contentFullHeight>
    <vxe-grid ref="tableRef" v-bind="gridOptions">
      <template #toolbar_buttons>
        <!-- <vxe-button status="primary">新增</vxe-button> -->
        <vxe-button status="primary" @click="fetchEvent">抓取</vxe-button>
        <vxe-button status="primary" @click="fixEvent">补全</vxe-button>
      </template>
      <template #expand_content="{ row }">
        <div>详细：{{ row.jobContent }}</div>
      </template>
    </vxe-grid>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import { useMessage } from '@/hooks/web/useMessage';
  import { findPageList, fetchData, fixData } from '@/api/sys/dataview';
  import { VxeGridProps, VxeGridInstance } from 'vxe-table';
  import { VxeColumnPropTypes } from 'vxe-table/types/all';

  const { createMessage } = useMessage();

  const tableRef = ref<VxeGridInstance>();
  // const $gird = tableRef.value;

  interface RowVO {
    [key: string]: any;
  }

  const nameOptions = ref<VxeColumnPropTypes.Filter[]>([{ data: '' }]);

  const gridOptions = reactive<VxeGridProps<RowVO>>({
    id: 'VxeTable',
    keepSource: true,
    editConfig: { trigger: 'click', mode: 'cell', showStatus: true },
    toolbarConfig: {
      export: true,
      custom: true,
      import: true,
      slots: {
        buttons: 'toolbar_buttons',
      },
    },
    columns: [
      { type: 'checkbox', width: 50 },
      { type: 'seq', width: 60 },
      { type: 'expand', width: 80, slots: { content: 'expand_content' } },
      {
        field: 'title',
        title: '标题',
        filters: nameOptions.value,
        type: 'html',
        formatter: (params) =>
          `<a href="${params.row.url}" target="_blank">${params.cellValue}</a>`,
        width: 'auto',
        resizable: true,
      },
      {
        field: 'vdef1',
        title: '薪资',
        width: 'auto',
        showOverflow: true,
      },
      {
        field: 'author',
        title: '发布者',
        width: 'auto',
        showOverflow: true,
      },
      {
        field: 'category',
        title: '分类',
        width: 'auto',
        showOverflow: true,
      },
      {
        field: 'description',
        title: '内容',
        width: 'auto',
        visible: false,
      },
      { field: 'pubDate', title: '日期', width: 200, sortable: true },
      { field: 'postedFlag', title: 'posted', width: 80 },
      {
        field: 'url',
        title: 'url',
        visible: false,
        showOverflow: true,
      },
    ],
    columnConfig: {
      useKey: true,
    },
    rowConfig: {
      useKey: true,
    },
    formConfig: {
      enabled: true,
      items: [
        {
          field: 'title',
          // visible: false,
          title: '标题',
          span: 4,
          titlePrefix: {
            useHTML: true,
            message:
              '点击链接：<a class="link" href="https://vxetable.cn" target="_blank">vxe-table官网</a>',
            icon: 'vxe-icon-question-circle-fill',
          },
          itemRender: { name: '$input', props: { placeholder: '请输入...' } },
        },
        {
          field: 'nickname',
          title: '昵称',
          span: 4,
          itemRender: { name: '$input', props: { placeholder: '请输入昵称' } },
        },
        {
          field: 'role',
          title: '角色',
          span: 4,
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
          const params = {
            pageSize: page.pageSize,
            currentPage: page.currentPage,
            keyword: form.title,
          };
          const response = await findPageList(params);
          return {
            result: response.content,
            page: {
              total: response.totalElements,
            },
          };
        },
      },
    },
  });
  const fetchEvent = (timeout = 5000) => fetchData(timeout);

  const fixEvent = () => {
    fixData();
  };
  // 自定义筛选
  // const customFilter = (): RowVO[] => {
  //   if (tableRef.value) {
  //     const column = tableRef.value.getColumnByField('name');

  //     if (column) {
  //       // Modify first option to checked state
  //       const options = column.filters;
  //       // options[0].data = 'Test2';
  //       options[0].value = 'Test1';
  //       // options[0].checked = true;
  //       tableRef.value.setFilter(column, options);
  //       // Update grid data
  //       tableRef.value.updateData();

  //       // Get updated grid data
  //       const gridData = tableRef.value.getTableData();

  //       if (gridData && gridData.visibleData) {
  //         return gridData.visibleData as RowVO[];
  //       }
  //     }
  //   }

  //   return [];
  // };
</script>
