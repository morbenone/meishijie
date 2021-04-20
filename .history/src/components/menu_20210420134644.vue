<template>
  <div class="menu">
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="listIndex"
      >
        <el-menu-item index="1" @click="toHome">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">菜谱分类</template>
          <el-menu-item index="2-1">烧鸡</el-menu-item>
          <el-menu-item index="2-2">炸鱼</el-menu-item>
          <el-menu-item index="2-3">火腿</el-menu-item>
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
  name: "menu",
  methods: {
    listIndex(key, keyPath) {
      console.log(key, keyPath);
    },
    toHome(){
      this.$router.replace({ path: "/home" });
    }
  },
};
</script>
<style  scoped lang="scss">
.menu {
  display: inline-block;
  width: 670px;
  height: 80px;
  vertical-align: top;
  font-size: 0px;
  text-align: center;
  transition: all ease 0.3s;
}
.nav {
  height: 80px;
  display: inline-block;
  vertical-align: top;
}

.nav_list {
  line-height: 80px;
  display: inline-block;
  font-size: 17px;
  color: #fff;
  font-weight: 600;
  padding: 0px 20px;
  transition: all ease 0.3s;
  background: rgba(255, 255, 255, 0);
  position: relative;
}
//控制导航栏
.el-menu-demo {
  background: none;
  border: none;
  font-weight: 600;
  font-size: 17px;
  line-height: 80px;
  .el-menu-item {
    color: #fff;
    border: none;
    line-height: 80px;
    height: 80px;
    font-size: 17px;
  }
}
//导航栏hover
/deep/.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #fff;
  background: rgb(249, 99, 92);
}
.el-menu--horizontal > .el-menu-item.is-active {
  border: none;
  color: #fff;
}
//下拉hover样式
/deep/.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  outline: 0;
  color: #fff;
  background: rgb(249, 99, 92);
}

/deep/.el-menu--horizontal > .el-submenu:focus .el-submenu__title,
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: #fff;
}

//控制下拉
/deep/.el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #fff;
  border: none;
  line-height: 80px;
  height: 80px;
  font-size: 17px;
}
/deep/.is-opened {
  color: #fff;
  background: rgb(249, 99, 92);
}
/deep/.el-menu.el-menu--horizontal {
  border: none;
}
//下拉小图标
/deep/.el-submenu__title i {
  color: #fff;
}
</style>
