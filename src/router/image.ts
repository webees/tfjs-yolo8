export default {
  path: '/image',
  meta: {
    title: 'image',
    navbar: false,
    tabbar: true
  },
  component: () => import(/* webpackChunkName: "image" */ '@/views/image.vue'),
  children: []
}
