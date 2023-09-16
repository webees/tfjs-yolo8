<template>
  <span class="absolute w-full h-full flex justify-center items-center">
    <van-uploader :after-read="afterRead" reupload max-count="1">
      <canvas v-if="imageUrl" ref="canvasRef" class="absolute top-0 w-full h-full" :width="yolo().inputShape[1]" :height="yolo().inputShape[2]" />
      <img v-if="imageUrl" ref="imageRef" class="w-full h-full" :src="imageUrl" @load="onImageLoad" />
      <van-button v-else icon="plus" type="primary">{{ i18n.t('Open Image') }}</van-button>
    </van-uploader>
  </span>
</template>

<script lang="ts" setup>
import { UploaderFileListItem } from 'vant'
import { detect } from '@/composables/yolo'
import i18n from '@/vue-i18n'
import { yolo } from '@/vue-pinia'

const imageUrl = ref()
const imageRef = ref<HTMLImageElement>()
const canvasRef = ref()

// uploader
function afterRead(file: UploaderFileListItem | UploaderFileListItem[]) {
  imageUrl.value = (file as UploaderFileListItem).objectUrl
}
function onImageLoad() {
  detect(imageRef.value as HTMLImageElement, canvasRef.value, () => {
    console.log('detect done')
  })
}
</script>

<style lang="less" scoped></style>
