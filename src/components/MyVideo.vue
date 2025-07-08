
<script setup lang="ts">
import {useElementVisibility} from "@vueuse/core";
import {onMounted, onUnmounted, ref, useTemplateRef, watch} from "vue";

const props = defineProps<{src: string}>()
const video = useTemplateRef<HTMLVideoElement>('video')
const targetIsVisible = useElementVisibility(video)

const userInteracted = ref(false)

function handleUserInteraction() {
  userInteracted.value = true
  window.removeEventListener('click', handleUserInteraction)
  window.removeEventListener('keydown', handleUserInteraction)
  window.removeEventListener('pointerdown', handleUserInteraction)

  if (video.value) {
    // video.value.setAttribute('muted',true);
  }
}

onMounted(() => {
  window.addEventListener('click', handleUserInteraction)
  window.addEventListener('keydown', handleUserInteraction)
  window.addEventListener('pointerdown', handleUserInteraction)
})

onUnmounted(() => {
  window.removeEventListener('click', handleUserInteraction)
  window.removeEventListener('keydown', handleUserInteraction)
  window.removeEventListener('pointerdown', handleUserInteraction)
})

watch([video,targetIsVisible],([video,value]) => {
  if (video === null){
    return
  }


  console.log(value)

  if (value){
    video.preload = 'auto'
  }else{
    video.preload = 'metadata'
  }



})

watch(video,(video) => {
  if (video === null){
    return
  }

  video.load()
})
</script>

<template>
  <video :autoplay='true' :controls="true" preload="metadata" :loop="true" :muted="true" playsinline ref="video" :src="props.src"/>
</template>