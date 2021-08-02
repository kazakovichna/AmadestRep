<template>
    <div class="main11">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440 && scaleY >= 1024,
                     row1LgSm: scaleX >= 1440 && scaleY < 1024,
                     row1Md: scaleX > 1240 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX <= 1240,
                     row1Ph: scaleX < 768}"
        >
            ЦЕНТР КОЛЛЕКТИВНОГО ПОЛЬЗОВАНИЯ
        </div>
        <div class="row2"
            :class="{row2Lg: scaleX >= 1440 && scaleY >= 1024,
                     row2LgSm: scaleX >= 1440 && scaleY < 1024,
                     row2Md: scaleX > 1240 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX <= 1240,
                     row2Ph: scaleX < 768 }"
            v-if="scaleX > 425"
        >
            <div class="row2textPlace">
                ЗАДАЧИ ЦЕНТРА
                <br> <br> 
                1. Обучение специалистов в рамках программ повышения квалификации в области контроля и технологий производства
                <br> <br> 
                2.  Проведение аналитических исследований для компаний-партнеров
                <br> <br> 
                3. Сотрудничество с отечественными и зарубежными организациями по НИР и ОКР  
                <br> <br> 
                4. Сертификация услуг и продукции
            </div>
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX <= 1240,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Name"
                :class="{row3NameLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024}"
            >
                <div class="Name">370 ЛАБОРАТОРИЙ</div>
                <div class="Text">В ТОМ ЧИСЛЕ</div>
            </div>
            <div class="row3IconLoop"
                :class="{row3IconLoopLg: scaleX < 1380 && scaleX > 1024,
                         row3IconLoopMd: scaleX >= 768 && scaleX < 1024,
                         row3IconLoopPl: scaleX > 425 && scaleX < 768}"
            >
                <div class="col1">
                    <div class="col11">
                        <img :src="require('@/assets/Slide11/1.png')">
                    </div>
                    <div class="col12">
                        • Международная <br> лаборатория горения <br> и энергетики <br><br>
                        • Научно-исследовательская <br> лаборатория ледовых <br> исследований <br><br>
                        • Лаборатория необитаемых <br> подводных аппаратов <br> и систем <br><br>
                        • Центр коллективного <br> пользования <br> «Автоматизированное машиностроение» 
                    </div>
                </div>
                <div class="col2">
                    <div class="col21">
                        <div class="col211">
                            <img :src="require('@/assets/Slide11/2.png')">
                        </div>
                        <div class="col12">
                            • Лаборатория <br> морской микробиологии <br><br>
                            • Лаборатория <br> химической экологии <br><br>
                            • Лаборатория современных <br> материалов и технологий
                        </div>
                    </div>
                    <div class="col21 extra">
                        <div class="col221">
                            <img :src="require('@/assets/Slide11/3.png')">
                        </div>
                        <div class="col12 ">
                            • Лаборатория комплексных <br>
                            археологических исследований <br>
                            и экспертиз объектов <br>
                            культурного наследия <br>
                        </div>
                    </div>
                </div>
                <div class="col1">
                    <div class="col11">
                        <img :src="require('@/assets/Slide11/4.png')">
                    </div>
                    <div class="col12">
                        • Лаборатория <br> фармакологии <br> и биоиспытаний <br><br>
                        • Лаборатория <br> биомедицинских <br> клеточных технологий <br><br>
                        • Лаборатория <br> «Геномная медицина» 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
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
        this.back = document.querySelector('.main11')
        this.set_scale()
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main11 {
        overflow: hidden;
        background-image: url('../assets/Slide11/back.jpg');
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
    .row1LgSm {
        margin-bottom: 1%;
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
    .row2LgSm {
        margin-bottom: 2%;
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
    .row3Name {
        font-family: "Roboto", sans-serif;
        margin: 3% 0 0 1%;
    }
    .row3NameLgSm {
        margin: 1% 0 0 1%;
    }
    .Name {
        font-size: 30px;
        color: #122352;
        font-weight: 700;
    }
    .Text {
        margin-top: 1%;
        font-size: 20px;
        color: #122352;
        font-weight: 400;
    }
    .row3IconLoop {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 3%;
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
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .col21 {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .col12 {
        margin-left: 10px;
        font-family: "Roboto", sans-serif;
        font-size: 12px;
    }
    .extra {
        margin-top: 10%;
    }
</style>