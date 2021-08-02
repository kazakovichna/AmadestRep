<template>
    <div class="main1">
        <div class="header">
            <div class="logo">
                <img :src="require('@/assets/Slide1/LOGO FEFU.png')" alt=""
                    :class="{smallImg: scaleX <= 1024,
                            plateImg: scaleX <= 768}"
                >
            </div>
            <div class="head-r"
                :class="{plateFont: scaleX <= 864 && scaleX > 630,
                        smallFont: (scaleX <= 1224 && scaleX > 864),
                        bigFont: scaleX > 1224,
                        phoneFont: scaleX <= 630}"
            >
                <div class="text"
                    @click="$emit('GoTo', 2)"
                >
                    ИНВЕСТИЦИИ В ОБРАЗОВАНИЕ
                </div>
                <div class="text"
                    @click="$emit('GoTo', 4)"
                >
                    ИНВЕСТИЦИИ В НАУКУ
                </div>
                <div class="text"
                    @click="$emit('GoTo', 6)"
                >
                    ИНВЕСТИЦИИ В ТЕХНОЛОГИИ И ПРЕДПРИНИМАТЕЛЬСТВО
                </div>
                <div class="text"
                    @click="$emit('GoTo', 8)"
                >
                    ИНВЕСТИЦИИ В БРЕНД
                </div>
                <div class="text">
                    НОВОСТИ
                </div>
                <div class="text">
                    КОНТАКТЫ
                </div>
            </div>
        </div>
        <div class="bodyDiv"
            :class="{bodyDivSm: scaleY < 1024}"
        >
            <div class="body"
                :class="{bodyGridPc: scaleX >= 768,
                        bodyGridPh: scaleX < 768}"
            >
                <div class="mainName"
                    :class="{mainNameFullLg: scaleX >= 1440,
                            mainNameLg: scaleX < 1440 && scaleX >= 1024,
                            mainNameMd: scaleX >= 768 && scaleX < 1024,
                            mainNameSm: scaleX < 768}"
                >
                    ДВФУ
                </div>
                <div class="descrFrst"
                    :class="{descrFrst2K: scaleX >= 1600,
                            descrFrstFullLg: scaleX >= 1440 && scaleX < 1600,
                            descrFrstLg: scaleX >= 1024 && scaleX < 1440 ,
                            descrFrstMd: (scaleX >= 768 && scaleX < 1024),
                            descrFrstSm: scaleX < 768}"
                >
                    <div class="one2"
                        :class="{one2Lg: scaleX >= 1024 && scaleX < 1440,
                                 one2Md: scaleX >= 768 && scaleX < 1024}"
                        v-if="scaleX >= 768">
                        НИВЕРСИТЕТ-
                    </div>
                    <div class="one2 one3"  
                        v-else>
                        УНИВЕРСИТЕТ-
                    </div>
                    <div class="two2"
                        :class="{two2Lg: scaleX >= 1024 && scaleX < 1440,
                                 two2Md: scaleX >= 768 && scaleX < 1024}"
                    >
                        ЭТО ЛУЧШЕЕ МЕСТО ЧТОБЫ СОЗДАВАТЬ <br> БУДУЩЕЕ ПРИСОЕДИНЯЙСЯ К НАМ!
                    </div>
                </div>
            </div>
            <div class="body2"
                :class="{body2Lg: scaleX >= 768,
                         body2Sm: scaleX < 768}"
            >
                <div class="descrSec"
                    :class="{descrSecFullLg: scaleX >= 1440,
                            descrSecLg: scaleX >= 1024 && scaleX < 1440,
                            descrSeсMd: scaleX >= 768 && scaleX < 1024,
                            descrSecSm: scaleX < 768}"
                >
                    <div>
                        МЫ КОНЦЕНТРИРУЕМ ЛУЧШИЕ <br>
                    ИНТЕЛЛЕКТУАЛЬНЫЕ СИЛЫ НАШЕЙ СТРАНЫ, <br>
                    ГОТОВИМ КАДРЫ ДЛЯ НОВОЙ ЭКОНОМИКИ, <br>
                    ЗАПУСКАЕМ ОБРАЗОВАТЕЛЬНЫЕ <br>
                    ПРОГРАММЫ В ИНТЕРЕСАХ РАБОТОДАТЕЛЕЙ.
                    </div>
                </div>
                <div class="descrTrd"
                    :class="{descrTrdFullLg: scaleX >= 1440,
                            descrTrdLg: scaleX >= 1024 && scaleX < 1440,
                            descrTrdMd: scaleX >= 768 && scaleX < 1024,
                            descrSecSm: scaleX < 768}"
                >
                    <div>
                        ВМЕСТЕ С ПАРТНЕРАМИ МЫ ОТВЕЧАЕМ <br>
                    НА ГЛОБАЛЬНЫЕ ВЫЗОВЫ, <br>
                    СТРЕМИМСЯ БЫТЬ ЗАМЕТНЫМИ <br>
                    В МИРОВОМ МАСШТАБЕ, <br>
                    РАЗВИВАЕМ НАУКУ И ОБРАЗОВАНИЕ.    
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    data: () => ({
        back: null,
        bodyDivH: null,
        header: null
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
            // console.log(this.back.style.height)
            // this.header = document.querySelector('.header').offsetHeight
            // console.log(this.header)
            // this.bodyDivH.style.height = `${this.scaleY - this.header.style.height}px`
        }
    },
    mounted() {
        this.back = document.querySelector('.main1')
        // this.bodyDivH = document.querySelector('.bodyDiv')

        this.set_scale()
        
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
    .main1 {
        overflow: hidden;
        background-image: url('../assets/Slide1/1.jpg');
        background-size: cover;
        background-position: center top;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header {
        height: 10%;
        margin: 2% 0 2% 4%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .smallImg {
        width: 100px;
    }
    .logo {
        margin-right: 5%;
    }
    .head-r {
        color: white;
        font-family: 'Roboto', sans-serif;
        display: grid;
        align-items: center;
        grid-gap: 1%;
    }
    .phoneFont {
        grid-template-columns: 1fr 0.8fr 1fr;
    }
    .phoneFont div {
        font-size: 8px;
    }
    .text {
        cursor: pointer;
    }
    /* Настройка надписей наверху */
    .plateFont {
        grid-template-columns: 1fr 1fr 1.1fr 1fr 0.8fr 1fr;
        font-size: 10px;
    }
    .smallFont {
        grid-template-columns: 1fr 1fr 1.1fr 1fr 0.8fr 1fr;
        font-size: 0.8em;
    }
    .bigFont {
        grid-template-columns: 0.8fr 1fr 1.2fr 1fr 0.6fr 1fr;
        font-size: 1em;
    }

    .bodyDiv {
        height: 80%;
        margin-top: 10%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
    }
    .bodyDivSm {
        height: 80%;
        margin-top: 5%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
    }
    /* Настройка адаптива боди */
    .body {
        height: 50%;
        width: 100%;
        margin: 1% 1% 0 1%;
        display: grid;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
    .bodyGridPc {
        grid-template-columns: 1fr 1fr;
        /* margin-top: 10%; */
    }
    .bodyGridPh {
        grid-template-rows: 1fr 1fr;
    }

    /* Настройка шрифтов в боди */
    .mainName {
        font-weight: 800;
        opacity: 75%;
    }
    .mainNameFullLg {
        z-index: 2;
        position: relative;
        left: 15%; 
        text-align: right;
        font-size: 225px;
    }
    .mainNameLg {
        z-index: 2;
        position: relative;
        left: 10%;
        text-align: right;
        font-size: 155px;
    }
    .mainNameMd {
        z-index: 2;
        position: relative;
        left: 15%;
        text-align: right;
        font-size: 100px;
    }
    .mainNameSm {
        text-align: center;
        font-size: 100px;
    }
    .descrFrst {
        display: flex;
    }
    .descrFrst2K {
        padding: 0 0 6% 16%;
        background-color: rgba(0, 0, 0, 0.35);
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .descrFrstFullLg {
        padding: 0 0 14% 18%;
        background-color: rgba(0, 0, 0, 0.35);
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .descrFrstLg {
        padding: 0 0 6% 10%;
        background-color: rgba(0, 0, 0, 0.35);
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .descrFrstMd {
        padding: 0 0 2% 15%;
        background-color: rgba(0, 0, 0, 0.35);
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin-bottom: 0;
    }
    .descrFrstSm {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
    }
    .one2 {
        font-size: 52px;
        font-weight: 700;
        opacity: 75%;
    }
    .one2Lg {
        font-size: 30px;
        font-weight: 600;
    }
    .one2Md {
        font-size: 25px;
    }
    .one3 {
        font-size: 33px;
    }
    .two2 {
        width: 70%;
        font-size: 18px;
    }
    .two2Lg {
        font-size: 14px;
        font-weight: 400;
    }
    .two2Md {
        width: 98%;
        font-size: 12px;
        font-weight: 400;
    }
    .body2 {
        height: 50%;
        color: white;
        display: grid;
        font-family: 'Roboto', sans-serif;
    }
    .body2Lg {
        width: 100%;
        grid-template-columns: 1fr 1fr;
    }  
    .body2Md {
        margin-top: 5%;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
    } 
    .body2Sm {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25% 0 25% 0;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .descrTrd {
        height: 100%;
        width: 50%;
        font-weight: 500;
        text-align: left;
    }
    .descrTrdFullLg {
        width: 100%;
        display: flex;
        font-size: 22px;
        justify-content: flex-start;
    }
    .descrTrdFullLg div {
        margin: 10% 0 0 5%;
        height: 90px;
    }
    .descrTrdLg {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
    .descrTrdLg div {
        margin: 5%;
        width: 400px;
        height: 90px;
    }
    .descrTrdMd {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
    .descrTrdMd div {
        font-size: 14px;
        margin: 5% 0 0 5%;
        width: 350px;
        height: 90px;
    }
    .descrSec {
        height: 100%;
        font-weight: 500;
        text-align: right;
    }
    .descrSecSm {
        width: 100%;
        font-size: 15px;
        margin-bottom: 10%;
    }
    .descrSecFullLg {
        width: 100%;

        height: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: 22px;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .descrSecFullLg div { 
        margin: 10% 5% 0 0;
        /* width: 400px; */
        height: 90px;
    }
    .descrSecLg {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .descrSecLg div {
        margin: 5%;
        width: 400px;
        height: 90px;
    }
    .descrSeсMd {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .descrSeсMd div {
        font-size: 14px;
        margin: 5% 5% 0 0;
        width: 350px;
        height: 90px;
    }
</style>
