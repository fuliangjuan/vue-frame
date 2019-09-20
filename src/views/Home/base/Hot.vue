<template>
    <div class="hot">
        <!--//轮播预览图-->
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="red">
                <van-swipe-item
                        v-for="(item,index) in imgs"
                        @click="handleImage(index)"
                >
                    <img :src="item" width="100%" height="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--宫格-->
        <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                     v-for="(item, index) in categorys.page"
                >
                    <van-grid  clickable :border="false" >
                        <van-grid-item
                                v-for="(item) in categorys[categorys.page[index]]"
                                :key="item.id"
                                :icon="item.img"
                                :text="item.title"
                        ></van-grid-item>
                    </van-grid>
                </div>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>
        <div class="hotList">
            <van-card
                    v-for="item in 5"
                    tag="hot"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    origin-price="10.00"
            />
        </div>
    </div>
</template>

<script>
    import {ImagePreview} from 'vant'
    export default {
        name: "Hot",
        data(){
            return {
                imgs:[
                    '//t00img.yangkeduo.com/goods/images/2019-09-01/f9795539fd4d8c2a3ce996a913d99788.png?imageMogr2/format/webp/quality/50',
                    '//t00img.yangkeduo.com/goods/images/2019-09-01/80288f785bb7c33df327fa7a6bfc26ee.jpeg?imageMogr2/format/webp/quality/50',
                    '//t16img.yangkeduo.com/pdd_oms/2019-08-31/b4b0de839535b291c3e535104601c610.png?imageMogr2/format/webp/quality/50',
                    '//t16img.yangkeduo.com/pdd_oms/2019-06-19/94d6508c6a6fb0038a1e6e83c22acbf1.jpg?imageMogr2/format/webp/quality/50,' ,
                    '//t16img.yangkeduo.com/pdd_oms/2019-09-01/dc336950df43d0fd68da571872bc3470.jpg?imageMogr2/format/webp/quality/50'
                ],
                categorys:{
                    page:['page1','page2'],
                    page1: [
                        {id:1,title: '限时秒杀',linkTo:'',img:'//t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50' },
                        {id:2,title: '断码清仓',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50' },
                        {id:3,title: '品牌馆',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2018-08-29/119a4937b493cc0fcc968a4545657922.png?imageMogr2/format/webp/quality/50' },
                        {id:4,title: '多多果园',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50' },
                        {id:5,title: '9块9特卖',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2019-08-08/e8cb0bbd39355543de0825c9590f74ca.gif' },
                        {id:6,title: '助力享免单',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2019-02-15/b329c4673337e18030f1211df38a543b.png?imageMogr2/format/webp/quality/50' },
                        {id:7,title: '天天领现金',linkTo:'',img:'//t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png?imageMogr2/format/webp/quality/50' },
                        {id:8,title: '1分抽大奖',linkTo:'',img:'//t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png?imageMogr2/format/webp/quality/50' },
                    ],
                    page2: [
                        {id:1,title: '省钱月卡',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2019-01-27/76826abcd09fe76657f07a901db83698.png?imageMogr2/format/webp/quality/50' },
                        {id:2,title: '充值中心',linkTo:'',img:'//t05img.yangkeduo.com/images/2018-05-16/801ae189938526cdaf40935d07034c5e.png?imageMogr2/format/webp/quality/50' },
                        {id:3,title: '百亿补贴',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2019-06-13/d3fd3a5b187bca651f8e65ae8a25c296.png?imageMogr2/format/webp/quality/50' },
                        {id:4,title: '现金签到',linkTo:'',img:'//t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50' },
                        {id:5,title: '金猪赚大钱',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png?imageMogr2/format/webp/quality/50' },
                        {id:6,title: '电器城',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/format/webp/quality/50' },
                        {id:7,title: '爱逛街',linkTo:'',img:'//t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png?imageMogr2/format/webp/quality/50' },
                        {id:8,title: '每日好店',linkTo:'',img:'//t00img.yangkeduo.com/goods/images/2019-02-15/1ddd6e21a8281e794dec6ef736867290.png?imageMogr2/format/webp/quality/50' },
                    ]
                }
            }
        },
        methods:{
            //实现图片预览
            handleImage(index){
                ImagePreview({
                    images:this.imgs,
                    startPosition:index,
                    onClose() {}
                });
            },
            //初始化Swiper
            init_Swiper(){
                const ele = this.$refs.swiperContainer
                const mySwiper = new Swiper (ele, {
                    freeMode : true,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                })
            }
        },
        mounted(){
            // console.log(this.categorys[this.categorys.page[0]])
            // console.log(process.env.BASE_URL)
            this.init_Swiper()
        }

    }
</script>

<style scoped lang="less">
.hot{
    height: 100vh;
    .banner{
        height: 280px;
    }
    .swiper-container{
        height: 320px;
        .swiper-scrollbar{
            width: 100px;
            background-color: orangered;
            left: calc( 50% - 50px );
        }
    }
}
</style>