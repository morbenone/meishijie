<template>
    <div class="login">
        <div class="header">
            <Menu></Menu>
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
</style>