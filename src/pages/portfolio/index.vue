<template>
    <div class="container">
        <!-- <p>Portfolio</p>
        <a href="./A/index.html">test a</a>-->
        <div class="row">
            <div class="infoBox col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
                <div>
                    <img src="@/assets/img/pic1.jpg" alt />
                    <p class="title">{{ infoBox.name }}</p>
                    <p>{{ infoBox.add }}</p>
                    <div class="detail">
                        <i class="bi bi-envelope"></i>
                        {{ infoBox.mail }}
                        <br />
                        <i class="bi bi-phone"></i>
                        {{ infoBox.phone }}
                    </div>
                    <div class="more" v-html="infoBox.use"></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
                <div class="row" v-for="(data, index) in webInfo" :key="index">
                    <div class="col-12 mt-4 text-grey">
                        <p v-html="data.title"></p>
                    </div>
                    <div
                        v-for="item in data.list"
                        :key="item.imgPath"
                        class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4"
                        :class="index === 'flat' ? 'mb-4' : ''"
                        @click="handlePage(item)"
                    >
                        <div class="listBox">
                            <div class="imgBox">
                                <img :src="item.imgPath" :alt="item.label" />
                            </div>
                            <div class="msgCoverBox hidden-xs">
                                <p>{{ item.label }}</p>
                                <span>{{ item.content }}</span>
                                <div class="btnMore">see more</div>
                            </div>
                        </div>
                    </div>
                    <hr class="dash" :key="index" v-if="index !== 'flat'" />
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
            infoBox: {
                name: 'Candice',
                add: 'Taiwan, Taipei',
                mail: 'candice89989@gmail.com',
                phone: '0952 620 651',
                use: `擅長工具</br>Photoshop、Illustrator</br>html、css、jquery、js、vue.js</br>RWD響應式網站`
            },
            webInfo: {
                web: {
                    title: `網頁設計 \ RWD響應式網頁 \ EDM mail格式發送頁 \ 測驗互動網頁<br/>以下僅為作品展示用`,
                    list: [
                        {
                            label: '自訂功能系統頁面',
                            content: '由視覺設計師設計出圖，主要負責切板，寫網頁互動功能的部分。',
                            imgPath: require('@/assets/img/p1.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '測驗活動網站',
                            content: '從主視覺開始發想，動畫安排、網頁互動設計至完成所有頁面。',
                            imgPath: require('@/assets/img/p2.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '系統功能性介面',
                            content: '系統改版，主要負責頁面操作流程、UI UX規劃，頁面設計切版製作。',
                            imgPath: require('@/assets/img/p3.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '履歷表使用介面',
                            content: '系統改版，主要負責頁面操作流程、UI UX規劃，頁面設計切版製作。',
                            imgPath: require('@/assets/img/p4.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '使用者介面規劃',
                            content: '系統改版，主要負責頁面操作流程規劃，UI UX規劃，頁面設計。',
                            imgPath: require('@/assets/img/p5.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '系統介面規劃',
                            content: '系統改版，主要負責頁面操作流程規劃，UI UX規劃，頁面設計。',
                            imgPath: require('@/assets/img/p6.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: 'EDM問卷頁面',
                            content: '負責主要風格與信件、網頁切板製作。',
                            imgPath: require('@/assets/img/p7.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '信件發送格式',
                            content: '重新規劃系統信件風格與呈現方式。',
                            imgPath: require('@/assets/img/p8.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '測驗頁面',
                            content: '把既有的頁面改寫為RWD，增加使用者體驗，使用vue.js框架製作。',
                            imgPath: require('@/assets/img/p9.png'),
                            goto: './A/index.html'
                        },
                    ],
                },
                flat: {
                    title: `平面設計 \ Banner 設計 \ 商業攝影 \ 版型設計</br>以下僅為作品展示用`,
                    list: [
                        {
                            label: 'Banner 設計',
                            content: '依不同的使用需求製作出適合的視覺設計',
                            imgPath: require('@/assets/img/p10.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '商業攝影',
                            content: '電商產品拍攝',
                            imgPath: require('@/assets/img/p11.png'),
                            goto: './A/index.html'
                        },
                        {
                            label: '版型設計',
                            content: '購物網站首頁規劃設計，配合不同需求調整使用',
                            imgPath: require('@/assets/img/p12.png'),
                            goto: './A/index.html'
                        },
                    ]
                }
            },
        };
    },
    methods: {
        handlePage(val) {
            console.log('yes', val);
            window.open(val.goto);
        }
    },
};
</script>
<style lang="scss" scoped>
.text-grey {
    color: #999;
}
.dash {
    border: 0;
    border-bottom: 1px dashed #666;
    width: 100%;
}
.infoBox {
    word-break: break-all;
    margin-top: -40px;

    > div {
        background: #fff;
        border: 1px solid #ddd;
        text-align: center;
        padding: 16px;

        img {
            border-radius: 100%;
            margin: 20px 0;
        }
        .title {
            font-weight: bold;
            font-size: 21px;
            ~ p {
                font-weight: 100;
                font-size: 14px;
                color: rgb(170, 170, 170);
            }
        }
        .detail,
        .more {
            margin: 26px 0 20px;
            line-height: 25px;
            text-align: left;
        }
        .more {
            border-top: 1px solid #eee;
            padding-top: 25px;
        }
    }
}
.listBox {
    position: relative;
    margin: 20px 0;
    border: 1px solid $ddd;
    background: $eee;
    border-radius: 8px;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        .msgCoverBox {
            top: 0;
        }
    }
    .imgBox {
        height: 14vw;
        display: flex;
        justify-content: center;
    }
    .msgCoverBox {
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        top: 14vw;
        bottom: 0;
        color: $white;
        padding: 15px;
        border-radius: 8px;
        transition: top 0.5s;
        &:hover {
            .btnMore {
                bottom: 15px;
                transition: bottom 0.5s;
            }
        }
        .btnMore {
            font-size: 14px;
            color: $yellow;
            border: 1px solid $yellow;
            text-align: center;
            width: 50%;
            position: absolute;
            left: 25%;
            bottom: -80px;
        }
        p {
            font-weight: bold;
            margin-bottom: 8px;
        }
        span {
            color: $ddd;
        }
    }
}

// Extra small devices (portrait phones, less than 576px) xs
@media (max-width: 575.98px) {
    .infoBox {
        margin-top: -10px;
    }
    .imgBox {
        height: 60vw;
    }
}

// Small devices (landscape phones, 576px and up) sm
@media (min-width: 576px) and (max-width: 767.98px) {
    .imgBox {
        height: 25vw;
    }
}

// Medium devices (tablets, 768px and up) md
@media (min-width: 768px) and (max-width: 991.98px) {
    .imgBox {
        height: 18vw;
    }
}

// Large devices (desktops, 992px and up) lg
@media (min-width: 992px) and (max-width: 1199.98px) {
    .imgBox {
        height: 23vw;
    }
}

// Extra large devices (large desktops, 1200px and up) xl
@media (min-width: 1200px) {
}
</style>
