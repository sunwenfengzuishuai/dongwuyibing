<template>
  <div id="tradeleftmap2"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    props:{
      countryCountToMapL2:{
        type:Array,
        default:function () {
          return []
        }
      }
    },
    name: 'tradeleftmap2',
    data(){
      return{
        year:[],//年份[2013,2014...]
        count:[]
      }
    },
    watch:{
      countryCountToMapL2:{
        handler(newval,oldval){
          this.year = newval.map(item=>item.year)
          this.count = newval.map(item =>item.sum)
          this.initmap()
        },
        deep:true
      }
    },
    methods:{
      initmap(){
        let chart = echarts.init(document.getElementById("tradeleftmap2"));
        let option = {
          grid:{
            x:75,
            y:45,
            x2:55,
            y2:50,

          },
          tooltip : {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: this.year,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },

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
            color:'yellowgreen'
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
  #tradeleftmap2{
    width: 100%;
    height: 100%;
  }
</style>
