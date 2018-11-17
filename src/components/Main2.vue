<template>
    <div>
        main2 template <span class="text1">{{message}}</span>
        <button type="button" v-on:click="btnClickButton">my click</button>
        <div>{{counter}}</div>

    </div>
</template>

<script>
    import appInput from "./appInput.vue";
    export default {
        data: () => {
            return {
                message: "theText",
                counter: 0,
            }
        },
        components: {
           appInput,
       },
        methods: {
            btnClickButton(e) {
                this.$emit('emit-event-main2-counter', this.counter)
                console.log('button');
                this.counter +=1;
            }
        }

    }
</script>

<style scoped>
.text1 {
    color:red;
}
.text2 {
    color:blue;
}
</style>
