<template>
  <div>
    <Header />
    <router-view />
    <ProjectNav />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import ProjectNav from './components/ProjectNav.vue';


export default {
  components: {
    Header,
    ProjectNav
  },
};
</script>
