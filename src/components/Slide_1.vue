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
        <div class="body"
            :class="{bodyGridPc: scaleX > 768,
                     bodyGridPh: scaleX <= 768}"
        >
            <div class="mainName"
                :class="{mainNameLg: scaleX >= 1080,
                         mainNameMd: (scaleX >= 768 && scaleX < 1080),
                         mainNameSm: scaleX < 768}"
            >
                ДВФУ
            </div>
            <div class="descrFrst"
                :class="{descrFrstLg: scaleX >= 1024,
                         descrFrstMd: (scaleX >= 768 && scaleX < 1080),
                         descrFrstSm: scaleX < 768}"
            >
                <div class="one2"
                    :class="{one2Md: scaleX > 768 && scaleX < 1080}"
                    v-if="scaleX >= 768">
                    НИВЕРСИТЕТ-
                </div>
                <div class="one2 one3"  
                    v-else>
                    УНИВЕРСИТЕТ-
                </div>
                <div class="two2"
                    :class="{two2Md: scaleX > 768 && scaleX < 1080}"
                >
                    ЭТО ЛУЧШЕЕ МЕСТО ЧТОБЫ СОЗДАВАТЬ БУДУЮЩЕЕ ПРИСОЕДИНЯЙСЯ К НАМ!
                </div>
            </div>
        </div>
        <div class="body2"
            :class="{body2Lg: scaleX >= 1080,
                     body2Md: scaleX >= 768 && scaleX < 1080,
                     body2Sm: scaleX < 768}"
        >
            <div class="descrSec"
                :class="{descrSecSm: scaleX < 768}"
            >
                МЫ КОНЦЕНТРИРУЕМ ЛУЧШИЕ
                ИНТЕЛЛЕКТУАЛЬНЫЕ СИЛЫ НАШЕЙ СТРАНЫ,
                ГОТОВИМ КАДРЫ ДЛЯ НОВОЙ ЭКОНОМИКИ,
                ЗАПУСКАЕМ ОБРАЗОВАТЕЛЬНЫЕ
                ПРОГРАММЫ В ИНТЕРЕСАХ РАБОТОДАТЕЛЕЙ.
            </div>
            <div class="descrTrd"
                :class="{descrSecSm: scaleX < 768}"
            >
                ВМЕСТЕ С ПАРТНЕРАМИ МЫ ОТВЕЧАЕМ
                НА ГЛОБАЛЬНЫЕ ВЫЗОВЫ, 
                СТРЕМИМСЯ БЫТЬ ЗАМЕТНЫМИ 
                В МИРОВОМ МАСШТАБЕ, 
                РАЗВИВАЕМ НАУКУ И ОБРАЗОВАНИЕ.
            </div>
        </div>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    data: () => ({
        back: null
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
        this.back = document.querySelector('.main1')
        this.back.style.height = `${this.scaleY}px`
        
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

    /* Настройка адаптива боди */
    .body {
        margin: 1% 1% 0 1%;
        display: grid;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
    .bodyGridPc {
        grid-template-columns: 1fr 1fr;
        margin-left: 10%;
    }
    .bodyGridPh {
        grid-template-rows: 1fr 1fr;
    }

    /* Настройка шрифтов в боди */
    .mainName {
        font-weight: 800;
        opacity: 75%;
    }
    .mainNameLg {
        text-align: right;
        font-size: 220px;
    }
    .mainNameMd {
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
    .descrFrstLg {
        margin-bottom: 15%;
        
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .descrFrstMd {
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
        font-size: 48px;
        font-weight: 700;
        opacity: 75%;
    }
    .one2Md {
        font-size: 30px;
    }
    .one3 {
        font-size: 33px;
    }
    .two2 {
        width: 70%;
    }
    .two2Md {
        width: 100%;
    }
    .body2 {
        color: white;
        display: flex;
        font-family: 'Roboto', sans-serif;
    }
    .body2Lg {
        width: 60%;
        justify-content: center;
        align-items: flex-start;
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
        padding: 10%;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .descrSec {
        width: 50%;
        margin: 2%;
        font-weight: 600;
        text-align: right;
    }
    .descrTrd {
        width: 50%;
        margin: 2%;
        font-weight: 600;
        text-align: left;
    }
    .descrSecSm {
        width: 90%;
    }
</style>
