export default {
  path: '/webcam',
  meta: {
    title: 'webcam',
    navbar: false,
    tabbar: true
  },
  component: () => import(/* webpackChunkName: "webcam" */ '@/views/webcam.vue'),
  children: []
}
