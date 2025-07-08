<template>
  <header class="static md:sticky backdrop-blur">
    <div class="header-content ml-auto mr-auto mb-4 p-1 pt-4 md:pt-2 md:pb-2 md:pl-4 md:pr-4 flex flex-col md:flex-row justify-between items-center">
      <router-link to="/" class="logo-home flex items-center space-x-4">
        <img src="/assets/Logo.jpg" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
        <div class="leading-tight">
          <h2 class="text-lg font-bold text-primary">Vadym Stovbunskyi</h2>
          <p class="text-muted text-sm">Graphics Developer & Technical Artist</p>
        </div>
      </router-link>

      <nav class="p-3 w-full md:w-auto lg:-mb-0 lg:p-0 lg:space-x-6 ">
        <router-link to="/" class="pl-2 pr-5 lg:pl-0 lg:pr-0 hover:text-primary transition">Home</router-link>
        <router-link to="/about" class="pl-5 pr-5 lg:pl-0 lg:pr-0 hover:text-primary transition">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
