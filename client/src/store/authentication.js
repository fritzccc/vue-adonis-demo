import axios from '../utils/http'
import router from '../router'

export default {
  namespaced:true,
  state:{
    registEmail:"",
    registPassword:"",
    loginEmail:"",
    loginPassword:"",
    token:null,
    error:null,
  },
  mutations:{
    setRegistEmail(state,email){
      state.registEmail = email;
    },
    setRegistPassword(state,password){
      state.registPassword = password;
    },
    setLoginEmail(state,email){
      state.loginEmail = email;
    },
    setLoginPassword(state,password){
      state.loginPassword = password;
    },
    setToken(state,token){
      state.token = token ? token : null;
    },
    setError(state,errmsg){
      state.error = errmsg ? errmsg : null;
    }
  },
  getters:{
    isLogged({token}){
      return !!token;
    }
  },
  actions:{
    setLoginEmail({commit},email){
      commit('setLoginEmail',email)
    },
    setLoginPassword({commit},password){
      commit('setLoginPassword',password)
    },
    setRegistEmail({commit},email){
      commit('setRegistEmail',email)
    },
    setRegistPassword({commit},password){
      commit('setRegistPassword',password)
    },
    initLogin({commit}){
      commit('setLoginEmail',"")
      commit('setLoginPassword',"")
    },
    initRegist({commit}){
      commit('setRegistEmail',"")
      commit('setRegistPassword',"")
    },
    register({commit,state}){
      return axios.post('/register',{
        email:state.registEmail,
        password:state.registPassword
      }).then(({data})=>{
        commit('setToken',data.token)
        router.push('/')
      }).catch(err=>{
        console.log(err);
        commit('setError','An Error Occured!')
      })
    },
    login({commit,state}){
      return axios.post('/login',{
        email:state.loginEmail,
        password:state.loginPassword
      }).then(({data})=>{
        commit('setToken',data.token)
        router.push('/')
      }).catch(err=>{
        console.log(err);
        commit('setError','An Error Occured!')
      })
    },
    logout({dispatch,commit}){
      dispatch('initLogin')
      dispatch('initRegist')
      commit('setToken',null)
      router.push('/login')
    }
  }
}