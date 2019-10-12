<template>
        <van-tabbar v-model="active" @change="handleSwitchTo">
            <van-tabbar-item
                    v-for="(item,index) in Tabbar"
                    :key="index"
                    :name="item.linkTo"
                    :icon="item.icon"
                    :to="'/'+item.linkTo"
            >{{item.name}}</van-tabbar-item>
        </van-tabbar>
</template>

<script>
    export default {
        name: "tabbar",
        data(){
            return {
                active:'home',
                ele:'',
                Tabbar:[
                    {name:'首页',icon:'wap-home',linkTo:'home'},
                    {name:'推荐',icon:'hot-o',linkTo:'recomend'},
                    {name:'搜索',icon:'search',linkTo:'search'},
                    {name:'聊天',icon:'chat-o',linkTo:'chat'},
                    {name:'个人中心',icon:'user-circle-o',linkTo:'user'}
                ]
            }
        },
        mounted(){
          this.ele = document.querySelectorAll('.van-tabbar-item').item(0)
            console.log(this.ele)
        },
        methods: {
            handleSwitchTo(){
                console.log(this.active)
                // this.$router.replace('/'+this.active)
                // console.log(this.$router.replace('/'+this.active))
            }
        },
    }
</script>

<style scoped>

</style>