<template>
  <div>
    <headerComponent></headerComponent>
    <transition>
      <router-view></router-view>
    </transition>

</div>
</template>
<style lang="css" src="../../css/normalize.css"></style>
<style lang="sass" src="../../scss/style.scss"></style>
<script>
import headerComponent from "./layouts/header.vue";
import mainComponent from "./stepOne/main.vue";

export default {
  components: {
    headerComponent,
    mainComponent,
  },

  fourthFunction() {
    return;
  }
};
</script>

<style></style>