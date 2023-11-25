<script>
export default {
    name: "User",
    // props: ["age"],
    props: {
        age: {
            type: Number,
            // required: true,
            // default: 20 
            validator(value) {
                return value < 130
            }
        },
        ageChangeFn: Function
    },
    emits: ['age-change'],
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    },
    methods: {
        onClickAge() {
            this.$emit('age-change', 3)
            // this function will emit an event that other components can listen for something 
        }
    }
}
</script>

<template>
    <button type="button" @click="onClickAge">Update Age</button>
    <button type="button" @click="ageChangeFn(3)">Update Age via Callback</button>
    <p v-if="age > 25">Hello Papa Cologne</p>
    <p v-else>You must be 25 or order to view this message</p>
    <p>The user is {{ age }} years old</p>
    <p>{{ ageDoubled }}</p>
</template>