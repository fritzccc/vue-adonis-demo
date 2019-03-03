<template>
  <Panel title="Tasks">
    <div v-for="(task, index) in tasks" :key="index">
      <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
          <div class="post-title" v-if="editIndex !== index">{{ task.description }}</div>
          <v-text-field v-else :value="task.description"></v-text-field>
        </v-flex>
        <v-flex xs3 class="text-xs-right">
          <v-btn small icon flat style="margin:2px">
            <v-icon v-if="editIndex !== index">edit</v-icon>
            <v-icon v-else>save</v-icon>
          </v-btn>
          <v-btn v-if="editIndex !== index" small icon flat style="margin:2px">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap class="mt-2">
      <v-flex xs9>
        <v-text-field v-model="newTaskDescription" label="new Task Description Here..."/>
      </v-flex>
      <v-flex xs3>
        <v-btn dark color="#42b883" :disabled="!newTaskDescription">Create</v-btn>
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
    ...mapActions("tasks", []),
    ...mapMutations("tasks",[]),
    editPost(index,post) {
      if (this.editIndex === index) {
        this.editIndex = -1;
        // this.updatePost(post)
      } else {
        this.editIndex = index;
      }
    },
  },
  mounted() {
  },
  computed: {
    ...mapState("tasks", ["tasks"]),
    newTaskDescription: {
      get() {
        return this.$store.state.tasks.newTaskTitle;
      },
      set(val) {
        this.$store.dispatch("tasks/setNewTaskTitle", val);
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
