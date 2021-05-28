<template>
  <div>
    <h1 class="text-center font-bold text-[36px] leading-[43.2px] mt-[50px] mb-[10px]">Uh-oh!</h1>
    <p class="text-pokedex-gray-2 text-center text-[20px] mb-[25px]">You look lost on your journey!</p>

    <div class="flex justify-center">
      <router-link
          v-if="isRoute"
          to="/"
          class="w-[155px] h-[44px] text-white px-[20px] py-[11px] flex justify-center items-center text-[18px] rounded-[60px] bg-pokedex-red-1"
      >
        Go back home
      </router-link>
      <button
          v-else
          @click="$emit('click-button')"
          class="w-[155px] h-[44px] text-white px-[20px] py-[11px] flex justify-center items-center text-[18px] rounded-[60px] bg-pokedex-red-1"
      >
        Go back home
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotFoundComponent",

    props: {
      isRoute: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>

</style>
