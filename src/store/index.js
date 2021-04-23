import Vue from 'vue'
import Vuex from 'vuex'
import {
  getLogin,
  getRego
} from '../service/api.js'
import router from '../router/index.js'


Vue.use(Vuex)
const state = {
  form: {
    username: '',
    password: ''
  },
  regoForm: {
    regoName: '',
    regoPaw: ''
  },
  result: [],
  title: ''
};
const mutations = {
  setLogin(state, param) {
    state.form = param.form
  },
  setUser(state, n) {
    state.form.username = n
  },
  setPaw(state, n) {
    state.form.password = n
  },
  setRego(state, param) {
    state.result.push(param.result) 
  },
  setRegoUser(state, n) {
    state.regoForm.regoName = n
  },
  setRegoPaw(state, n) {
    state.regoForm.regoPaw = n
  },
};
const actions = {
  getLogin() {
    getLogin().then(res => {
      // res.data.push(this.state.form)
      // context.commit('setRego', {
      //   result: res.data
      // })
      // let length = res.data.length;
      let userNameArr = [];
      let passWordArr = [];
      let ses = window.sessionStorage;
      let result = state.result
      let form = state.form
      // var index = userNameArr.indexOf(state.form.username);
      // for (var i = 0; i < length; i++) {
        userNameArr.push(res.data[0].username);
        passWordArr.push(res.data[0].password);
      // }
      result.forEach(element => {
        if(element.regoName == form.username && element.regoPaw == form.password){
          ses.setItem("token", res.data[0].token);
          state.title = res.data[0].usertitle;
          router.push("/");
        }else if(element.regoName != form.username){
          alert("账号不存在");
        }else if(element.regoPaw != form.password){
          alert("密码错误");
        }
      });
      // for (var i = 0; i < length; i++) {
      //   userNameArr.push(res.data[i].username);
      //   passWordArr.push(res.data[i].password);
      // }
      // if (userNameArr.indexOf(state.form.username) === -1) {
      //   alert("账号不存在");
      // } else {
      //   
      //   if (passWordArr[index] === state.form.password) {
      //     ses.setItem("token", res.data[index].token);
      //     state.title = res.data[index].usertitle;
      //     router.push("/");

      //   } else {
      //     alert("密码错误");
      //   }
      // }
    })
  },
  getRego(con) {
    //注册
    getRego().then(res => {
      console.log(res.data)
      // con.commit('setRegoUser', {
      //   regoForm: res.data
      // });
        let result = state.result
        let regoForm = state.regoForm
        var isRegoName=result.findIndex((value)=>value.regoName==regoForm.regoName);
        if(isRegoName == -1){
          con.commit('setRego', {
            result: state.regoForm
          });
          router.push("/login");
        }else{
          router.push("/rego");
          alert("该账号已经被注册");
        }
      
      console.log(state.result);
      /* let len = res.data.length;
      let regoNameArr = []; */
      //let isRegoName = result.find((item)=>{item.regoName == res.data.regoName})
    /*  for (var i = 0; i < len; i++) {
        res.data.push(state.regoForm);
        regoNameArr.push(res.data[i].regoName);
        
        let newRegoName = state.regoForm.regoName;
        if (newRegoName == res.data[i].regoName) {

          router.push("/rego");
          alert("该账号已经被注册");
         
        } else { */
          
         /*  regoNameArr.push(newRegoName);
          regoPawArr.push(newRegoPaw); */
          
          /* router.push("/login");
          this.state.form.username = this.state.regoForm.regoName;
          this.state.form.password = this.state.regoForm.regoPaw;
        }
        this.state.regoForm.regoName = newRegoName */
        /* console.log(res.data);
        console.log(this.state.regoForm); */

        
      /* } */
      


    })
  },
  logout() {
    window.sessionStorage.removeItem("token");
    router.push("/login")
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
})