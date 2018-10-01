
<style scoped>
	#piemapcont{
		width: 100%;
		height: 200px;
		margin-top: -10px;
	}
		
</style>
<template>
	<div id="piemapcont"></div>
</template>

<script>
	import echarts from 'echarts';

	export default {
		props: {
			areaCount1: {
				type: Number,
				default: 0
			},
			areaCount2: {
				type: Number,
				default: 0
			},
		},
		watch: {
			areaCount1: function(newValue, oldValue){
				this.setPieData();
				this.drawLine();		
			},
			areaCount2: function(newValue, oldValue){
				this.setPieData();
				this.drawLine();		
			}
		},
		data() {
			return {
				mapdata: [{name:'区域二',value:0},{name:'区域一',value:0}],
	            colors: ['#00b8ff','#ff6600'], //'#ff6600',
			}
		},
		mounted() { 
			this.drawLine()
		},
		methods: {
			// 设置饼状图参数（赋值）
			setPieData(){
				this.mapdata = [{name:'区域二',value:this.areaCount2},{name:'区域一',value:this.areaCount1}];
			},
			async drawLine() {
				var chart = echarts.init(document.getElementById("piemapcont"));
				
				var option = {
				    // legend: {
				    //     orient: 'vertical',
				    //     x: 'left',
				    //     data:this.outbreakdata,
				    // },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{b} : {c} ({d}%)",
						position: ['36%', '40%'],
				    },
				    series: [
				        {
				            type:'pie',
				            radius: ['58%', '75%'],
				            color: this.colors,
				            hoverAnimation: false,
				            data: this.mapdata,
				            itemStyle:{ 
					            normal:{ 
					                label:{ 
						                show: false,
					                    position: "inner",
					                    textStyle: {                // 标签文本样式
				                            fontSize: 12,
				                            fontWeight: "normal",     // 标签字体加粗,'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
				                            color: '#aaa',
				                        },
								      	formatter: '{b} : {c}' 
					                }, 
					                labelLine:{show:false} 
					            } 
					        } 
				        }
				    ]
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