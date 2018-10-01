<template>
  <div id="traderightmap3L"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    props:{
      animalIECount:{
        type:Array,
        default:null
      }
    },
    name: 'traderightmap3L',
    data(){
      return {
        dataName:[],//lenged
        data:[] , //
        setPieData:[] , //[{value:335, name:'直接访问'},{value:335, name:'直接访问'}]
        colors: ['#AE43DC','#ff0000','#ff6600','#E8BB18','#4bC65e','#0f2aff'],
      }
    },
    watch:{
      animalIECount:{
        handler(newval,oldval){
          this.formatData()
          this.initMap()
        },
        deep:true
      }
    },
    mounted(){

    },
    methods:{
      formatData(){
       this.dataName = this.animalIECount.map(item => item.itemcn)
       this.data = this.animalIECount.map(item => item.sum)
        this.setPieData = []
        //饼状图数据格式化
          //this.centerPieData = [{name:'当前科',value:this.reportProCount.afcount}, {name:'总报道数',value:this.reportProCount.sumcount}];
          for (var i = 0; i < this.dataName.length; i++) {
            var obj = {};
            Object.assign(obj,{
              value: this.data[i],
              name: this.dataName[i],
            });
            this.setPieData.push(obj);
          }
      },
      initMap(){
        let chart = echarts.init(document.getElementById("traderightmap3L"));

        let option = {
          grid: {
            left: '2%',
            right: '6%',
            bottom: '35%',
            top: '25%',
            containLabel: true
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            y:25,
            textStyle:{
              color:'#fff'
            },
            data:this.dataName
          },
          series: [
            {
              name:'进出口值',
              type:'pie',
              radius: ['50%', '70%'],
              color: this.colors,
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              // labelLine: {
              //   normal: {
              //     show: false
              //   }
              // },
              data:this.setPieData
            }
          ]
        };

        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #traderightmap3L{
    width:100%;
    height: 100%;
  }
</style>
