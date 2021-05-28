<template>
  <div>
    <loading v-if="isLoading"/>
    <router-view v-else/>

    <footer-list-component v-if="!isLoading"/>

    <modal-component v-if="$store.state.showPokemonModal"/>
  </div>
</template>

<script>
  import FooterListComponent from "../components/FooterListComponent";
  import Loading from "../components/LoadingComponent";
  import ModalComponent from "../components/ModalComponent";

  export default {
    name: "PokemonList",
    components: {ModalComponent, Loading, FooterListComponent,},

    computed: {
      isLoading() {
        return this.$store.state.isLoading
      }
    },
    mounted() {
      this.showLoading()
    },
    methods: {
      showLoading() {
        this.$store.dispatch('handleToggleLoading', true)
        setTimeout(() => {
          this.$store.dispatch('handleToggleLoading', false)
        }, 2000)
      }
    }
  }
</script>

<style scoped>

</style>
