<template>
  <span class="absolute w-full h-full flex justify-center items-center">
    <van-uploader :after-read="afterRead" reupload max-count="1" accept="video/*">
      <canvas v-if="videoUrl" ref="canvasRef" class="absolute top-0 w-full h-full" :width="yolo().inputShape[1]" :height="yolo().inputShape[2]" />
      <video v-if="videoUrl" ref="videoRef" class="w-full h-full" :src="videoUrl" controls autoplay @play="onVideoPlayDetect" />
      <van-button v-else icon="plus" type="primary">{{ i18n.t('Open Video') }}</van-button>
    </van-uploader>
  </span>
</template>

<script lang="ts" setup>
import type { GraphModel, io } from '@tensorflow/tfjs'
import { UploaderFileListItem } from 'vant'
import { detectVideo, unDetectVideo } from '@/utils/tf'
import i18n from '@/vue-i18n'
import { yolo } from '@/vue-pinia'

const videoUrl = ref()
const videoRef = ref()
const canvasRef = ref()
let videoID = ref()

// uploader
function afterRead(file: UploaderFileListItem | UploaderFileListItem[]) {
  videoUrl.value = (file as UploaderFileListItem).objectUrl
}
function onVideoPlayDetect() {
  videoID.value = detectVideo(yolo().model as GraphModel<string | io.IOHandler>, yolo().inputShape, videoRef.value, canvasRef.value)
}

onBeforeUnmount(() => {
  unDetectVideo(videoID.value)
})
</script>

<style lang="less" scoped></style>
