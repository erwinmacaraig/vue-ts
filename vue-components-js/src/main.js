
import { createApp } from 'vue'
import App from './App.vue'
// import Greeting from "@/components/Greetings.vue"

let vm = createApp(App)

//Register components here
// Components must be registered after a Vue instance 
// vm.component("Greeting", Greeting)
// this is how you register global component 

vm.mount('#app')
