<template>
  <Panel title="Posts">
    <div v-for="(post, index) in posts" :key="index">
      <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
          <div @click="setPostId(post.id)" class="post-title" v-if="editIndex !== index">{{ post.title }}</div>
          <v-text-field v-else @input="setPostTitle({index,newTitle:$event})" :value="post.title"></v-text-field>
        </v-flex>
        <v-flex xs3 class="text-xs-right">
          <v-btn @click="editPost(index,post)" small icon flat style="margin:2px">
            <v-icon v-if="editIndex !== index">edit</v-icon>
            <v-icon v-else>save</v-icon>
          </v-btn>
          <v-btn v-if="editIndex !== index" @click="deletePost({index,id:post.id})" small icon flat style="margin:2px">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap class="mt-2">
      <v-flex xs9>
        <v-text-field v-model="newPostTitle" label="new Posts..."/>
      </v-flex>
      <v-flex xs3>
        <v-btn dark color="#42b883" :disabled="!newPostTitle" @click="createNewPost">Create</v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      editIndex: -1
    };
  },
  methods: {
    ...mapActions("posts", ["createNewPost", "fetchPosts","deletePost","updatePost"]),
    ...mapMutations("posts",["setPostTitle"]),
    ...mapActions("tasks",["setPostId"]),
    editPost(index,post) {
      if (this.editIndex === index) {
        this.editIndex = -1;
        this.updatePost(post)
      } else {
        this.editIndex = index;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState("posts", ["posts"]),
    newPostTitle: {
      get() {
        return this.$store.state.posts.newPostTitle;
      },
      set(val) {
        this.$store.dispatch("posts/setNewPostTitle", val);
      }
    }
  }
};
</script>
<style scoped>
.post-title{
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}
.post-title:hover{
  color: #ccc;
}
</style>
