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
                    <el-form :model="ruleform" :rules="rules" ref="ruleform" label-width="60px" >
                    <el-form-item  >
                        <el-input placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button>登录</el-button>
                    </el-form-item>
                </el-form>
                
                </div>
                <div class="isRego">
                    没有账号？去注册！
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
    export default {
        name:"login",
        components:{
            Menu,
        }
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
.loginShow{
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
    left: 39%;
    top:65%;
    color:rgba(246,77,54,0.8);
    font-size:25px
}
</style>