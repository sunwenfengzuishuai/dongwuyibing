<template>
	<div id="countryyear"></div>
</template>

<style scoped>
	html, body, div{
		margin: 0;
		padding: 0;
		height: 100%;
	}
	#illpiemap{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';
	import request from '../../request/illdetails.js'

	export default {
		props: {
			diseasData: {
				type: Array,
				default: null
			},
			diseasevalue: {
				type: Number,
				default: 0
			},
      diseasename:{
			  type: String
      }
		},
		watch: {
			diseasevalue: function(newValue, oldValue){
				this.getNameById(newValue);
				this.years = [],
				this.counts = [],
				this.queryCuntryCountYear();
			}
		},
		data() {
			return {
				cuntrycountdata: [],
				years: [],
				counts: [],
				diseaseName: '非洲猪瘟',
				oiediseaseid: this.$route.query.diseaseType,

			}
		},
		mounted() {
      this.diseaseName = this.diseasename
			this.getNameById(this.diseasevalue);
			this.queryCuntryCountYear();
		},
		methods: {
			async queryCuntryCountYear(){
				if (this.oiediseaseid != null) {
    				var data = await request.queryCuntryCountYear(this.oiediseaseid, -1);
    				this.oiediseaseid = null;
				}else {
    				var data = await request.queryCuntryCountYear(-1, this.diseasevalue);
				}
    			this.cuntrycountdata = data;
    			this.getLineData();
    			this.drawLine();
			},
			// 提取绘图所需信息
			getLineData(){
				for (var i = 0; i < this.cuntrycountdata.length; i++) {
					var year = parseInt(this.cuntrycountdata[i].date);
					this.years.push(year);
					this.counts.push(this.cuntrycountdata[i].count);
				}
			},
			// 根据id匹配疫病名称
			getNameById(id){
				for (var i = 0; i < this.diseasData.length; i++) {
					if (this.diseasData[i].value == id) {
						this.diseaseName = this.diseasData[i].label;
					}
				}
			},
			// 绘制快报-年折线图
			async drawLine() {

				var chart = echarts.init(document.getElementById("countryyear"));

				var option = {
			        // 定义样式和数据
			        // backgroundColor: '#FBFBFB',
			        tooltip: {
			            trigger: 'axis',
			            align:'left',
			        },
			        legend: {
			            data: [this.diseaseName],
			            x: 'left',
			            y: 'top',
			            padding: [15,0,0,20],
			            textStyle: {
			                color: '#eee',
			            }
			        },

			        calculable: true,


			        xAxis: [{
			            axisLabel: {
			                rotate: 30,
			                interval: 0
			            },
			            axisLine: {
			                lineStyle: {
			                    color: '#eee'
			                }
			            },
			            type: 'category',
			            boundaryGap: false,
			            data: this.years,
			        }],
			        yAxis: [{
			      //   	name:'报道数',//是基于Y轴线对齐，用空格站位让坐标轴名称与刻度名称对齐
					    // nameTextStyle: {
					    //     color:'#fff',
					    //     align:'left',//文字水平对齐方式
					    //     verticalAlign:'middle',//文字垂直对齐方式
					    // },
			            type: 'value',
			            axisLine: {
			                lineStyle: {
			                    color: '#CECECE'
			                }
			            }
			        }],
			        series: [{
			            name: this.diseaseName,
			            type: 'line',
			            symbol: 'none',
			            smooth: 0.3,
			            color: ['#66AEDE'],
			            data: this.counts,
			        }]
			    };

				//清空画布
                chart.clear();
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
