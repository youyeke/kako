export default {
  layout: 'Grid',
  items: [
    {
      span: 24,
      support: 'Search',
      component: 'Search',
    },
    {
      span: 24,
      support: 'List',
      component: 'List',
      ready: true,
      config: {
        fields: [
          { field: 'id', label: 'ID' },
          { field: 'name', label: '姓名' }
        ],
        options: [
          { title: '编辑', action: 'edit' },
          { title: '删除', action: 'delete' }
        ],
      },
      listData: {
        data: [
          { id: '10086', name: '张三' },
          { id: '10087', name: '李四' },
          { id: '10088', name: '老王' },
        ],
      },
    },
  ],
}