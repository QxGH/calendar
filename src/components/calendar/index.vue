<template>
  <div class="calendar">
    <CalendarSlider :monthData="monthData" @changeMonth="changeMonthHandle"></CalendarSlider>
    <table class="calendar-table">
      <thead>
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="items in calendarData">
          <tr :key="items.id">
            <template v-for="item in items.item">
              <td :key="item.id">
                <template v-if="item.surplus">
                  <el-popover placement="bottom-start" width="400" trigger="hover">
                    <div class="calendar-popover-box">
                      <div class="popover-header">
                        {{item.date}}，本团期价格详情：
                      </div>
                      <div class="popover-body">
                        <div class="popover-item">
                          <p class="popover-label">成人</p>
                          <span class="popover-price">{{item.priceInfo.adult}}元/人</span>
                        </div>
                        <div class="popover-item">
                          <p class="popover-label">儿童占床</p>
                          <span class="popover-price">{{item.priceInfo.childrenHasBed}}元/人</span>
                        </div>
                        <div class="popover-item">
                          <p class="popover-label">儿童不占床</p>
                          <span class="popover-price">{{item.priceInfo.children}}元/人</span>
                        </div>
                        <div class="popover-item">
                          <p class="popover-label">单间</p>
                          <span class="popover-price">{{item.priceInfo.single}}元/人</span>
                        </div>
                      </div>
                    </div>
                    <div class="calendar-item" :class="{'border': item.surplus}" slot="reference">
                      <p class="date">{{item.label}}</p>
                      <p class="price" v-if="item.price">{{item.price}}</p>
                      <p class="surplus" v-if="item.surplus">余位充足</p>
                    </div>
                  </el-popover>
                </template>
                <template v-else>
                  <div class="calendar-item" :class="{'border': item.surplus}">
                    <p class="date">{{item.label}}</p>
                  </div>
                </template>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import CalendarSlider from "@/components/slider";
import uuidV4 from "uuid/v4";

export default {
  name: "Calendar",
  data() {
    return {
      calendarData: []
    };
  },
  props: ["monthData", "dayData"],
  components: {
    CalendarSlider
  },
  created() {
    this.createdCalendar();
  },
  methods: {
    createdCalendar(newYear, newMonth) {
      let myDate = new Date();
      let nowYear = myDate.getFullYear(); // 当前年
      let nowMonth = myDate.getMonth() + 1; // 当前月
      let nowDate = myDate.getDate(); // 当前日

      let year = newYear ? newYear : nowYear;
      let month = newMonth ? newMonth : nowMonth;
      let date = newMonth ? 1 : nowDate;

      let firstDayOfMonth = this.getWeek(year, month, 1); // 当前月第一天 周几
      let monthLength = this.getMonthLength(nowYear, nowMonth); // 当月有多少天

      let forLength = monthLength + firstDayOfMonth;

      let list = [
        {
          id: uuidV4(),
          item: []
        }
      ];
      for (let i = 0; i < forLength - 1; i++) {
        let obj = {};
        if (i < firstDayOfMonth) {
          obj = {
            id: uuidV4(),
            date: null
          };
          list[0].item.push(obj);
        } else {
          let day = i - firstDayOfMonth + 1;
          let date = `${year}-${month}-${day}`;
          obj = {
            id: uuidV4(),
            date,
            label: day
          };
          for (let item of this.dayData) {
            if (date == item.date) {
              obj = item;
              obj.label = day;
              break;
            }
          }
          let rowNum = Math.ceil((i + 1) / 7) - 1;
          // 下一行 定义新数组
          if (!list[rowNum]) {
            list[rowNum] = {
              id: uuidV4(),
              item: []
            };
          }
          list[rowNum].item.push(obj);
        }
      }
      this.calendarData = list;
    },
    getMonthLength(year, month) {
      /**
       * 当月有多少天
       */
      let date = new Date(year, month, 0);
      return date.getDate();
    },
    getWeek(year, month, date = 1) {
      /**
       * 判断日期周几
       */
      let myDate = new Date();
      myDate.setYear(year);
      myDate.setMonth(month - 1);
      myDate.setDate(date);
      return myDate.getDay();
    },
    changeMonthHandle(val) {
      let year = new Date().getFullYear();
      this.createdCalendar(year, val);
      this.$emit('changeMonth', val)
    }
  }
};
</script>

<style>
@import url("./style/index.min.css");
</style>