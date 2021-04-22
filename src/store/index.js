import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin,getRego } from '../service/api.js'
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
};
const actions={
  getLogin(context){
    getLogin().then(res=>{
      console.log(res.data);
      context.commit('setLogin',{result:res.data})
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
    getRego(con){
      getRego().then(res=>{
        console.log(res.data);
        con.commit('setRego',{result:res.data})
        let len = res.data.length;
        let regoNameArr = [];
        let regoPawArr = [];
        for(var i = 0;i<len;i++){
          debugger
          regoNameArr.push(res.data[i].regoName);
          regoPawArr.push(res.data[i].regoPaw);
          for(var t = 0;t<this.userNameArr.length;t++){
            if(regoNameArr[i].regoName === this.userNameArr[t].username){
              alert("该账号已存在")
            }else{
              router.push("/login")
              alert("注册成功")
            }
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









