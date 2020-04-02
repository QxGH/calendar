<template>
  <div class="home">
    <div class="calendar-box">
      <Calender :monthData="monthData" :dayData="dayData" @changeMonth="changeMonthHandle"></Calender>
    </div>
  </div>
</template>

<script>
import Calender from '@/components/calendar'
import { dayData, monthData } from '@/mock/'

export default {
  name: 'Home',
  components: {
    Calender
  },
  data() {
    return {
      dayData,
      monthData
    }
  },
  methods: {
    changeMonthHandle(val) {
      /**
       * 切换月份点击事件
       * @val - 月份
       */
      this.monthData.current = val;
    }
  }
}
</script>

<style>
@import url('./style/index.min.css');
</style>
