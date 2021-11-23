<template>
  <div id="myModal" class="modal" v-if="errorModal.active">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" v-on:click="close">&times;</span>
      <p>{{ errorModal.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {

    }
  },

  computed: {
    ...mapGetters({
      errorModal: "getErrorModal",
    }),
  },

  methods: {
    close() {
      this.$store.commit('SET_ERROR_MODAL', false );
    }
  }
};
</script>

<style>
</style>