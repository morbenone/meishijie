<template>
  <div class="home">
    <div class="header">
      <div class="menu_list">
        <a class="logo">
          <img src="@/assets/logo/logo.png" alt="" class="logo_img"
          >
        </a>
        <div class="search_box">
          <div class="search_box_input">
            <el-form>
              <el-form-item>
                <el-input v-model="input" placeholder="菜谱名、食材名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button>搜索</el-button>
              </el-form-item>
            </el-form>
          </div>
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
  .search_box{
    width: 222px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    transition: all ease .3s
  }
  .search_box_input{
    height: 44px;
    width: 222px;
    border-radius: 22px;
    background: #fff;
    margin-top: 18px;
    position: relative;
    transition: all ease .3s
  }
  .search_box >>>.el-input__inner {
    height: 40px;
    width: 150px;
    line-height: 40px;
    font-size: 16px;
    color: #222;
    border: 0px;
    border-radius: 20px;
    margin: 2px 0px 0px 2px;
    padding-left: 15px;
    box-sizing: border-box;
    transition: all ease .3s
  }
</style>