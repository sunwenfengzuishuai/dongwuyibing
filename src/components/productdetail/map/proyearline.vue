<style>
    
</style>

<template>
    <div class="pro-year-cont">
        <div id="proyeaelin"></div>
    </div> 
</template>

<style scoped>
    .pro-year-cont{
        width: 100%;
        height: 100%;
        position: relative;
    }
	#proyeaelin{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';
    import request from '../../../request/prodetail.js'
    import requestSelect from "../../../request/select.js"


	export default {
		props: {
            animalYearCount: {
                type: Array,
                default: null
            },
            choiceitem: {
                type: Object,
                default: null
            },
        },
        watch: {
            animalYearCount: function(newValue, oldValue){
                this.FormatLineData(newValue);
            },
        },
		data() {
			return {

                // 折线图数据
                production: [],
                proyears: [],
                provalues: [],
                mapseries: [],

			}
		},
		mounted() {

		},
		methods: {
            // 折线图数据标准格式化
            FormatLineData(dataCount){
                this.production = [];
                this.proyears = [];
                this.provalues = [];
                // 设置production
                this.production.push(this.choiceitem.namecn);
                //设置proyears和provalues
                for (var i = 0; i < dataCount.length; i++) {
                    this.proyears.push(dataCount[i].year)
                    this.provalues.push(dataCount[i].sum)
                }
                this.setSeries(); 
                this.drawLine();      
            },

            // 设置series数据
            setSeries(){
                this.mapseries = [];
                var obj = {};
                Object.assign(obj,{
                    name: this.production[0],
                    type: 'line',
                    symbol: 'none',
                    smooth: 0.3,
                    color: ['#FFFF00'],
                    data: this.provalues,
                    areaStyle: {normal: {
                        color: new echarts.graphic.LinearGradient(                  //设置渐变色
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#ffff00'},
                                {offset: 1, color: 'rgba(13,19,56,0.0)'}
                            ]
                        )
                    }},
                });
                this.mapseries.push(obj);
            },

           

			async drawLine(allcoordinates) {
				var chart = echarts.init(document.getElementById("proyeaelin"));
				
				var option = {
                        // backgroundColor: '#eee',
                        grid: {  
                            left: '2%',  
                            right: '6%',  
                            bottom: '5%',  
                            top: '52px',
                            containLabel: true
                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        // legend: {
                        //     x: 'right',
                        //     y: 'top',
                        //     padding: [12,10,0,0],
                        //     data:this.production,
                        //     textStyle :{
                        //         color: '#eee'
                        //     }
                        // },

                        calculable : true,


                        xAxis : [
                            {
                                axisLabel: {
                                    show:false,
                                },
                                axisLine:{
                                  lineStyle :{
                                      color: '#eee'
                                  }
                                },
                                type : 'category',
                                axisTick: { show: false },      //x轴刻度，不显示
                                boundaryGap : false,
                                data : this.proyears,
                            }
                        ],
                        yAxis : [
                            {

                                type : 'value',
                                axisLine:{
                                    lineStyle :{
                                        color: '#eee'
                                    }
                                }
                            }
                        ],
                        series : this.mapseries,
                    };

				// 使用刚指定的配置项和数据显示图表。
				chart.setOption(option);
				// 屏幕自适应
                setTimeout(function (){
                    window.addEventListener('resize',function () {
                        chart.resize();
                    })
                },200)
			},

		}
	}
</script>


