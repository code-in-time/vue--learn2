<template>
    <div>
        main2 template <span class="text1">{{message}}</span>
        <button type="button" v-on:click="btnClickButton">my click</button>
        <div>{{counter}}</div>

    </div>
</template>

<script>

    export default {
        data: () => {
            return {
                message: "theText",
                counter: 0,
            }
        },
        components: {
       },
        methods: {
            btnClickButton(e) {
                console.log('button');
                this.counter +=1;
                this.$emit('emit-event-main2-counter', this.counter)
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
