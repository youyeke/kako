export default {
  layout: 'Grid',
  default: [
    {
      span: 24,
      keepLive: false,
      support: 'search',
      component: 'Search',
      routerStatus: {},
    },
    {
      span: 24,
      keepLive: false,
      support: 'list',
      component: 'List',
      routerStatus: {},
      removeChild: true,
    },
  ],
  form: [],
}