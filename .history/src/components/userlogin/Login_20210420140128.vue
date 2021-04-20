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

.header{
    width: 100%;
    height: 80px;
    background: rgba(246,77,54,0.8);
    background-image: linear-gradient(to right,rgba(250,69,81,0.8),rgba(246,77,54,0.8));
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
    height: 180px;
    line-height: 180px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    font-size: 48px;
}
</style>