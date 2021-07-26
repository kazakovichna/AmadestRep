<template>
    <div class="main6">
        <div class="row1"
            :class="{row1Lg: scaleX >= 1440,
                     row1Md: scaleX >= 1024 && scaleX < 1440,
                     row1Pl: scaleX >= 768 && scaleX < 1024,
                     row1Ph: scaleX < 768}"
        >
            СТИПЕНДИАЛЬНЫЕ И ГРАНТОВЫЕ ПРОГРАММЫ
        </div>
        <div class="row3"
            :class="{row3Pl: scaleX >= 768 && scaleX < 1024,
                     row3Ph: scaleX < 768}"
        >
            <div class="row3Img"
                :class="{row3ImgMd: scaleX < 1380 && scaleX >= 1024,
                         row3ImgPl: scaleX < 1024 && scaleX >= 768,
                         row3ImgPh: scaleX < 768 && scaleX > 425}"
            >
                <img :src="require('../assets/Slide6/Group7.svg')" v-if="scaleX > 425">
                <img :src="require('../assets/Slide6/Group20.svg')" v-else>
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
                name: 'Политехнический институт',
                photo: 'pi'
            },
            {
                name: 'Восточный институт',
                photo: 'srmi'
            },
            {
                name: 'Школа экономики и менеджмента',
                photo: 'sem'
            },
            {
                name: 'Школа искусстви гуманитарных наук',
                photo: 'sign'
            },
            {
                name: 'Институт наукоемких технологий и передовых материалов',
                photo: 'sen'
            },
            {
                name: 'Институт мирового океана',
                photo: 'ocean'
            },
            {
                name: 'Юридическая школа',
                photo: 'yur'
            },
            {
                name: 'Институт наук о жизни и биомедицины',
                photo: 'bio'
            },
            {
                name: 'Школа педагогики',
                photo: 'sp'
            },
            {
                name: 'Институт математикии компьютерных технологий',
                photo: 'sce'
            },
            {
                name: 'Школа медицины',
                photo: 'med'
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
        this.back = document.querySelector('.main6')
        this.set_scale()

        window.addEventListener('resize', this.set_scale)
    }
}
</script>

<style scoped>
    .main6 {
        overflow: hidden;
        background-image: url('../assets/Slide6/back.png');
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
    .row3ImgMd img {
        width: 75%;
    }
    .row3ImgPl img {
        width: 75%;
    }
    .row3ImgPh img {
        width: 110%;
    }
</style>