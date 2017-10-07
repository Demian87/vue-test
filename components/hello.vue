<template>
    <div>
        <h1>{{ greetings }}</h1>
    </div>
</template>

<script>
export default {
    methods: {
        check: function check() {
            return "ok";
        }
    },
    data: function() {
        return {
            greeting: 'Привет всем!'
        }
    }
}
</script>

<style>
h1 {
    color: green;
}

h2 {
    color: aqua;
}
</style>