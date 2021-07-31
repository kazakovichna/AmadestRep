<template>
    <div class="main7">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            МЕЖДУНАРОДНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ИНТЕНСИВЫ
        </div>
        <div class="row2"
            :class="{row2Lg: scaleX >= 1440,
                     row2Md: scaleX >= 1024 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX < 1024,
                     row2Ph: scaleX < 768 }"
        >
            <div class="row2textPlace">
               Международные зимние и летние школы – это краткосрочные образовательные 
                программы для иностранных студентов, которые позволяют им повысить знания 
                и перенять опыт у ведущих ученых и преподавателей со всего мира, 
                используя высокотехнологичные лаборатории ДВФУ. Кроме того, это возможность 
                пройти усиленный курс по изучению русского языка, знакомство с культурой страны 
                и достопримечательностями города
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
                СТРАНЫ-УЧАСТНИЦЫ ПРОГРАММ
            </div>
            <div class="row3IconLoop"
                :class="{row3IconLoopMd: scaleX <= 1360 && scaleX > 1024,
                        row3IconLoopPl: scaleX <= 1024 && scaleX > 768,
                        row3IconLoopPh: scaleX <= 768}"
            >
                <div class="row3IconLoopItem"
                    :class="{row3IconLoopItemLg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                             row3IconLoopItemLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                             row3IconLoopItemMd: scaleX >= 1024 && scaleX < 1440,
                             row3IconLoopItemPl: scaleX >= 768 && scaleX < 1024,
                             row3IconLoopItemPh: scaleX < 768}"
                    v-for="item in FEVUschoolMas"
                    :key="item.photo"
                >
                    <img :src="require(`@/assets/Slide7/${item.photo}.jpg`)">
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
                photo: '1'
            },
            {
                photo: '2'
            },
            {
                photo: '3'
            },
            {
                photo: '4'
            },
            {
                photo: '5'
            },
            {
                photo: '6'
            },
            {
                photo: '7'
            },
            {
                photo: '8'
            },
            {
                photo: '9'
            },
            {
                photo: '10'
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
        this.back = document.querySelector('.main7')
        
        this.set_scale()
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main7 {
        overflow: hidden;
        background-image: url('../assets/Slide7/back.png');
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
        padding: 3% 3% 6% 3%;
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
    .row3IconLoop {
        font-size: 15px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 5%;
    }
    .row3IconLoopMd {
        grid-template-columns: repeat(4, 1fr);
    }
    .row3IconLoopPl {
        grid-template-columns: repeat(4, 1fr);
    }
    .row3IconLoopPh {
        grid-template-columns: repeat(3, 1fr);
    }
    .row3IconLoopItem {
        display: flex;
        justify-content: center;
    }
    .row3IconLoopItem img {
        width: 80%;
    }
    .row3IconLoopItemLg {
        width: 100%;
    }
    .row3IconLoopItemLg img{
        margin-top: 25%;
    }
    .row3IconLoopItemLgSm img {
        margin-top: 5%;
    }
    .row3IconLoopItemMd img {
        width: 70%;
    }
    .row3IconLoopItemMd {
        font-size: 14px;
    }
    .row3IconLoopItemPl img {
        width: 75%;
    }
    .row3IconLoopItemPl {
        font-size: 12px;
    }
    .row3IconLoopItemPh img {
        width: 40%;
    } 
    .row3IconLoopItemPh {
        font-size: 10px;
    }
    .itemText {
        margin-top: 5%;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
</style>