<template>
    <div class="main8">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX > 1240 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX <= 1240,
                     row1Ph: scaleX < 768}"
        >
            ОСТРОВ ТАЛАНТОВ
        </div>
        <div class="row2"
            :class="{row2Lg: scaleX >= 1440,
                     row2Md: scaleX > 1240 && scaleX < 1440,
                     row2Pl: scaleX >= 768 && scaleX <= 1240,
                     row2Ph: scaleX < 768 }"
            v-if="scaleX > 425"
        >
            <div class="row2textPlace">
                В ДВФУ создана уникальная система образовательных программ для старшеклассников, 
                которая реализуется в форматах проектных интенсивов, олимпиад, хакатонов 
                и конкурсов. В рамках программ школьники решают кейс-задания по выбранным направлениям,
                разрабатывают совместные проекты с ведущими педагогами ДВФУ, 
                представителями крупнейших государственных корпораций и бизнеса
            </div>
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX <= 1240,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Img"
                :class="{row3ImgLg: scaleX >= 1440 && scaleX < 2000 && scaleY >= 1024,
                         row3ImgLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                         row3ImgMd: scaleX < 1440 && scaleX >= 1024,
                         row3ImgPl: scaleX < 1024 && scaleX >= 768,
                         row3ImgPh: scaleX < 768 && scaleX > 425}"
            >
                <div class="row_1"
                    :class="{row_1Ph: scaleX < 768}"
                >
                        <div class="row2NameDiv">
                            <img :src="require('@/assets/Slide8/Tal1.png')" alt="">
                            <div>
                                ОБЩЕЕ ОБРАЗОВАНИЕ
                            </div>
                        </div>
                        <div class="row2Loop2">
                            <div class="row2LoopItem1"
                                v-for="item in Mas1"
                                :key="item.num"
                            >
                                <img :src="require(`@/assets/Slide8/1/1.png`)" alt="">
                                <div class="text">
                                    {{item.name}}
                                </div>
                            </div>
                        </div>
                </div>
                <div class="row_2"
                    :class="{row_1Ph: scaleX < 768}"
                >
                        <div class="row2NameDiv">
                            <img :src="require('@/assets/Slide8/Tal2.png')" alt="">
                            <div>
                                ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ
                            </div>
                        </div>
                        <div class="row2Loop">
                            <div class="row2LoopItem"
                                v-for="item in Mas2"
                                :key="item"
                            >
                                <img :src="require(`@/assets/Slide8/2/${item}.png`)" alt="">
                            </div>
                        </div>
                </div>
                <div class="row_3"
                    :class="{row_1Ph: scaleX < 768}"
                >
                        <div class="row2NameDiv">
                            <img :src="require('@/assets/Slide8/Tal3.png')" alt="">
                            <div>
                                ОЛИМПИАДЫ И КОНКУРСЫ
                            </div>
                        </div>
                        <div class="row2Loop3">
                            <div class="row2LoopItem"
                                v-for="item in Mas3"
                                :key="item"
                            >
                                <img :src="require(`@/assets/Slide8/3/${item}.png`)" alt="">
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
        Mas1: [
            {
                num: 1,
                name: "Университетская школа"
            }, 
            {
                num: 2,
                name: "Университетский комплекс «Гимназия-колледж»"
            }, 
            {
                num: 3,
                name: "Гимназия ДВФУ"
            }
            ],
        Mas2: [1, 2, 3, 4, 5, 6],
        Mas3: [1, 2, 3, 4, 5]
    }),
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
        this.back = document.querySelector('.main8')
        this.set_scale()
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main8 {
        overflow: hidden;
        background-image: url('../assets/Slide8/back.jpg');
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
        padding: 3% 3% 1% 3%;
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
    .row_1, .row_2, .row_3 {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .row_1Ph {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .row_1Ph .row2Loop2 {
        margin-left: 5%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        grid-gap: 5%;
    }
    .row_1Ph .row2Loop2 .row2LoopItem1 {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .row_1Ph .row2Loop2 .row2LoopItem1 div {
        width: 100%;
        text-align: center;
    }
    .row_1Ph .row2Loop {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
    }
    .row_1Ph .row2Loop img {
        width: 60px;
    }
    .row_1Ph .row2Loop3 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
    }
    .row_1Ph .row2Loop3 .row2LoopItem img {
        bottom: 0%;
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
        grid-template-columns: repeat(6, 1fr);
        width: 70%;
        margin-left: 10%;
    }
    .row2Loop div img {
        width: 110%;
    }
    .row2Loop3 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
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
        bottom: 45%;
        overflow: hidden;
    }
    .row2Loop2 {
        margin-left: 5%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 70%;
        grid-gap: 5%;
    }
    .row2LoopItem img {
        width: 100%;
    }
    .row2LoopItem1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        font-family: "Roboto", sans-serif;
        font-size: 15px;
    }
    .row2LoopItem1 img {
        width: 48px;
    }
    .row2LoopItem1 div {
        width: 155px;
        text-align: center;
    }
    .row2LoopItem2 {

    }
</style>