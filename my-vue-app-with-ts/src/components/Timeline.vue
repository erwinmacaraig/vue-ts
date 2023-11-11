<script setup lang="ts">
import TimelineItem from './TimelineItem.vue';
import { usePosts } from "../stores/posts"
import { periods } from "../constants"

const postsStore = usePosts()
await postsStore.fetchPosts()

// const posts = computed<TimelinePost[]>(() => { 
//     return postsStore.ids.map(
//         id => {
//             const post = postsStore.all.get(id)
//             if (!post) { 
//                 throw Error(`Post with id ${id} was expected but not found`)
//             }
//             return {
//                 ...post,
//                 created: DateTime.fromISO(post.created)
//             }
//         }
//     ).filter(post => {
//         if (postsStore.selectedPeriod === "Today") {
//             return post.created >= DateTime.now().minus({ day: 1 })
//         }
//         if (postsStore.selectedPeriod === "This Week") { 
//             return post.created >= DateTime.now().minus({week: 1})
//         }
//         return post;
//     })
// })   
</script>

<template>
    {{ postsStore.foo }}
    <!-- <button type="button" v-on:click="postsStore.updateFoo('bar')">Update</button> -->
  <nav class="is-primary panel">   
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        v-bind:key="period"
        v-on:click="postsStore.setSelectedPeriod(period)"
        :class="{ 'is-active': period === postsStore.selectedPeriod }"
        >{{ period }}</a
      >
    </span>
    <TimelineItem v-for="post of postsStore.filteredPosts" :key="post.id" :post="post"/>
  </nav>
</template>
