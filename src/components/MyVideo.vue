
<script setup lang="ts">
import {useElementVisibility} from "@vueuse/core";
import {useTemplateRef, watch} from "vue";

const props = defineProps<{src: string}>()
const video = useTemplateRef<HTMLVideoElement>('video')
const targetIsVisible = useElementVisibility(video)

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
  <video :autoplay='true' :controls="true" preload="metadata" :loop="true" :muted="true" playsinline ref="video" >
    <source :src="props.src" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</template>