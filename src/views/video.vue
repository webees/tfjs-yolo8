<template>
  <span class="absolute w-full h-full flex justify-center items-center">
    <van-uploader :after-read="afterRead" reupload max-count="1" accept="video/*">
      <canvas v-if="videoUrl" ref="canvasRef" class="absolute top-0 w-full h-full" :width="yolo().inputShape[1]" :height="yolo().inputShape[2]" />
      <video v-if="videoUrl" ref="videoRef" class="w-full h-full" :src="videoUrl" @play="onVideoPlay" controls muted autoplay />
      <van-button v-else icon="plus" type="primary">{{ i18n.t('Open Video') }}</van-button>
    </van-uploader>
  </span>
</template>

<script lang="ts" setup>
import { UploaderFileListItem } from 'vant'
import { detectVideo } from '@/composables/yolo'
import i18n from '@/vue-i18n'
import { yolo } from '@/vue-pinia'

const videoUrl = ref<string>()
const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref()

// uploader
function afterRead(file: UploaderFileListItem | UploaderFileListItem[]) {
  videoUrl.value = (file as UploaderFileListItem).objectUrl
}
function onVideoPlay() {
  detectVideo(videoRef.value as HTMLVideoElement, canvasRef.value)
}

onBeforeUnmount(() => {
  videoUrl.value = ''
  videoRef.value!.pause()
})
</script>

<style lang="less" scoped></style>
