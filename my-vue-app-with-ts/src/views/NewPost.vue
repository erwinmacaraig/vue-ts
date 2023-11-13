<script lang="ts" setup>
import PostWriter from '../components/PostWriter.vue';
import { TimelinePost } from '../posts';
import {DateTime} from "luxon";

const post: TimelinePost = {
    id: "-1",
    title: "Title",
    created: DateTime.now()
}
</script>

<template>
    New Post
    <PostWriter :post="post" />
</template>