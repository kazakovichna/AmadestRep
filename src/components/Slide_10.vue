<template>
    <div class="main10">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX > 1240 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX <= 1240,
                     row1Ph: scaleX < 768}"
        >
            НАУЧНО-ИССЛЕДОВАТЕЛЬСКАЯ ДЕЯТЕЛЬНОСТЬ
        </div>
        <div class="row2"
            :class="{row2Lg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                     row2LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row2Md: scaleX > 1240 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX <= 1240,
                     row2Ph: scaleX < 768 }"
            v-if="scaleX > 425"
        >
            <div class="row2textPlace">
                В лабораториях ДВФУ ученые университета  и научных институтов Дальневосточного отделения
                 Российской академии наук проводят инженерные и естественнонаучные исследования
                  – изучения процессов горения, конструирование подводных аппаратов,
                   структурный анализ материалов, молекулярно-генетический анализ; гуманитарные науки
                    – археологические исследования и экспертиза объектов культурного наследия; биомедицина
                     – разработка новых биомедицинских технологий получения инновационных лекарственных средств
            </div>
        </div>
        <div class="row3"
            :class="{row3Lg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                     row3LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row3Pl: scaleX >= 768 && scaleX <= 1240,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3IconLoop"
                :class="{row3IconLoopLg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                         row3IconLoopLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                         row3IconLoopMd: scaleX >= 768 && scaleX < 1024,
                         row3IconLoopPl: scaleX < 768 }"
            >
                <div class="row3IconLoopItem"
                    v-for="item in Mas"
                    :key="item.pcj"
                >
                    <img :src="require(`@/assets/Slide10/${item.pcj}.png`)" alt="">
                    <div class="textBlock">
                        <div class="numDiv">{{item.num}}</div>
                        <div class="textDiv">{{item.name}}</div>
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
        Mas: [
            {
                num: "240+",
                pcj: 1,
                name: "Изобретений и полезных моделей"
            },
            {
                num: "400+",
                pcj: 2,
                name: "Патентов и свидетельств"
            },
            {
                num: "1700+",
                pcj: 3,
                name: "Преподавателей и ученых"
            },
            {
                num: "4000+",
                pcj: 4,
                name: "Научных статей в год"
            },
            {
                num: "370",
                pcj: 5,
                name: "Научных лабораторий"
            },
            {
                num: "200+",
                pcj: 6,
                name: "Приглашенных международных экспертов в год"
            }
        ]
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
        this.back = document.querySelector('.main10')
        this.set_scale()
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main10 {
        overflow: hidden;
        background-image: url('../assets/Slide10/back.jpg');
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
        padding: 3% 3% 3% 3%;
    }
    .row2LgSm {
        font-size: 20px;
        padding: 2% 3% 2% 3%;
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
        padding: 3%;
    }
    .row3Lg {
        padding: 3% 3% 6% 3%;
    }
    .row3LgSm {
        padding: 1% 3% 6% 3%;
    }   
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
    }
    .row3IconLoop {
        display: grid;
        grid-row-gap: 5%;
        grid-template-columns: repeat(3, 1fr);
    }
    .row3IconLoopLgSm {
        grid-row-gap: 10%;
    }
    .row3IconLoopMd img {
        width: 90%;
    }
    .row3IconLoopPl {
        grid-template-columns: repeat(2, 1fr);
    }
    .row3IconLoopItem {
        margin-top: 15%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .row3IconLoopItem img {
        width: 53px;
    }
    .textBlock {
        margin-left: 10%;
    }
    .textDiv {
        font-size: 15px;
        font-family: "Roboto", sans-serif;
        width: 140px;
        color: #122352;
    }
    .numDiv {
        font-size: 35px;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        color: #122352;
    }
</style>