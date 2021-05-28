<template>
  <div class="w-screen h-[80px] bg-white flex items-center justify-center fixed bottom-0 footer-list">
    <router-link
        to="/pokemon-list"
        class="w-[150px] h-[44px] md:w-[275px] text-white  text-[18px] rounded-[60px] bg-pokedex-gray-1 flex justify-center items-center mr-[15px] active:outline-none"
    >
      <img src="../assets/icons/list.svg" alt="list" class="mr-[10px]">
      All
    </router-link>
    <router-link
        to="/pokemon-list/favorites"
        class="w-[150px] h-[44px] md:w-[275px] text-white  text-[18px] rounded-[60px] bg-pokedex-gray-1 flex justify-center items-center active:outline-none"
    >
      <img src="../assets/icons/favorite.svg" alt="favorite" class="mr-[10px]">
      Favorites
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "FooterListComponent",
  }
</script>

<style scoped>
  .footer-list {
    box-shadow: 0 -5px 4px 0 rgba(0, 0, 0, 0.05)
  }

  .router-link-exact-active {
    background-color: rgba(242, 37, 57, 1);
  }
</style>
