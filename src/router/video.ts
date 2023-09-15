export default {
  path: '/video',
  meta: {
    title: 'video',
    navbar: false,
    tabbar: true
  },
  component: () => import(/* webpackChunkName: "video" */ '@/views/video.vue'),
  children: []
}
