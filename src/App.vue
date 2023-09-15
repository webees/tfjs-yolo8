<template>
  <router-view />
  <tab-bar v-show="$route.meta.tabbar" />
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import i18n from '@/vue-i18n'

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
</script>

<style lang="less" scoped></style>
