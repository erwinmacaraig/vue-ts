<script>
export default {
    name: 'Greeting',
    data() {
        return {
            msg: "Hey! Lets codes"
        }
    }
}
</script> 

<template>
     <p>{{ msg }}</p>
</template>

<style scoped>
p {
    color: red;
}
</style>