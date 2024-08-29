<template>
  <PageWrapper contentFullHeight fixedHeight>
    <vxe-grid ref="tableRef" v-bind="gridOptions">
      <template #toolbar_buttons>
        <!-- <vxe-button status="primary">新增</vxe-button> -->
        <vxe-button status="primary" @click="fetchEvent">抓取</vxe-button>
        <vxe-button status="primary" @click="fixEvent">补全</vxe-button>
      </template>
      <template #expand_content="{ row }">
        <div v-html="row.description"></div>
      </template>
    </vxe-grid>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { onMounted, reactive, ref, watch } from 'vue'
  import { PageWrapper } from '@/components/Page'
  import { useMessage } from '@/hooks/web/useMessage'
  import { findPageList, fetchData, fixData } from '@/api/sys/dataview'
  import { VxeGridProps, VxeGridInstance } from 'vxe-table'
  import { VxeColumnPropTypes } from 'vxe-table/types/all'
  import { useRootSetting } from '@/hooks/setting/useRootSetting'
  import VxeUI, { VxeGlobalThemeName } from 'vxe-pc-ui'

  const { createMessage } = useMessage()
  const { getDarkMode } = useRootSetting()
  const tableRef = ref<VxeGridInstance>()
  // const $gird = tableRef.value;

  interface RowVO {
    [key: string]: any
  }

  onMounted(() => {
    VxeUI.setTheme(getDarkMode.value as VxeGlobalThemeName)
  })

  watch(getDarkMode, () => {
    VxeUI.setTheme(getDarkMode.value as VxeGlobalThemeName)
  })

  const nameOptions = ref<VxeColumnPropTypes.FilterItem[]>([{ data: '' }])

  const gridOptions = reactive<VxeGridProps<RowVO>>({
    id: 'VxeTable',
    keepSource: true,
    editConfig: { trigger: 'click', mode: 'cell', showStatus: true },
    toolbarConfig: {
      export: true,
      custom: true,
      import: true,
      slots: {
        buttons: 'toolbar_buttons'
      }
    },
    expandConfig: {
      padding: true
    },
    columns: [
      // { type: 'checkbox', width: 50 },
      { type: 'seq', title: 'No.', width: 45 },
      { type: 'expand', width: 35, slots: { content: 'expand_content' } },
      {
        field: 'title',
        title: '标题',
        filters: nameOptions.value,
        type: 'html',
        formatter: (params) =>
          `<a href="${params.row.link}" target="_blank">${params.cellValue}</a>`,
        width: 200,
        resizable: true
      },
      {
        field: 'vdef1',
        title: '薪资',
        width: 'auto',
        showOverflow: true
      },
      {
        field: 'author',
        title: '发布者',
        width: 'auto',
        showOverflow: true
      },
      {
        field: 'vdef2',
        title: '地址',
        width: 'auto',
        showOverflow: true
      },
      {
        field: 'category',
        title: '分类',
        width: 'auto',
        showOverflow: true
      },
      {
        field: 'description',
        title: '内容',
        width: 'auto',
        visible: false,
        type: 'html',
        slots: { content: 'expand_content' }
      },
      { field: 'pubDate', title: '日期', width: 110, sortable: true },
      { field: 'postedFlag', title: 'posted', width: 80 },
      {
        field: 'link',
        title: '链接',
        width: 'auto',
        visible: false,
        showOverflow: true
      }
    ],
    columnConfig: {
      useKey: true
    },
    rowConfig: {
      useKey: true
    },
    formConfig: {
      enabled: true,
      items: [
        {
          field: 'title',
          // visible: false,
          // title: '标题',
          span: 12,
          // titlePrefix: {
          //   useHTML: true,
          //   message:
          //     '点击链接：<a class="link" href="https://vxetable.cn" target="_blank">vxe-table官网</a>',
          //   icon: 'vxe-icon-question-circle-fill',
          // },
          itemRender: { name: '$input', props: { placeholder: '请输入...' } }
        },
        // {
        //   field: 'sex',
        //   title: '性别',
        //   span: 4,
        //   folding: true,
        //   titleSuffix: { message: '注意，必填信息！', icon: 'vxe-icon-question-circle-fill' },
        //   itemRender: { name: '$select', options: [] },
        // },
        // {
        //   field: 'age',
        //   title: '年龄',
        //   span: 4,
        //   folding: true,
        //   itemRender: {
        //     name: '$input',
        //     props: { type: 'number', min: 1, max: 120, placeholder: '请输入年龄' },
        //   },
        // },
        {
          span: 12,
          align: 'center',
          // collapseNode: true,
          itemRender: {
            name: '$buttons',
            children: [
              { props: { type: 'submit', content: '查询', status: 'primary' } },
              { props: { type: 'reset', content: '重置' } }
            ]
          }
        }
      ]
    },
    importConfig: {
      // 自定义类型
      types: ['xlsx']
    },
    exportConfig: {
      type: 'xlsx',
      // 自定义类型
      types: ['xlsx', 'csv', 'html', 'xml', 'txt']
    },
    pagerConfig: {
      enabled: true,
      pageSize: 10,
      pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000]
    },
    height: 'auto',
    proxyConfig: {
      filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
      form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
      props: {
        result: 'result',
        total: 'page.total'
      },
      ajax: {
        query: async ({ page, form }) => {
          const params = {
            pageSize: page.pageSize,
            currentPage: page.currentPage,
            keyword: form.title
          }
          const response = await findPageList(params)
          return {
            result: response.content,
            page: {
              total: response.totalElements
            }
          }
        }
      }
    }
  })
  const fetchEvent = (timeout = 5000) => fetchData(timeout)

  const fixEvent = () => {
    fixData()
  }
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
