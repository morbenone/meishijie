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
    height: 680px;
}
</style>