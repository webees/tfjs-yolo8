<template>
  <span class="absolute w-full h-full flex justify-center items-center">
    <van-uploader :after-read="afterRead" reupload max-count="1">
      <canvas v-if="imageUrl" ref="canvasRef" class="absolute top-0 w-full h-full" :width="yolo().inputShape[1]" :height="yolo().inputShape[2]" />
      <img v-if="imageUrl" ref="imageRef" :src="imageUrl" @load="onImageLoadDetect" class="w-full h-full" />
      <van-button v-else icon="plus" type="primary">{{ i18n.t('Open Image') }}</van-button>
    </van-uploader>
  </span>
</template>

<script lang="ts" setup>
import type { GraphModel, io } from '@tensorflow/tfjs'
import { UploaderFileListItem } from 'vant'
import { detect } from '@/utils/tf'
import i18n from '@/vue-i18n'
import { yolo } from '@/vue-pinia'

const imageUrl = ref()
const imageRef = ref()
const canvasRef = ref()

// uploader
function afterRead(file: UploaderFileListItem | UploaderFileListItem[]) {
  imageUrl.value = (file as UploaderFileListItem).objectUrl
}
function onImageLoadDetect() {
  detect(yolo().model as GraphModel<string | io.IOHandler>, yolo().inputShape, imageRef.value, canvasRef.value, () => {
    console.log('detect done')
  })
}
</script>

<style lang="less" scoped></style>
