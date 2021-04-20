<template>
  <div class="home">
    <div class="header">
      <div class="menu_list">
        <a>
          <img src="@/assets/logo/logo.png" alt="" class="logo"
          >
        </a>
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
    background: red;
  }
  .menu_list{
    width: 1200px;
    position: relative;
    margin: 0px auto;
    height: 80px;
    font-size: 0px
  }
  .menu_list .logo{
    height: 60px;
    width: 128px;
    display: inline-block;
    vertical-align: middle;
  }
</style>