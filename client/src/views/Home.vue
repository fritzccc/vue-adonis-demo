<template>
  <div style="margin-top:5%;" class="home">
    <v-container fluid>
      <v-layout>
        <v-flex xs4 class="mr-4">
          <Posts></Posts>
        </v-flex>
        <v-flex xs8>
          <Tasks></Tasks>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue"
import Tasks from '@/components/Tasks.vue'

export default {
  name: "home",
  components: {
    Posts,Tasks
  },
};
</script>
