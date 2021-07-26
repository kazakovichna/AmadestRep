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
            <div class="row3IconLoop"
                :class="{row3IconLoopLg: scaleX < 1380 && scaleX > 1024,
                         row3IconLoopMd: scaleX >= 768 && scaleX < 1024,
                         row3IconLoopPl: scaleX > 425 && scaleX < 768}"
            >
                <img v-if="scaleX > 425" :src="require('@/assets/Slide8/Group21.svg')">
                <img v-if="scaleX <= 425" :src="require('@/assets/Slide8/Group22.svg')">
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
        padding: 3%;
    }
    .row3Pl {
        width: 80%;
    }
    .row3Ph {
        width: 85%;
    }
    .row3IconLoopLg img {
        width: 80%;
    }
    .row3IconLoopMd img {
        width: 90%;
    }
    .row3IconLoopPl img {
        width: 90%;
    }
    .itemText {
        margin-top: 5%;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
</style>