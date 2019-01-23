<template>
  <v-card max-width="600" style="margin:30px auto;padding:30px;">
    <h2>{{ loginOrRegist }}</h2>
    <v-form ref="form" v-model="isValid">
      <v-text-field v-if="isLogin" v-model="loginEmail" label="E-mail" required></v-text-field>
      <v-text-field v-else v-model="registEmail" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field
        v-if="isLogin"
        type="password"
        v-model="loginPassword"
        label="Password"
        required
      ></v-text-field>
      <v-text-field
        v-else
        type="password"
        v-model="registPassword"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>
    </v-form>
    <v-card-actions>
      <v-btn block dark @click="handleSubmit" color="#42b883">{{ loginOrRegist }}!</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isValid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password cannot be shorter then 6"
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$store.state.route.path === "/login" ? this.login() : this.register();
    },
    ...mapActions("authentication", ["register", "login"])
  },
  computed: {
    ...mapGetters('authentication',['isLogged']),
    isLogin(){
      return this.$store.state.route.path === "/login"
    },
    loginOrRegist(){
      return this.isLogin ? "Login" : "Regist"
    },
    loginEmail: {
      get() {
        return this.$store.state.authentication.loginEmail;
      },
      set(val) {
        this.$store.dispatch("authentication/setLoginEmail", val);
      }
    },
    loginPassword: {
      get() {
        return this.$store.state.authentication.loginPassword;
      },
      set(val) {
        this.$store.dispatch("authentication/setLoginPassword", val);
      }
    },
    registEmail: {
      get() {
        return this.$store.state.authentication.registEmail;
      },
      set(val) {
        this.$store.dispatch("authentication/setRegistEmail", val);
      }
    },
    registPassword: {
      get() {
        return this.$store.state.authentication.registPassword;
      },
      set(val) {
        this.$store.dispatch("authentication/setRegistPassword", val);
      }
    }
  }
};
</script>
