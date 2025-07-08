<template>
  <section class="relative">

      <div class="grid grid-cols-1 md:grid-cols-14 gap-5 pt-2 pl-3 pr-3 md:pl-10 md:pr-10">

        <router-link to="/GhostHunt" class="col-span-1 md:col-span-3 relative group bg-gray-800 h-80 rounded-lg overflow-hidden hover:scale-105 transition" >
          <img src="/assets/GhostHunt/thumb.jpg" alt="GhostHunt" class="w-full h-full object-cover group-hover:brightness-45 hover:scale-105  transition" />
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition">
    <h3 class="text-2xl font-bold">Spectacles - Ghost Hunt</h3>
    <hr class="my-2 w-24 border-cyan-400 border-t-2" />
    <p class="text-sm text-white-200">Game for Snap Spectacles Glasses | Lens Studio</p>
  </div>
        </router-link>

      </div>
    </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>
