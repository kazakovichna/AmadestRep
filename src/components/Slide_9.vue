<template>
    <div class="main9">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            ИНВЕСТИЦИИ В НАУКУ
        </div>
        <div class="row2"
            :class="{row2Lg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                     row2LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row2Md: scaleX >= 1024 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX < 1024,
                     row2Ph: scaleX < 768 }"
        >
            <div class="row2textPlace">
                Будущее Дальнего Востока — это современное образование, наука, международное сотрудничество. 
                ДВФУ намерен создать на острове Русский крупный научно-образовательный центр мирового уровня, 
                который позволит решать фундаментальные и прикладные задачи в различных областях науки
            </div>
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Head"
                :class="{row3HeadPl: scaleX >= 768 && scaleX < 1024,
                         row3HeadPh: scaleX < 768}"
            >
                ПРИОРИТЕТНЫЕ НАПРАВЛЕНИЯ
            </div>
            <div class="row3IconLoop"
                :class="{row3IconLoopLg: scaleX >= 768 && scaleX > 2000 && scaleY < 1024,
                         row3IconLoopPh: scaleX < 768 && scaleX > 425,
                         row3IconLoopPh1: scaleX <= 425}"
            >
                <div class="row3IconLoopItem"
                    :class="{row3IconLoopItemLg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                             row3IconLoopItemLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                             row3IconLoopItemMd: scaleX >= 1024 && scaleX < 1440,
                             row3IconLoopItemPl: scaleX >= 768 && scaleX < 1024,
                             row3IconLoopItemPh: scaleX < 768 && scaleX > 425,
                             row3IconLoopItemPh1: scaleX <= 425}"
                    v-for="item in FEVUschoolMas"
                    :key="item.photo"
                >
                    <img :src="require(`@/assets/Slide9/${item.photo}.png`)">
                    <div class="itemText">
                        {{item.name}}
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
                name: 'МИРОВОЙ ОКЕАН',
                photo: '1'
            },
            {
                name: 'БИОМЕДИЦИНА',
                photo: '2'
            },
            {
                name: 'ИЗУЧЕНИЕ ВОСТОКА ',
                photo: '3'
            },
            {
                name: 'ФИЗИКА И МАТЕРИАЛЫ',
                photo: '4'
            },
            {
                name: 'ЦИФРОВОЕ РАЗВИТИЕ',
                photo: '5'
            },
            {
                name: 'ИНЖИНИРИНГ',
                photo: '6'
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
        this.back = document.querySelector('.main9')
        this.set_scale()
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main9 {
        overflow: hidden;
        background-image: url('../assets/Slide9/back.jpg');
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
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
    }
    .row3Head {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
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
        grid-gap: 1%;
    }
    .row3IconLoopLg {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5%;
    }
    .row3IconLoopPh {
        grid-template-columns: repeat(3, 1fr);
    }
    .row3IconLoopPh1 {
        grid-template-columns: repeat(2, 0.8fr);
    }
    .row3IconLoopItem {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10%;
        font-size: 20px;
    }
    .row3IconLoopItemLg {
        margin-top: 20%;
        font-size: 15px;
    }
    .row3IconLoopItemLg img {
        width: 90px;
    }
    .row3IconLoopItemLg div {
        font-weight: 500;
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
        margin-top: 20%;
    }
    .row3IconLoopItemPh img {
        width: 40%;
    } 
    .row3IconLoopItemPh {
        font-size: 10px;
        margin-top: 15%;
    }
    .row3IconLoopItemPh1 {
        font-size: 10px;
        margin-top: 10%;
    }
    .row3IconLoopItemPh1 img {
        width: 40%;
    }
    .itemText {
        margin-top: 5%;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
</style>