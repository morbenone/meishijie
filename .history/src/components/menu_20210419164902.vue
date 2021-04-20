<template>
  <div class="menu">
    <div class="nav">
      <div class="item_home">首页</div>
      <div class="item_sort"></div>
      <div class="item_doyen"></div>
      <div class="item_furnishing"></div>
      <div class="item_download"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  
}
</script>
<style scoped>
  .menu{
    display: inline-block;
    width: 670px;
    height: 80px;
    
  }
  .nav{
    line-height: 80px;
    display: block;
    font-size: 17px;
    color: #fff;
    font-weight: 600;
    padding: 0px 20px;
    transition: all ease 0.3s;
    background: rgba(255,255,255,0);
    position: relative
  }
</style>
