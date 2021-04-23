import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin, getRego } from '../service/api.js'
import router from '../router/index.js'

Vue.use(Vuex)
const state = {
  form:{
    username:'',
    password:''
  },
  regoForm:{
    regoName:'',
    regoPaw:''
  },
  result:null,
  title:''
};
const mutations = {
  setLogin(state,param){
    state.result = param.result
  },
  setUser(state,n){
    state.form.username = n
  },
  setPwd(state,n){
    state.form.password = n
  },
  setRego(state,param){
    state.result = param.result
  },
  setRegoUser(state,n){
    state.regoForm.regoName = n
  },
  setRegoPwd(state,n){
    state.regoForm.regoPaw = n
  },
};
const actions={
  getLogin(context){
    getLogin().then(res=>{
      res.data.push(this.state.form)
      context.commit('setRego',{result:res.data})
      let length = res.data.length;
      let userNameArr = [];
      let passWordArr = [];
      let ses = window.sessionStorage;
      for(var i = 0;i<length;i++){
        userNameArr.push(res.data[i].username);
        passWordArr.push(res.data[i].password);
      }
      if(userNameArr.indexOf(state.form.username) === -1){
       alert("账号不存在");
      }else{
          var index = userNameArr.indexOf(state.form.username);
          if(passWordArr[index] === state.form.password){
          ses.setItem("token",res.data[index].token);
          state.title = res.data[index].usertitle;
          router.push("/");
          
          }else{
          alert("密码错误");
          }
        }
      })
    },
  getRego(context){
    
      getRego().then(res=>{
        
        context.commit('setRego',{result:res.data})
        let len = res.data.length;
        let regoNameArr = [];
        let regoPawArr = [];
        for(var i = 0;i<len;i++){
          regoNameArr.push(res.data[i].regoName);
          regoPawArr.push(res.data[i].regoPaw);
          let newRegoName = state.regoForm.regoName;
          let newRegoPaw = state.regoForm.regoPaw;
          if(newRegoName === res.data[i].regoName){
            alert("该账号已经被注册")
          }  else{
            regoNameArr.push(newRegoName);
            regoPawArr.push(newRegoPaw);
            router.push("/login");
            this.state.form.username = this.state.regoForm.regoName;
            this.state.form.password = this.state.regoForm.regoPaw;
            
            }
        }
        
        
      })
    },
    logout(){
      window.sessionStorage.removeItem("token");
      router.push("/login")
    }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
})









