<template>
  <div>
    test
    <!-- <Main2 v-on:emit-event-main2-counter="sendToBottom" />
    <Bottom :cntrProp="cntr"/> -->
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
  data: () => {
    return {
      cntr: 0
    }
  },
  methods: {
    sendToBottom(x) {
      console.log('x', x);
      this.cntr = x;
    } 
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
