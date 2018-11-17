<template>
  <div class="app">
    <Main2 />
    <Bottom/>
  </div>
</template>

<script>
import Main2 from "./components/Main2";
import Bottom from "./components/Bottom";

export default {
  components: {
    Main2,
    Bottom
  },

}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
