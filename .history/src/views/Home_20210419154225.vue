<template>
  <div class="home">
    <div class="header">
      <div class="menu_list">
        <a class="logo">
          <img src="@/assets/logo/logo.png" alt="" class="logo_img"
          >
        </a>
        <div class="search_box">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <Menu></Menu>
      </div>
      
    </div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>
<style scoped>
  .header{
    width: 100%;
    height: 80px;
    background: rgba(246,77,54,0.8);
    background-image: linear-gradient(to right,rgba(250,69,81,0.8),rgba(246,77,54,0.8));
  }
  .menu_list{
    width: 1200px;
    position: relative;
    margin: 0px auto;
    height: 80px;
    font-size: 0px
  }
  .menu_list .logo{
    height: 80px;
    width: 128px;
    display: inline-block;
    vertical-align: top;
  }
  .menu_list .logo_img{
    display: block;
    height: 54px;
    margin: 13px 0px 0px 0px;
    width: 106px
  }
</style>