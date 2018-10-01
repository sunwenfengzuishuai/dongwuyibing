<template>
  <div class="showlist">
    <div v-if="currentCountryMsg.year!=undefined">
      <div class="tradeYear">年份：<span>{{currentCountryMsg.year}}</span></div>
      <div class="tradeType">贸易类型：<span>{{currentCountryMsg.element.indexOf('Export')!=-1?'出口':'进口'}}</span></div>
      <div class="animalType">商品：<span>{{currentCountryMsg.item}}</span></div>
      <div class="tradeSum">贸易量：<span style="color: yellowgreen">{{currentCountryMsg.value}}</span></div>
    </div>
    <div class="nodata" v-else >
      暂无数据
    </div>

  </div>
</template>

<script>
  export default {
    name: 'showCountryList',
    props:{
      currentCountryMsg:{
        type:Object,
        default:function () {
          return {  }
        }
      }
    }
  }
</script>

<style scoped>
  .showlist{
    padding: 15px 15px 0px 15px;
    color:white;
  }
  .showlist>div>div{
    border-bottom: 1px solid yellowgreen;
  }
  .nodata{
    font-size: 36px;
    color:yellowgreen;
  }
</style>
