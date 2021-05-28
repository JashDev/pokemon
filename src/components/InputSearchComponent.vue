<template>
  <div class="relative ">
    <input
        class="h-[50px] w-[315px] sm:w-[570px] py-[14px] pl-[43px] rounded-[5px] input-search outline-none active:outline-none leading-[22.4px]"
        placeholder="Search"
        type="text"
        v-model="querySearch"
        @input="$emit('input', querySearch)"
    >
    <img src="../assets/icons/search.svg" alt="Seach icon" class="absolute top-[16px] left-[15px]">
  </div>
</template>

<script>
  export default {
    name: "InputSearchComponent",

    props: {
      value: {
        type: String,
        default: ''
      }
    },

    data: () => ({
      querySearch: ''
    }),

    watch: {
      value(n) {
        this.querySearch = n
      }
    },

    mounted() {
      this.querySearch = this.value
    }
  }
</script>

<style scoped>
  .input-search {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
  }

  .input-search::placeholder {
    color: #BFBFBF;
  }
</style>
