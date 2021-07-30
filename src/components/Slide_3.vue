<template>
    <div class="main3">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            ИНВЕСТИЦИИ В ОБРАЗОВАНИЕ
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Head"
                :class="{row3Head2K: scaleX >= 1440,
                         row3HeadLg: scaleX >= 1024 && scaleX < 1440,
                         row3HeadPl: scaleX >= 768 && scaleX < 1024,
                         row3HeadPh: scaleX < 768}"
            >
                ПАРТНЕРСКИЕ ОБРАЗОВАТЕЛЬНЫЕ МОДУЛИ
            </div>
            <div class="imgDiv"
                :class="{imgDiv2K: scaleX >= 2000,
                         imgDivFullLg: scaleX >= 1440 && scaleX < 2000,
                         imgDivLg: scaleX >= 1370 && scaleX < 1440,
                         imgDivMd: scaleX > 768 && scaleX < 1370 && scaleY < 640,
                         imgDivPl: scaleX > 425 && scaleX <= 768,
                         imgDivPh: scaleX <= 425}"
            >
                <img v-if="scaleX > 425" :src="require('@/assets/Slide3/Group11.svg')" alt="">
                <img v-else :src="require('@/assets/Slide3/Group19.svg')" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default{
 data: () => ({
        back: null
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
        this.back = document.querySelector('.main3')
        this.set_scale()
        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main3 {
        overflow: hidden;
        background-image: url('../assets/Slide3/background.jpg');
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
        margin-bottom: 2%;
    }
    .row3Head2K {
        font-size: 24px;
    }
    .row3HeadLg {
        font-size: 20px;
    }
    .row3HeadPl {
        font-size: 15px;
    }
    .row3HeadPh {
        font-size: 12px;
    }
    .imgDiv2K {
        margin: 0;
    }
    .imgDiv2K img {
        width: 100%;
    }
    .imgDivFullLg {
        margin: 6% 0 5% 0;
    }
    .imgDivFullLg img {
        width: 100%;
    }
    .imgDivMd img {
        width: 70%;
    }
    .imgDivPl img {
        width: 80%;
    }
</style>