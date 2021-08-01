<template>
    <div class="main12">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX > 1240 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX <= 1240,
                     row1Ph: scaleX < 768}"
        >
            ФОНД ДВФУ
        </div>
        <div class="row2"
            :class="{row2Lg: scaleX >= 1440,
                     row2Md: scaleX > 1240 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX <= 1240,
                     row2Ph: scaleX < 768 }"
            v-if="scaleX > 425"
        >
            <div class="row2textPlace">
                Фонд целевого капитала ДВФУ создан с целью обеспечения долгосрочного устойчивого финансирования
                 проектов, реализующихся в университете, поддержки развития и совершенствования инфраструктуры
                  крупнейшего научно-образовательного центра Дальнего Востока России. Активы Фонда формируются
                   за счет добровольных пожертвований крупнейших банков России, государственных и
                    негосударственных организаций и предприятий, физических лиц, заинтересованных в развитии
                     Дальневосточного федерального университета
            </div>
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX <= 1240,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Head"
                :class="{row3HeadPl: scaleX >= 768 && scaleX < 1024,
                         row3HeadPh: scaleX < 768}"
            >
                ОСНОВНЫЕ ПАРТНЕРЫ ФОНДА 
            </div>
            <div class="row3BigLoop">
                <div class="row3IconLoop"
                :class="{row3IconLoopLg: scaleX < 1440 && scaleX > 1024,
                            row3IconLoopMd: scaleX >= 768 && scaleX < 1024,
                            row3IconLoopPl: scaleX > 425 && scaleX < 768}"
                >
                    <div class="col1">
                        <div class="col1Item"
                            v-for="item in Mas"
                            :key="item"
                        >
                            <img :src="require(`@/assets/Slide12/${item}.png`)" alt="">
                        </div>
                    </div>
                    <div class="col2">
                        <div class="col1Item"
                            v-for="item in Mas2"
                            :key="item"
                        >
                            <img :src="require(`@/assets/Slide12/${item}.png`)" alt="">
                        </div>
                    </div>
                </div>
                <div class="row3IconLoop2">
                    <div class="row3IconItem">
                        <img :src="require('@/assets/Slide12/9.png')" alt="">
                        <div class="row3Text">
                            <div class="Text1">590 МЛН РУБ</div>
                            <div class="Text2">АКТИВЫ ФОНДА НА 2020</div>
                        </div>
                    </div>
                    <img :src="require('@/assets/Slide12/10.png')" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
 data: () => ({
        back: null,
        Mas: [1, 2, 3, 4, 5, 6],
        Mas2: [7, 8]
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
        this.back = document.querySelector('.main12')
        this.set_scale()
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main12 {
        overflow: hidden;
        background-image: url('../assets/Slide12/back.jpg');
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
    .row2 {
        margin-bottom: 2%;
        width: 60%;
        padding: 2% 3% 2% 3%;
        background-color: rgba(255, 255, 255, 0.75);
        font-family: 'Roboto', sans-serif;
    }
    .row2Lg {
        font-size: 20px;
    }
    .row2Md {
        font-size: 15px;
        padding: 2% 3% 2% 3%;
    }
    .row2Pl {
        font-size: 12px;
        width: 80%;
        padding: 2% 3% 2% 3%;
    }
    .row2Ph {
        width: 85%;
        font-size: 14px;
    }
    .row2textPlace {
        border-width: 1px 0 1px 0;
        border-style: solid;
        border-color: black;
        padding: 2% 0 2% 0;
    }
    .row3 {
        width: 60%;
        background-color: rgba(255, 255, 255, 0.75);
        padding: 1% 3% 3% 3%;
    }
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
    }
    .row3Head {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        margin-bottom: 2%;
    }
    .row3HeadPl {
        font-size: 15px;
    }
    .row3HeadPh {
        font-size: 12px;
    }
    .row3BigLoop {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .row3IconLoop {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .row3IconLoopLg img {
        width: 55%;
    }
    .row3IconLoopMd img {
        width: 90%;
    }
    .row3IconLoopPl img {
        width: 90%;
    }
    .col1 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
    }
    .col1Item {
        display: flex;
        justify-content: center;
    }
    .col1Item img {
        width: 130px;
    }
    .col2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }
    .row3IconItem {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .row3IconLoop2 {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .row3IconItem img {
        height: 160px;
    }
    .row3Text {
        margin-bottom: 10%;
    }
    .Text1 {
        font-family: "Roboto", sans-serif;
        font-size: 30px;
        color: #122352;
        font-weight: 700;
        position: relative;
        right: 10%;
        width: 110%;
    }
    .Text2 {
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        color: #393b41;
        font-weight: 500;
    }
</style>