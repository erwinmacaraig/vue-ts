<script>
import Greeting from "@/components/Greeting.vue"
import User from '@/components/User.vue'
import AppForm from '@/components/Form.vue'

export default {
  name: 'App',
  components: {
    Greeting,
    User,
    AppForm,
  },
  data() {
    return {
      age: 20,
      help: 'This is some help text.'
    }
  },
  methods: {
    updateAge(num) {
      this.age += num
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
}
</script>

<template>
  <hr>
  <h2>SLOTS</h2>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" name="" id="" placeholder="email">
      <input type="text" name="" id="" placeholder="username">
      <input type="password" name="" id="" placeholder="password">
    </template>

    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Dummy Text</p>
  </app-form>
  <app-form>
    <template v-slot:help>
      <p>Contact Help Text.</p>
    </template>
    <template v-slot:fields>
      <input type="text" name="" id="" placeholder="name">
      <input type="text" name="" id="" placeholder="message">
    </template>

    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>


  </app-form>
  <hr>
  <h3>Hey!</h3>
  <Greeting></Greeting>
  <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></User>
</template>

<style scoped></style>
