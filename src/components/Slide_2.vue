<template>
    <div class="main2">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            ИНВЕСТИЦИИ В ОБРАЗОВАНИЕ
        </div>
        <div class="row2"
            :class="{row2Lg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                     row2LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row2Md: scaleX >= 1024 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX < 1024,
                     row2Ph: scaleX < 768 }"
        >
            <div class="row2textPlace">
                ДВФУ реализует более 200 образовательных программ, в том числе совместные 
                программы с российскими и зарубежными вузами, программы на английском языке, 
                а также профильные программы совместно с индустриальными партнерами, 
                что позволяет выстроить уникальную систему подготовки квалифицированных кадров 
                при непосредственном участии работодателя с учетом актуальной ситуации на рынке
            </div>
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Head"
                :class="{row3HeadPl: scaleX >= 768 && scaleX < 1024,
                         row3HeadPh: scaleX < 768}"
            >
                ИНСТИТУТЫ И ШКОЛЫ ДВФУ
            </div>
            <div class="row3IconLoop"
                :class="{row3IconLoopPh: scaleX < 768}"
            >
                <div class="row3IconLoopItem"
                    :class="{row3IconLoopItemMd: scaleX >= 1024 && scaleX < 1440,
                             row3IconLoopItemPl: scaleX >= 768 && scaleX < 1024,
                             row3IconLoopItemPh: scaleX < 768}"
                    v-for="item in FEVUschoolMas"
                    :key="item.photo"
                >
                    <img :src="require(`@/assets/Slide2/school/${item.photo}.png`)">
                    <div class="itemText">
                        {{item.name}}
                    </div>
                </div>  
            </div>
            <div class="row3IconLoop2"
                :class="{row3IconLoopLgSm: scaleY < 1024,
                         row3IconLoopPh: scaleX < 768}"
            >
                <div class="row3IconLoopItem"
                    :class="{row3IconLoopItemMd: scaleX >= 1024 && scaleX < 1440,
                             row3IconLoopItemPl: scaleX >= 768 && scaleX < 1024,
                             row3IconLoopItemPh: scaleX < 768}"
                    v-for="item in FEVUschoolMas2"
                    :key="item.photo"
                >
                    <img :src="require(`@/assets/Slide2/school/${item.photo}.png`)">
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
                name: 'Юридическая школа',
                photo: 'yur'
            },
            {
                name: 'Восточный институт',
                photo: 'srmi'
            },
            {
                name: 'Школа педагогики',
                photo: 'sp'
            },
            {
                name: 'Школа искусстви гуманитарных наук',
                photo: 'sign'
            },
            {
                name: 'Школа экономики и менеджмента',
                photo: 'sem'
            },
            {
                name: 'Школа медицины',
                photo: 'med'
            }
        ],
        FEVUschoolMas2: [
            {
                name: 'Институт мирового океана',
                photo: 'ocean'
            },
            {
                name: 'Политехнический институт',
                photo: 'pi'
            },
            {
                name: 'Институт наук о жизни и биомедицины',
                photo: 'bio'
            },
            {
                name: 'Институт математикии компьютерных технологий',
                photo: 'sce'
            },
            {
                name: 'Институт наукоемких технологий и передовых материалов',
                photo: 'sen'
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
        this.back = document.querySelector('.main2')
        this.set_scale()

        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main2 {
        overflow: hidden;
        background-image: url('../assets/Slide2/back.png');
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
        margin-bottom: 4%;
        width: 60%;
        padding: 2% 3% 2% 3%;
        background-color: rgba(255, 255, 255, 0.75);
        font-family: 'Roboto', sans-serif;
    }
    .row2Lg {
        font-size: 20px;
        padding: 4% 3% 4% 3%;
    }
    .row2LgSm {
        font-size: 20px;
        padding: 2% 3% 2% 3%;
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
        padding: 3%;
    }
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
    }
    .row3LgSm {
        padding: 1% 3% 1% 3%;
    }
    .row3LgSm .row3Head {
        margin: 0 0 2% 4%;
    }
    .row3Head {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        margin: 0 0 6% 4%;
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
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 1%;
    }
    .row3IconLoop2 {
        font-size: 15px;
        margin-top: 7%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1%;
    }
    .row3IconLoopLgSm {
        margin-top: 2%;
    }
    .row3IconLoopPh {
        grid-template-columns: repeat(3, 1fr);
    }
    .row3IconLoopItem {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
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