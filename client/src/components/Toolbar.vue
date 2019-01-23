<template>
  <v-toolbar color="#42b883" dark fixed>
    <v-toolbar-title class="mr-4">Vue TODOs</v-toolbar-title>
    <v-toolbar-items>
      <v-btn v-if="isLogged" flat>
        <v-icon class="pr-2">assignment</v-icon>Posts
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!isLogged" flat to="/regist">
        <v-icon class="pr-2">touch_app</v-icon>Regist
      </v-btn>
      <v-btn v-if="isLogged" flat @click="logout">
        <v-icon class="pr-2">exit_to_app</v-icon>Logout
      </v-btn>
      <v-btn v-if="!isLogged" flat to="/login">
        <v-icon class="pr-2">perm_identity</v-icon>Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  methods:{
    ...mapActions('authentication',['logout'])
  },
  computed:{
    ...mapGetters('authentication',['isLogged'])
  }
}
</script>
