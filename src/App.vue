<template>
  <div id="app">
    <div class="pageSwiperNavigateDiv">
        <div class="navigateDivBig"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[0])}"
            @click="GoTo(1)"
        ></div>
        <div class="navigateDivBig"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[1])}"
            @click="GoTo(2)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[2])}"
            @click="GoTo(3)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[3])}"
            @click="GoTo(4)"
        ></div>

        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[4])}"
            @click="GoTo(5)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[5])}"
            @click="GoTo(6)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[6])}"
            @click="GoTo(7)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[7])}"
            @click="GoTo(8)"
        ></div>

        <div class="navigateDivBig"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[8])}"
            @click="GoTo(9)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[9])}"
            @click="GoTo(10)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[10])}"
            @click="GoTo(11)"
        ></div>
        <div class="navigateDiv"
            :class="{choosenDiv: (hashPath.slice(1) === options.anchors[11])}"
            @click="GoTo(12)"
        ></div>
    </div>
    <full-page :options="options" id="fullpage" ref="fullpage">
        <div class="section">
            <slide1 @GoTo="GoTo" :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide2 :scaleX="screenX" :scaleY="screenY"/> 
        </div>
        <div class="section">
            <slide3 :scaleX="screenX" :scaleY="screenY"/> 
        </div>
        <div class="section">
            <slide4 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide5 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide6 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide7 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide8 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide9 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide10 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide11 :scaleX="screenX" :scaleY="screenY"/>
        </div>
        <div class="section">
            <slide12 :scaleX="screenX" :scaleY="screenY"/>
        </div>
    </full-page>
</div>

</template>

<script>
import slide1 from '@/components/Slide_1.vue'
import slide2 from '@/components/Slide_2.vue'
import slide3 from '@/components/Slide_3.vue'
import slide4 from '@/components/Slide_4.vue'
import slide5 from '@/components/Slide_5.vue'
import slide6 from '@/components/Slide_6.vue'
import slide7 from '@/components/Slide_7.vue'
import slide8 from '@/components/Slide_8.vue'
import slide9 from '@/components/Slide_9.vue'
import slide10 from '@/components/Slide_10.vue'
import slide11 from '@/components/Slide_11.vue'
import slide12 from '@/components/Slide_12.vue'

export default {
  components: {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12
  },
  data: () => ({
    options: {
            navigation: true,
            anchors: [
              'page1', 
              'page2', 
              'page3', 
              'page4', 
              'page5', 
              'page6', 
              'page7', 
              'page8', 
              'page9',
              'page10',
              'page11',
              'page12'
              ]
    },
    screenX: window.screen.availWidth,
    screenY: window.innerHeight
  }),
  computed: {
      hashPath: function () {
          return this.$route.hash
      }
  },
  methods: {
      set_scale() {
        this.screenX = window.innerWidth
        this.screenY = window.innerHeight
        
      },
      GoTo (numPage) {
          this.$refs.fullpage.api.moveTo(numPage)
      }
  },
  created() {
       window.addEventListener('resize', this.set_scale)
  },
  mounted() {
    this.back = document.querySelector('.pageSwiperNavigateDiv')
    this.back.style.height = `${this.screenY}px`
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  },
}
</script>

<style>
    .pageSwiperNavigateDiv {
        width: 4%;
        margin-right: 2%;
        position: fixed;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2%;
    }
    .pageSwiperNavigateDiv div {
        background-color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
    .navigateDivBig {
        width: 10px;
        height: 10px;
        border-radius: 360px;
        box-shadow: 0px 0px 20px 10px rgba(34, 60, 80, 0.5);
    }
    .navigateDivBig:hover {
        opacity: 100%;
        transition: 100ms;
        background-color: white;
    }
    .navigateDiv {
        width: 5px;
        height: 5px;
        border-radius: 360px;
        box-shadow: 0px 0px 33px 5px rgba(34, 60, 80, 0.2);
    }
    .navigateDiv:hover {
        width: 7px;
        height: 7px;
        opacity: 100%;
        transition: 300ms;
        background-color: white;
    }
    .choosenDiv {
        background-color: rgba(255, 255, 255, 1) !important;
        opacity: 100%;
    }
</style>
