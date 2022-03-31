<template>
    <div class="container">
        <!-- <p>Portfolio</p>
        <a href="./A/index.html">test a</a>-->
        <div class="row">
            <div class="infoBox col-lg-4">
                <div>
                    <img src="@/assets/pic1.jpg" alt />
                    <p class="title">Candice Kuo</p>
                    <p>Taiwan, Taipei</p>
                    <div class="detail">
                        <i class="bi bi-envelope"></i> candice89989@gmail.com
                        <br />
                        <i class="bi bi-phone"></i> 0952 620 651
                    </div>
                    <div class="more">
                        擅長工具
                        <br />Photoshop、Illustrator
                        <br />html、css、jquery、js、vue.js
                        <br />RWD響應式網站
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-xs-6 col-md-8 col-lg-8">
                <div class="row">
                    <div
                        v-for="(data, index) in portfolioInfo"
                        :key="index"
                        class="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    >
                        <div class="portfolioBox">
                            <img :src="data.imgPath" :alt="data.label" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
    components: {},
    data() {
        return {
            test: 'hello',
            portfolioInfo: [
                {
                    label: 'test1',
                    imgPath: require('@/assets/p1.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p2.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p3.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p4.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p5.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p6.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p7.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p8.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p9.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p10.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p11.png'),
                },
                {
                    label: 'test1',
                    imgPath: require('@/assets/p12.png'),
                },
            ],
        };
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
.infoBox {
    // flex-basis: 25%;
    min-width: 264px;
    margin-top: -80px;

    > div {
        background: #fff;
        border: 1px solid #ddd;
        text-align: center;
        padding: 20px;

        img {
            border-radius: 100%;
            margin: 30px 0;
        }
        .title {
            font-weight: bold;
            font-size: 21px;
            margin-bottom: 10px;
            ~ p {
                font-weight: 100;
                font-size: 14px;
                color: rgb(170, 170, 170);
            }
        }
        .detail,
        .more {
            margin: 30px 0 20px;
            line-height: 25px;
            text-align: left;
        }
        .more {
            border-top: 1px solid #eee;
            padding-top: 25px;
        }
    }
}
.portfolioBox {
    height: 13vw;
    margin: 20px 0;
    border: 1px solid #ddd;
    background: #eee;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
</style>
