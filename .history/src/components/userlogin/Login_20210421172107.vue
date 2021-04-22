<template>
    <div class="login">
        <div class="header">
            <div class="nav">
                <a class="logo">
                    <img src="@/assets/logo/logo.png" alt="" class="logo_img">
                </a>
               <Menu></Menu>
            </div> 
        </div>
        <div class="content">
            <div class = "welcome">
                欢迎来到美食杰
            </div>
            <div class="loginUser">
                <div class="loginShow">
                        账号密码登录
                    </div>
                <div class="loginPage">
                    
                    <el-form :model="form" :rules="rules" ref="form" label-width="60px" >
                    <el-form-item   prop="username">
                        <el-input placeholder="请输入账号" v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item v-model="form.password" prop="password">
                        <el-input placeholder="请输入密码" type="password" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login('form')">登录</el-button>
                    </el-form-item>
                </el-form>
                
                </div>
                <div class="isRego" @click="toRego">
                    没有账号？去注册！
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
 //import { getLogin } from "../service/api.js";
/* import axios from "axios";  */
    export default {
        name:"login",
        components:{
            Menu,
        },
        methods: {
            toRego() {
                this.$router.replace({ path: "/rego" });
            },
            login(form){
                this.username = this.form.username;
                this.password = this.form.password;
                this.$refs[form].validate((v)=>{
                    if(v){
                        this.$router.replace({ path: "/home" });
                        this.$store.dispatch("getLogin")
                    }else{
                        alert("请输入正确的登录信息")
                        return false
                    }
                })
            }
        },
        data(){
            return{
                form:{
                username:'',
                password:'',
                },
                rules:{
                    username:[
                        {
                            required:true,message:"请输入6-12位账号",trigger:'blur'
                        },
                        {
                            min:6,max:12,message:'长度6-12个字符',trigger:'blur'
                        },
                    ],
                    password:[
                        {
                            required:true,message:"请输入6-12位密码",trigger:'blur'
                        },
                        {
                            min:6,max:12,message:'长度6-12个字符',trigger:'blur'
                        },
                    ]
                },
            }
        },
        computed: {
            username:{
                get(){
                    return this.$store.state.form.username;
                },
                set(newVal){
                    this.$store.commit("setUser",newVal);
                }
            },
            password:{
                get(){
                    return this.$store.state.form.password;
                },
                set(newVal){
                    this.$store.commit("setPwd",newVal)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    background: rgba(246,77,54,0.8);
    background-image: linear-gradient(to right,rgba(250,69,81,0.8),rgba(246,77,54,0.8));
}
.header{
   height: 80px;
}
.nav{
    width: 828px;
    position: relative;
    margin: 0px auto;
    height: 80px;
    font-size: 0px
  }
.nav .logo{
    height: 80px;
    width: 128px;
    display: inline-block;
    vertical-align: top;
  }
.nav .logo_img{
    display: block;
    height: 54px;
    margin: 13px 0px 0px 0px;
    width: 106px
  }
.welcome{
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #FFF;
    font-weight: 400;
    font-size: 48px;
}
.content{
    height: 889px;
}
.loginUser{
    position: relative;
    margin: 60px auto;
    width: 600px;
    height: 500px;
    background: white;
    border-radius: 30px;
}
.loginPage{
    position: absolute;
    left:9%;
    top: 25%;
    width: 450px;
    height: 300px;
    
}
/deep/.el-button{
    margin-left: 130px;
}
.isRego{
    position: absolute;
    cursor: pointer;
    left: 38%;
    top:65%;
    color:rgba(246,77,54,0.8);
    font-size:18px;
}
.loginShow{
    position: absolute;
    font-size: 28px;
    font-weight: 600;
    left: 35%;
    top:12%;
}
</style>