<template>
  <div class="menu">
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
          <template slot="title">菜谱分类</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          
        </el-submenu>
        <el-menu-item index="3">美食达人</el-menu-item>
        <el-menu-item index="4">家居馆</el-menu-item>
        <el-menu-item index="4">APP下载</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  
}
</script>
<style scoped>
  .menu{
    display: inline-block;
    width: 670px;
    height: 80px;
    vertical-align: top;
    font-size: 0px;
    text-align: center;
    transition: all ease .3s;
    
  }
  .nav{
    height: 80px;
    display: inline-block;
    vertical-align: top;
}
  
  .nav_list{
    line-height: 80px;
    display: inline-block;
    font-size: 17px;
    color: #fff;
    font-weight: 600;
    padding: 0px 20px;
    transition: all ease 0.3s;
    background: rgba(255,255,255,0);
    position: relative
  }
  .el-menu-demo{
    background: none;
    border: none;
    color: white;
  }
  
</style>
