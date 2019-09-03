<template>
  <div id="app">
    <router-view/>
   <tabbar></tabbar>
  </div>
</template>
<script>
    import Tabbar from "./components/tabbar";
    export default {
        components: {Tabbar}
    }
</script>
<style lang="less">
html,body{
  height: 100%;
}
  #app{
    height: 100%;
    background-color: #f4f4f4;
  }
</style>
