<template>
  <van-toast></van-toast>
  <router-view />
  <tab-bar v-show="$route.meta.tabbar" />
</template>

<script lang="ts" setup>
import { showLoadingToast, closeToast } from 'vant'
import i18n from '@/vue-i18n'
import { app } from '@/vue-pinia'

// title
watch(
  () => useRoute().meta.title,
  v => {
    if (v) {
      window.document.title = i18n.t(v as string)
    }
  },
  { immediate: true }
)

// loading
watch(
  () => ref(app().loading),
  v => {
    if (v) {
      showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
    } else {
      closeToast()
    }
  },
  { immediate: true }
)
</script>

<style lang="less" scoped></style>
