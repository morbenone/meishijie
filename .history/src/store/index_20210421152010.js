import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin } from '../service/api.js';
import router from '../router/inedx'

Vue.use(Vuex);
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
  serUser(state,n){
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
      let userNameArr = [];
      let passWordArr = [];
      let ses = window.sessionStorage;
      for(var i = 0;i++;i<length){
        userNameArr.push(res.data[i].username);
        passWordArr.push(res.data[i].password);
      }
      if(userNameArr.indexOf(state.form.username) === -1){
        alert("账号不存在");
      }else{
        var index = userNameArr.indexOf(state.form.username);
        if(passWordArr[inedx] === state.form.password){
          ses.setItem("data",res.data[index].token);
          console.log(ser,"ses");
          state.title = res.data[index].usertitle;
          router.push("/");
        }else{
          alert("密码错误");
        }
      }
    })
  },
  loginOut(){
    window.sessionStorage.removeItem("data");
    router.push("/login")
  }
} 
export default new Vuex.Store（{
  state,
  mutations,
  action
}









