<template>
  <div class="menu">
    <div class="nav">
      
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
  
</style>
