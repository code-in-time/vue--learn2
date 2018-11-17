<template>
  <div  class="Bottom" v-on:emit-event-main2-counter="cntr = $event">
      bottom text and cntr ({{cntr}})
  </div>
</template>

<script>

export default {
    data: () => {
        return {
            cntr: 0
        }
    },
}
</script>

<style scoped>

</style>
