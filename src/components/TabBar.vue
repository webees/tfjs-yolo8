<template>
  <van-tabbar route>
    <van-tabbar-item icon="photo-o" to="/image">
      <span>{{ $t('_tabbar.image') }}</span>
    </van-tabbar-item>

    <van-tabbar-item icon="video-o" to="/video">
      <span>{{ $t('_tabbar.video') }}</span>
    </van-tabbar-item>

    <van-tabbar-item icon="eye-o" to="/webcam">
      <span>{{ $t('_tabbar.webcam') }}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
