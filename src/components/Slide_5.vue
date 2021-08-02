<template>
    <div class="main5">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            ПРОГРАММЫ ПРАКТИК И СТАЖИРОВОК ДЛЯ СТУДЕНТОВ
        </div>
        <div class="row2"
            :class="{row2LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024, 
                     row2Lg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                     row2Md: scaleX >= 1024 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX < 1024,
                     row2Ph: scaleX < 768 }"
            v-if="scaleX > 425"
        >
            <div class="row2textPlace">
               Совместно с ведущими университетами, исследовательскими центрами, 
               крупнейшими предприятиями, государственными ведомствами, 
               институтами развития и бизнесом Дальневосточный федеральный университет 
               выстраивает эффективную сеть практик и стажировок для студентов с вариацией форматов
               и условий под особый запрос партнера
            </div>
        </div>
        <div class="row3"
            :class="{row3LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row3Lg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                     row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3IconLoop"
                :class="{row3IconLoopPh: scaleX <= 425}"
            >
                <div class="row3IconLoopItem"
                    :class="{row3IconLoopItemLg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                             row3IconLoopItemLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                             row3IconLoopItemMd: scaleX >= 1024 && scaleX < 1440,
                             row3IconLoopItemPl: scaleX > 425 && scaleX < 1024,
                             row3IconLoopItemPh: scaleX <= 425}"
                    v-for="item in FEVUschoolMas"
                    :key="item.photo"
                >
                    <img :src="require(`@/assets/Slide5/${item.photo}.png`)">
                    <div class="itemText">
                        <div class="textName">
                            {{item.name}}
                        </div>
                        <div class="textText" style="font-size: 12px" v-html="item.text">
                            
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
        FEVUschoolMas: [
            {
                name: 'СЕТЕВАЯ ПРОГРАММА',
                photo: '1', 
                text: "организация совместной <br> образовательной программы <br> с партнером"
            },
            {
                name: 'ПРОЕКТНАЯ ДЕЯТЕЛЬНОСТЬ',
                photo: '2', 
                text: "решение проектных задач, <br> инициированных партнерами"
            },
            {
                name: 'ПРОГРАММЫ  АКАДЕМИЧЕСКОГО ОБМЕНА',
                photo: '3', 
                text: "переподготовка <br> специалистов по заказу <br> отраслевого партнера"
            },
            {
                name: 'СТАЖИРОВКА',
                photo: '4', 
                text: "приобретение опыта <br> производственной <br> деятельности в компании"
            },
            {
                name: 'ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ',
                photo: '5', 
                text: "краткосрочное обучение <br> в международных вузах"
            },
            {
                name: 'ПРАКТИКА',
                photo: '6', 
                text: "получение навыков <br> практической работы <br> на предприятии"
            },
            {
                name: 'КОНКУРСНОЕ ТРУДОУСТРОЙСТВО',
                photo: '7', 
                text: "отбор на вакантную <br> должность или в кадровый <br> резерв"
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
        this.back = document.querySelector('.main5')
        this.set_scale()

        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main5 {
        overflow: hidden;
        background-image: url('../assets/Slide5/back.png');
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
        padding: 1% 3% 1% 3%;
        background-color: rgba(255, 255, 255, 0.75);
        font-family: 'Roboto', sans-serif;
    }
    .row2LgSm {
        font-size: 20px;
        padding: 2% 2% 2% 4%;
        margin-bottom: 1%;
    }
    .row2Lg {
        font-size: 20px;
        padding: 3% 2% 3% 4%;
    }
    .row2Md {
        font-size: 15px;
        padding: 1% 3% 1% 3%;
    }
    .row2Pl {
        font-size: 12px;
        width: 80%;
        padding: 1% 3% 1% 3%;
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
    .row3LgSm {
        padding: 0 3% 4% 3%;
    }
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
        padding-bottom: 20%;
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
    .row3IconLoop {
        font-size: 15px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3%;
    }
    .row3IconLoopPh {
        grid-template-columns: repeat(1, 1fr);
    }
    .row3IconLoopItem {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .row3IconLoopItemLg {
        margin-top: 15%;
    }
    .row3IconLoopItemLg img {
        width: 75px;
    }
    .row3IconLoopItemLg div .textText {
        font-size: 12px;
    }
    .row3IconLoopItemLgSm {
        margin-top: 15%;
    }
    .row3IconLoopItemLgSm img {
        width: 75px;
    }
    .row3IconLoopItemLgSm div .textText {
        font-size: 10px;
    }
    .row3IconLoopItemMd img {
        width: 30%;
    }
    .row3IconLoopItemMd {
        font-size: 14px;
    }
    .row3IconLoopItemPl img {
        width: 25%;
    }
    .row3IconLoopItemPl {
        font-size: 12px;
    }
    .row3IconLoopItemPh img {
        width: 17%;
    } 
    .row3IconLoopItemPh {
        font-size: 13px;
    }
    .itemText {
        margin-left: 2%;   
        text-align: left;
        font-family: 'Roboto', sans-serif;
    }
    .textName {
        margin-bottom: 2%;
        font-size: 15px;
    }
</style>