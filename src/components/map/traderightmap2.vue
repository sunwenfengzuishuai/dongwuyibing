
<template>
  <div id="traderightmap2"></div>
</template>

<style scoped>
  #traderightmap2{
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import echarts from 'echarts';
  import tool from '../../assets/js/tool'

  export default {
    props: {
      animalYearCount: {
        type: Array,
        default: null
      },
    },
    watch: {
      animalYearCount: function(newValue, oldValue){
        this.FormatLineData();
        this.drawLine()
      },
    },
    data() {
      return {
        animal: [],
        proyears: [],
        animalValues: [],
        mapseries: [],
        mapcolor: ['#3366cc', '#3f9337', '#ffff00', '#f6941d', '#eb4310', '#ff0000'],

      }
    },
    mounted() {
      // this.drawLine()

    },
    methods: {

      // 折线图数据标准格式化
      FormatLineData(){
        // console.log(this.animalYearCount);
        this.getAinamlAndYears();       // 获取该科动物列表与生产时间列表
        this.getAnimalValues();         // 获取该科单一动物的生产值--values
        this.setSeries();               // 设置series数据
      },

      // 获取该科动物列表与生产时间列表
      getAinamlAndYears(){
        this.animal = [];
        this.proyears = [];
        for (var i = 0; i < this.animalYearCount.length; i++) {
          var animal = this.animalYearCount[i].itemcn;
          var proyear = this.animalYearCount[i].year;
          this.animal.push(animal);
          this.proyears.push(proyear);
        }
        this.animal = tool.getSpliceArray(this.animal);
        this.proyears = tool.getSpliceArray(this.proyears);
      },
      // 获取该科单一动物的生产值--values
      getAnimalValues(){
        this.animalValues = [];
        for (var i = 0; i < this.animal.length; i++) {
          var arr = [];
          for (var j = 0; j < this.animalYearCount.length; j++) {
            if (this.animalYearCount[j].itemcn == this.animal[i]) {
              arr.push(this.animalYearCount[j].sum)
            }
          }
          this.animalValues.push(arr);
        }
      },
      // 设置series数据
      setSeries(){
        this.mapseries = [];
        for (var i = 0; i < this.animal.length; i++) {
          var obj = {};
          Object.assign(obj,{
            name: this.animal[i],
            type: 'line',
            symbol: 'none',
            smooth: 0.3,
            color: this.mapcolor[i],
            data: this.animalValues[i],
          });
          this.mapseries.push(obj);
        }
      },

      async drawLine() {

        var chart = echarts.init(document.getElementById("traderightmap2"));

        var option = {
          // backgroundColor: '#eee',
          grid: {
            left: '2%',
            right: '6%',
            bottom: '15%',
            top: '15%',
            containLabel: true
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            x: 'left',
            y: 'top',
            padding: [8,0,0,20],
            data:this.animal,
            textStyle: {
              color: '#eee',
            }
          },

          calculable : true,

          xAxis: [{
            // show:false,
            axisLabel: {
              show:false,
            },
            axisLine: {
              lineStyle: {
                color: '#eee'
              }
            },
            axisTick: { show: false },
            type: 'category',
            boundaryGap: false,
            data: this.proyears,
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#CECECE'
              }
            },
            splitLine:{
              show:false,  //不显示分割线
            },
          }],
          series : this.mapseries
        };
        //清空画布
        chart.clear();
        // 使用刚指定的配置项和数据显示图表。
        chart.setOption(option);
        // 屏幕自适应
        setTimeout(function (){
          window.onresize = function () {
            chart.resize();
          }
        },200)

      },

    }
  }
</script>


