<template>
  <div id="tradeleftmap1"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    props:{
      countryCountToMapL1:{
        type:Array,
        default:null
      }
    },
    name: 'tradeleftmap1',
    data(){
      return{
        year:[],
        count:[]
      }
    },
    watch:{
      countryCountToMapL1:{
        handler(newval,oldval){
          this.year = newval.map(item=>item.year)
          this.count = newval.map(item =>item.count)
          this.initmap()
        },
        deep:true
      }
    },
    methods:{
      initmap(){
        let chart = echarts.init(document.getElementById("tradeleftmap1"));
        let option = {
          tooltip : {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.year,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          },
          series: [{
            data: this.count,
            type: 'line',
            color:'yellow',
            areaStyle: {}
          }]
        };

        chart.clear();
        // 使用刚指定的配置项和数据显示图表。
        chart.setOption(option);
        // 屏幕自适应
        setTimeout(function (){
          window.addEventListener('resize',function () {
            chart.resize();
          })
        },200)
      }
    },
    mounted(){
      this.initmap()
    }
  }
</script>

<style scoped>
  #tradeleftmap1{
    width: 100%;
    height: 100%;
  }
</style>
