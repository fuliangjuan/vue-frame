<template>
    <div class="home">
        <van-tabs
                v-model="active"
                swipeable
                animated
                sticky
                lazy-render
                @click="handleTab"
                @change="changeTab"
        >
            <van-tab
                    v-for="item in tagsBar"
                    :title="item.title"
                    :name="item.linkTo"
            >
                <router-view/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                active: '0',
                tagsBar:[
                    {id:1,title:'热门',linkTo:'hot'},
                    {id:2,title:'女装',linkTo:'dress' },
                    {id:3,title:'百货',linkTo:'departmentstore'},
                    {id:4,title:'母婴',linkTo:'mom'},
                    {id:5,title:'手机',linkTo:'phone'},
                    {id:6,title:'鞋包',linkTo:'shoeBag'},
                    {id:7,title:'电器',linkTo:'appliance'},
                    {id:8,title:'食品',linkTo:'food'},
                    {id:9,title:'美妆',linkTo:'mixbox'},
                    {id:10,title:'内衣',linkTo:'underwear'}
                ]
            }
        },
        methods:{
            handleTab(name,ittle){
                console.log(name);
                this.$router.push({name: name})
            },
            changeTab(name,tittle){
                // this.$router.push({name: name})
            }
        }
    }
</script>

<style scoped>
    .home{
        height: 100vh;
        /*background-color: deeppink;*/
    }
</style>