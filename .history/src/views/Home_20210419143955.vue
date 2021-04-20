<template>
  <div class="home">
    <div class="herder">
      <Menu></Menu>
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
</style>