<template>
  <div class="max-h-screen">
    <div class="mb-[61px] mt-[70px]">
      <div class="flex justify-center max-w-[325px] max-h-[288px] mx-auto">
        <img src="../assets/images/pikachu.png" alt="PIKACHU" class="w-full">
      </div>

      <h1 class="text-center text-[26px] font-bold mb-[30px] max-w-[570px] mx-auto">Welcome to Pokédex</h1>

      <p class="text-[18px] text-center text-pokedex-gray-2 max-w-[570px] mx-auto">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
      </p>
    </div>

    <div class="flex justify-center mb-[157px] sm:mb-0">
      <router-link
          to="/pokemon-list"
          class="w-[131px] h-[44px] text-white px-[20px] py-[11px] flex justify-center items-center text-[18px] rounded-[60px] bg-pokedex-red-1"
      >
        Get started
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
  }
</script>

<style scoped>

</style>
