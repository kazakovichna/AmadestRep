<template>
    <div class="main6">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            СТИПЕНДИАЛЬНЫЕ И ГРАНТОВЫЕ ПРОГРАММЫ
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Img"
                :class="{row3ImgLg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                         row3ImgLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                         row3ImgMd: scaleX < 1440 && scaleX >= 1024,
                         row3ImgPl: scaleX < 1024 && scaleX >= 768,
                         row3ImgPh: scaleX < 768 && scaleX > 425}"
            >
                <div class="row2">
                    <div class="row2row1"
                        :class="{row2row1Ph: scaleX < 768}"
                    >
                        <div class="row2NameDiv">
                            <img :src="require('@/assets/Slide6/Fond.png')" alt="">
                            <div>
                                ОТРАСЛЕВЫЕ КОМПАНИИ
                            </div>
                        </div>
                        <div class="row2Loop"
                            :class="{row2LoopPh: scaleX < 768}"
                        >
                            <div class="row2LoopItem"
                                v-for="item in Mas1"
                                :key="item"
                            >
                                <img :src="require(`@/assets/Slide6/1/${item}.png`)" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row2Loop2"
                        :class="{row2Loop2Ph: scaleX < 768}"
                    >
                        <div class="row2LoopItem"
                                v-for="item in Mas1"
                                :key="item"
                            >
                                <img :src="require(`@/assets/Slide6/4/${item}.png`)" alt="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row2row1"
                        :class="{row2row1Ph: scaleX < 768}"
                    >
                        <div class="row2NameDiv">
                            <img :src="require(`@/assets/Slide6/Fond2.png`)" alt="">                            
                            <div class="row2Name">ФОНДЫ</div>
                        </div>
                        <div class="row2Loop"
                            :class="{row2LoopPh: scaleX < 768}"
                        >
                            <div class="row2LoopItem"
                                v-for="item in Mas1"
                                :key="item"
                            >
                                <img :src="require(`@/assets/Slide6/2/${item}.png`)" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row4">
                    <div class="row2row1"
                        :class="{row2row1Ph: scaleX < 768}"
                    >
                        <div class="row2NameDiv">
                            <img :src="require(`@/assets/Slide6/Fond3.png`)" alt="">
                            <div class="row2Name">БАНКИ</div>
                        </div>
                        <div class="row2Loop3"
                            :class="{row2Loop3Ph: scaleX < 768}"
                        >
                            <div class="row2LoopItem"
                                v-for="item in Mas2"
                                :key="item"
                            >
                                <img :src="require(`@/assets/Slide6/3/${item}.png`)" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
 data: () => ({
        back: null,
        Mas1: [1, 2, 3, 4],
        Mas2: [1, 2, 3]
    }),
    computed: {
        // ...mapGetters([
        //      'GET_SCALE_Y'
        // ])
    },
    props: {
        scaleX: Number,
        scaleY: Number
    },
    methods: {
        set_scale () {
            this.back.style.height = `${this.scaleY}px`
        }
    },
    mounted() {
        this.back = document.querySelector('.main6')
        this.set_scale()

        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main6 {
        overflow: hidden;
        background-image: url('../assets/Slide6/back.png');
        background-position: center center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .row1 {
        margin-bottom: 2%;
        width: 60%;
        padding: 3%;
        background-color: #122352;
        font-family: 'Roboto', sans-serif;
        color: white;
    }
    .row1Lg {
        font-size: 40px;
    }
    .row1Md {
        font-size: 25px;
    }
    .row1Pl {
        font-size: 20px;
        width: 80%;
    }
    .row1Ph {
        width: 85%;
        font-size: 20px;
    }
    .row3 {
        width: 60%;
        background-color: rgba(255, 255, 255, 0.75);
        padding: 0 3% 1% 3%;
    }
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
    }
    .row3Img {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .row2 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .row2row1 {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .row2row1Ph {
        flex-direction: column;
    }
    .row2NameDiv {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .row2NameDiv div {
        margin-left: 10%;
        width: 160px;
        
        font-size: 20px;
        font-family: "Roboto", sans-serif;
    }
    .row2Loop {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .row2LoopPh {
        grid-template-columns: repeat(4, 1fr);
    }
    .row2LoopPh .row2LoopItem img {
        width: 80px;
    }
    .row2LoopItem img {
        width: 100%;
    }
    .row2Loop2 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .row2Loop2 .row2LoopItem {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100px;
        width: 100%;
    }
    .row2Loop2 .row2LoopItem img {
        width: 90%;
        position: relative;
        bottom: 70%;
        overflow: hidden;
    }
    .row2Loop2Ph .row2LoopItem img {
        width: 90%;
        position: relative;
        bottom: 20%;
        overflow: hidden;
    }
    .row {
        margin-top: 2%;
    }
    .row4 {
        margin-top: 0;
    }
    .row2Loop3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .row2Loop3 .row2LoopItem {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100px;
        width: 100%;
    }
    .row2Loop3 .row2LoopItem img {
        width: 90%;
        position: relative;
        bottom: 90%;
        overflow: hidden;
    }
    .row2Loop3Ph .row2LoopItem img {
        width: 90%;
        position: relative;
        bottom: 20%;
        overflow: hidden;
    }
</style>