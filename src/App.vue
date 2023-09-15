<template>
  <van-toast></van-toast>
  <router-view />
  <tab-bar v-show="$route.meta.tabbar" />
</template>

<script lang="ts" setup>
import { showLoadingToast, closeToast } from 'vant'
import i18n from '@/vue-i18n'
import { yolo } from '@/vue-pinia'
import { loadModel } from '@/utils/tf'

// title
const route = useRoute()
watch(
  () => route.meta.title,
  v => {
    if (v) {
      window.document.title = i18n.t(v as string)
    }
  },
  { immediate: true }
)

// loading
watch(
  () => yolo().loading,
  v => {
    if (v < 1) {
      showLoadingToast({
        message: `${(v * 100).toFixed(0)}%`,
        loadingType: 'spinner',
        forbidClick: true,
        duration: 0,
        onOpened: () => {
          loadModel() // loadGraphModel
        }
      })
    } else {
      closeToast()
    }
  },
  { immediate: true }
)
</script>

<style lang="less" scoped></style>
