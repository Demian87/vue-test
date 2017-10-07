<template>
    <div>
        <h1>{{ greeting }}</h1>
    </div>
</template>

<script>
export default {
    name: "hello",
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