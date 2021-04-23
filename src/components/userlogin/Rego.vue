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
                        注册
                    </div>
                <div class="loginPage">
                <el-form :model="regoForm" :rules="rules" ref="regoForm" label-width="60px" >
                    <el-form-item  prop="regoName">
                        <el-input placeholder="请输入账号" v-model="regoForm.regoName"></el-input>
                    </el-form-item>
                    <el-form-item prop="regoPaw">
                        <el-input placeholder="请输入密码" type="password" v-model="regoForm.regoPaw"></el-input>
                    </el-form-item>
                    <!-- <el-form-item prop="cheakPaw">
                        <el-input placeholder="请再次输入密码" type="password" v-model="regoForm.cheakPaw"></el-input>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary" @click="rego('regoForm')">注册</el-button>
                    </el-form-item>
                </el-form>
                
                </div>
                <div class="isRego" @click="toLogin">
                    已有账号？去登录！
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
    export default {
        name:"login",
        data() {
            var validateName = (rule,value,callback)=>{
                if(!value){
                    return callback(new Error('账号不能为空'))
                }
                callback();
            };
            var validatePaw = (rule,value,callback) => {
                if(value === ""){
                    callback (new Error("密码不能为空"))
                }else{
                        this.$refs.regoForm.validateField("cheakPaw")
                    }callback()
                    
                    
                }
            
            /* var validateCheakPaw = (rule,value,callback) => {
                if(value === ""){
                    callback (new Error("密码不能为空"));
                }else if(value !== this.regoForm.regoPaw){
                    callback (new Error("两次密码输入不一致"));
                }else{
                    callback();
                }
            }; */
            return {
                regoForm:{
                    regoName:'',
                    regoPaw:'',
                    
                },
                
                rules:{
                    regoName:[
                        {
                        validator:validateName,trigger:'blur'
                        },
                        {
                            min:6,max:12,message:"请输入6~12位账号",trigger:'blur'
                        }
                    ],
                    regoPaw:[
                        {
                        validator:validatePaw,trigger:'blur'
                        },
                        {
                            min:6,max:12,message:"请输入6~12位密码",trigger:'blur'
                        }
                    ],
                    /* cheakPaw:[
                        {
                        validator:validateCheakPaw,trigger:'blur'
                        },
                        {
                            min:6,max:12,message:"请输入6~12位密码",trigger:'blur'
                        }
                    ], */
                },
            }
        },
        components:{
            Menu,
        },
        
        methods: {
            toLogin() {
                this.$router.replace({ path: "/login" });
            },
            rego(regoForm){
               
                this.$store.state.regoForm = Object.assign({},this.regoForm)
                this.regoName = this.regoForm.regoName;
                this.regoPaw = this.regoForm.regoPaw;
                this.$refs[regoForm].validate((v)=>{
                    if(v){
                       
						this.$store.dispatch('getRego')
						}else{
                        
                        alert("请输入正确的注册信息");
                        return false
                    }
                })
            },
        },
        computed: {
            regoName:{
                get(){
                    return this.$store.state.regoForm.regoName;
                },
                set(newVal){
                    this.$store.commit("setRegoUser",newVal);
                }
            },
            regoPaw:{
                get(){
                    return this.$store.state.regoForm.regoPaw;
                },
                set(newVal){
                    this.$store.commit("setRegoPaw",newVal)
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
    top:75%;
    color:rgba(246,77,54,0.8);
    font-size:18px;
}
.loginShow{
    position: absolute;
    font-size: 28px;
    font-weight: 600;
    left: 45%;
    top:12%;
}
</style>