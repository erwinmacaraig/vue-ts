<template>
    <h1>Home Page</h1>
</template>

<script>
export default {
    activated() {
        console.log("Home component activated")
    },

    deactivated() {
        console.log("Home component deactivated")
    }
}
</script>