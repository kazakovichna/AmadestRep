<template>
    <div class="main4">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            10+ ДВУДИПЛОМНЫХ ПРОГРАММ
            С ВУЗАМИ-ПАРТНЕРАМИ
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
            v-if="scaleX > 768"
        >
            <!-- FirstLoopImg -->
            <div class="row3IconLoop"
                :class="{row3IconLoopLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024}"
            >
                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/1.png`)">
                </div>

                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/2.png`)">
                </div>

                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/3.png`)">
                </div>

                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/4.png`)">
                </div>
            <!-- </div>
            
            <div class="row3IconLoopText"
                :class="{row3IconLoopPh: scaleX < 768}"
            > -->
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemText">
                        Politics <br> and Economics <br> in Eurasia <br> (магистратура)
                    </div>
                </div>
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemText">
                        Экономика <br> (бакалавриат)
                    </div>
                </div>
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemText">
                        Мировая экономика / <br> Finance <br> (бакалавриат) 
                        <br> <br>  Мировая экономика / <br> Management Studies <br> (бакалавриат)
                    </div>
                </div>
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemText">
                        Мировая экономика <br> (бакалавриат)
                    </div>
                </div>
            </div>
        </div>
        <!-- Phone Versio Loop 1 -->
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
            v-if="scaleX <= 768"
        >
            <div class="row3LoopPh">

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/1.png`)">
                </div>

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/2.png`)">
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Politics <br> and Economics <br> in Eurasia <br> (магистратура)
                    </div>
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Экономика <br> (бакалавриат)
                    </div>
                </div>

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/3.png`)">
                </div>

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/4.png`)">
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Мировая экономика / <br> Finance <br> (бакалавриат) 
                    </div>
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Мировая экономика <br> (бакалавриат)
                    </div>
                </div>
            </div>
        </div>
        <!-- Second Row Begin -->
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1LgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            30+ СОВМЕСТНЫХ ПРОГРАММ
            С ИНДУСТРИАЛЬНЫМИ ПАРТНЕРАМИ
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
            v-if="scaleX > 768"
        >
            <!-- SecondLoopImg -->
            <div class="row3IconLoop"
                :class="{row3IconLoopLgSm: scaleX >= 1440 && scaleX < 2000 && scaleY < 1024}"
            >
                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/5.png`)">
                </div>
                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/6.png`)">
                </div>
                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/7.png`)">
                </div>
                <div class="row3IconItem">
                    <img :src="require(`@/assets/Slide4/2-2/8.png`)">
                </div>
            <!-- </div>
           
            <div class="row3IconLoopText"
                :class="{row3IconLoopPh: scaleX < 768}"
            > -->
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX > 768 }"
                >
                    <div class="itemText">
                        Процессы и аппараты <br> химической технологии <br> (магистратура)
                        <br> <br> Кораблестроение <br> (бакалавриат)
                    </div>
                </div>
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX > 768 }"
                >
                    <div class="itemText">
                        Правовое регулирование <br> и управление <br>
                        контрактной <br> деятельностью <br> (магистратура)
                    </div>
                </div>
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX > 768 }"
                >
                    <div class="itemText">
                       Искусственный <br> интеллект <br> и большие данные <br> (магистратура)
                       <br> <br> Финансовые стратегии <br> и технологии <br> банковского института <br> (магистратура)
                    </div>
                </div>
                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX > 768 }"
                >
                    <div class="itemText">
                        Химическая инженерия <br> (Chemical Engineering) <br> (магистратура)
                    </div>
                </div>
            </div>
        </div>
        <!-- Phone Loop 2 -->
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
            v-if="scaleX <= 768"
        >
            <div class="row3LoopPh">

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/5.png`)">
                </div>

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/6.png`)">
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Процессы и аппараты <br> химической технологии <br> (магистратура)
                        <br> <br> Кораблестроение <br> (бакалавриат)
                    </div>
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Правовое регулирование <br> и управление <br> 
                        контрактной <br> деятельностью <br> (магистратура)
                    </div>
                </div>

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/7.png`)">
                </div>

                <div class="row3IconItemPh">
                    <img :src="require(`@/assets/Slide4/2-2/8.png`)">
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Искусственный <br> интеллект <br> и большие данные <br> (магистратура)
                       <br> <br> Финансовые стратегии <br> и технологии <br> банковского института <br> (магистратура)
                    </div>
                </div>

                <div class="row3IconText"
                    :class="{row3IconTextPl: scaleX < 970 && scaleX >= 768 }"
                >
                    <div class="itemTextPh">
                        Химическая инженерия <br> (Chemical Engineering) <br> (магистратура)
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
        this.back = document.querySelector('.main4')
        this.set_scale()

        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main4 {
        overflow: hidden;
        background-image: url('../assets/Slide4/back.png');
        background-position: center center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .row1 {
        width: 60%;
        padding: 1% 3% 1% 3%;
        background-color: #122352;
        font-family: 'Roboto', sans-serif;
        color: white;
    }
    .row1Lg {
        font-size: 40px;
    }
    .row1LgSm {
        font-size: 30px;
    }
    .row1Md {
        font-size: 20px;
    }
    .row1Pl {
        font-size: 20px;
        width: 80%;
    }
    .row1Ph {
        width: 85%;
        font-size: 18px;
    }    
    .row3 {
        width: 60%;
        background-color: rgba(255, 255, 255, 0.75);
        padding: 0 3% 4% 3%;
    }
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
    }
    .row3IconLoop {
        font-size: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        /* grid-gap: 10%; */
    }
    .row3IconLoopLgSm .row3IconItem {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .row3IconLoopLgSm .row3IconItem img {
        width: 130px;
    }
    .row3IconLoopLgSm .row3IconText {
        font-size: 12px;
    }
    .row3IconLoopPh {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15%;
        margin-bottom: 3%;
    }
    .row3IconLoopText {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10%;
        align-items: flex-start;
    }
    .row3IconItem {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .row3IconText {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .row3IconTextPl {
        font-size: 13px;
    }
    .row3IconItem img {
        width: 100%;
    }
    .row3IconItemPh {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .row3IconItemPh img {
        width: 60%;
    }
    .itemText {
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    .itemTextPh {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
    }
    .row3LoopPh {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 15%;
        grid-gap: 5%;
        height: 100%;
    }
</style>