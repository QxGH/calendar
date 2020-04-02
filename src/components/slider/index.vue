<template>
  <div class="calendar-slider">
    <button class="prev-btn handle-btn" @click="prevHandle" :disabled="prevBtnDisabled">
      <i class="el-icon-arrow-left icon"></i>
    </button>
    <div class="slider-box">
      <slider ref="slider" :options="sliderOptions" @slide="slideHandle" >
        <slideritem v-for="item in monthData.list" :key="item.id" :class="{'is-selected': monthData.current == item.id}">
          <div class="slider-item-box" @click.stop="tapHandle(item)">
            <p class="month-label">{{item.label}}</p>
            <p class="month-info">{{item.info}}</p>
          </div>
        </slideritem>
        <div slot="loading">loading...</div>
      </slider>
    </div>
    <button class="next-btn handle-btn" @click="nextHandle" :disabled="nextBtnDisabled">
      <i class="el-icon-arrow-right icon"></i>
    </button>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider"; // https://warpcgd.github.io/vue-concise-slider/zh/

export default {
  name: "CalendarSlider",
  props: ['monthData'],
  data() {
    return {
      prevBtnDisabled: true,
      nextBtnDisabled: false,
      sliderOptions: {  
        pagination: false,
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 500,
        infinite: 4,
        slidesToScroll: 4,
        loop: false,
        itemAnimation: true,
        freeze: true
      }
    };
  },
  methods: {
    prevHandle() {
      this.$refs.slider.$emit("slidePre");
    },
    nextHandle() {
      this.$refs.slider.$emit("slideNext");
    },
    slideHandle(val) {
      /**
       *  slider 监听函数
       */
      // 设置 next prev 的 disabled
      if(val.currentPage === 0) {
        this.prevBtnDisabled = true;
        if(this.monthData.list.length <= 4) {
          this.nextBtnDisabled = true;
        } else {
          this.nextBtnDisabled = false;
        };
      } else {
        this.prevBtnDisabled = false;
      };
      if(val.currentPage+4 >= this.monthData.list.length) {
        this.nextBtnDisabled = true;
      } else {
        this.nextBtnDisabled = false;
      }
    },
    tapHandle(val) {
      this.$emit('changeMonth', val.id)
    }
  },
  components: {
    slider,
    slideritem
  }
};
</script>

<style>
@import url("./style/index.min.css");
</style>