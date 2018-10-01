
<style scoped>
	.piemap-cont{
		width: 100%;
		height: 100%;
		display: flex;
	}
		#animaldispiemap{
			width: 60%;
			height: 100%;
		}
		.data-show-cont{
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		.data-show{
			margin-top: -20px;
			height: 50%;
		}
		.show-item{
			display: flex;
			height: 20%;
			margin-top: 6px;	
		}
		.color-cont{
			height: 12px;
			width: 20px;
		}
		.value-cont{
			line-height: 12px;
			padding-left: 10px;
			font-size: 12px;
			color: #eee;
		}
		

</style>
<template>
	<div class="piemap-cont">
		<div id="animaldispiemap"></div>
		<div class="data-show-cont">
			<div class="data-show">
				<div class="show-item" v-for="(report, index) in outPieData">
					<div class="color-cont" v-bind:style="{ 'background-color': colors[index]}"></div> 
					<div class="value-cont">{{report.name}}:<br/>{{report.value}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts';

	export default {
		props: {
			reportProCount: {
				type: Object,
				default: null
			},
		},
		watch: {
			reportProCount: function(newValue, oldValue){
				this.getPieData();
				this.drawLine(newValue);		
			}
		},
		data() {
			return {
				centerPieData: [],
				outPieData: [],
	            colors: ['#AE43DC','#ff0000','#ff6600','#E8BB18','#4bC65e','#0f2aff'],
			}
		},
		mounted() { 
			this.drawLine()
		},
		methods: {
			//饼状图数据格式化
			getPieData(){
				this.outPieData = [];
				this.centerPieData = [{name:'当前科',value:this.reportProCount.afcount}, {name:'其他道数',value:this.reportProCount.sumcount}];
				for (var i = 0; i < this.reportProCount.list.length; i++) {
					var obj = {};
					Object.assign(obj,{
						name: this.reportProCount.list[i].diease,
						value: this.reportProCount.list[i].count,
					});
					this.outPieData.push(obj);
				}
			},

			async drawLine() {

				var chart = echarts.init(document.getElementById("animaldispiemap"));
				
				var option = {
				    // legend: {
				    //     orient: 'vertical',
				    //     x: 'left',
				    //     data:this.outbreakdata,
				    // },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{b} : {c} ({d}%)"
				    },
				    series: [
				    {
				            type:'pie',
				            radius: ['0%', '45%'],
				            color: this.colors,
				            hoverAnimation: false,
				            data: this.centerPieData,
				            itemStyle:{ 
					            normal:{ 
					                label:{ 
						                show: true,
					                    position: "inner",
					                    textStyle: {                // 标签文本样式
				                            fontSize: 12,
				                            fontWeight: "normal",     // 标签字体加粗,'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
				                            color: '#ddd',
				                        },
								      	formatter: '{b}' 
					                }, 
					                labelLine:{show:false} 
					            } 
					        } 
				        },
				        {
				            type:'pie',
				            radius: ['64%', '80%'],
				            color: this.colors,
				            hoverAnimation: false,
				            data: this.outPieData,
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
			},
		}
	}
</script>