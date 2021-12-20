<template>
  <div class="home">
    <div class="calendar-box">
      <Calender :monthData="monthData" :dayData="dayData" @changeMonth="changeMonthHandle"></Calender>
    </div>
    <div class="calendar-box">
      <Calender2/>
    </div>
  </div>
</template>

<script>
import Calender from '@/components/calendar'
import Calender2 from '@/components/calendar_2'
import { dayData, monthData } from '@/mock/'

export default {
  name: 'Home',
  components: {
    Calender,
    Calender2
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

<style lang="scss">
@import './index.scss';
</style>
