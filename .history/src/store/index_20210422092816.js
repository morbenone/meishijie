import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin } from '../service/api.js'
import router from '../router/index.js'

Vue.use(Vuex)
const state = {
  form:{
    username:'',
    password:''
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
  }
};
const actions={
  getLogin(context){
    getLogin().then(res=>{
      console.log(res.data);
      context.commit('setLogin',{result:res.data})
      let length = res.data.length;
      var userNameArr = [];
      var passWordArr = [];
      var ses = window.sessionStorage;
      //debugger
      for(var i = 0;i<length;i++){
        userNameArr.push(res.data[i].username);
        passWordArr.push(res.data[i].password);
      }
      if(userNameArr.indexOf(state.form.username) === -1){
       alert("账号不存在");
      }else{
        var index = userNameArr.indexOf(state.form.username);
        
        if(passWordArr[index] === state.form.password){
          //console.log(data);
          ses.setItem("token",res.data[index].token);
          //console.log(ses,"ses");
         
          state.title = res.data[index].usertitle;
          router.push("/");
        }else{
          alert("密码错误");
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









