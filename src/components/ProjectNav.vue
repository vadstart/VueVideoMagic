
<template>
  <div v-if="isProjectPage">
    <button
      v-if="prevProject"
      @click="goTo(prevProject.path)"
      class="fixed top-1/2 left-0 transform -translate-y-1/2 px-1 md:px-3 py-2 text-4xl md:text-6xl text-white rounded-r hover:cursor-pointer hover:text-teal-400 transition z-50"
    >
      ‹
    </button>

    <button
      v-if="nextProject"
      @click="goTo(nextProject.path)"
      class="fixed top-1/2 right-0 transform -translate-y-1/2 px-1 md:px-3 py-2 text-4xl md:text-6xl text-white rounded-l hover:cursor-pointer hover:text-teal-400 transition z-50"
    >
      ›
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { projectRoutes } from '../router'

const route = useRoute()
const router = useRouter()

const currentIndex = computed(() =>
  projectRoutes.findIndex(r => r.path === route.path)
)

const prevProject = computed(() => {
  const index = currentIndex.value
  if (index === -1) return null
  return projectRoutes[(index - 1 + projectRoutes.length) % projectRoutes.length]
})

const nextProject = computed(() => {
  const index = currentIndex.value
  if (index === -1) return null
  return projectRoutes[(index + 1) % projectRoutes.length]
})

const isProjectPage = computed(() =>
  projectRoutes.some(r => r.path === route.path)
)

function goTo(path: string) {
  router.push(path)
}
</script>


