
<style scoped>
	.piemap-cont{
		width: 100%;
		height: 100%;
		display: flex;
	}
		#fishpiemap{
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
			height: 30%;
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
		<div id="fishpiemap"></div>
		<div class="data-show-cont">
			<div class="data-show">
				<div class="show-item" v-for="(animal, index) in outPieCount">
					<div class="color-cont" v-bind:style="{ 'background-color': colors[index]}"></div> 
					<div class="value-cont">{{animal.name}}:<br/>{{animal.value}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts';

	export default {
		props: {
			animalOutPieCount: {
				type: Array,
				default: null
			},
			animalCenterCount: {
				type: Array,
				default: null
			},
		},
		watch: {
			animalCenterCount: function(newValue, oldValue){
				this.drawLine(newValue);		
			},
			animalOutPieCount: function(newValue, oldValue){
				this.getOutPieCount();
				this.drawLine();	
			}
		},
		data() {
			return {
				outPieCount: [],
	            colors: ['#AE43DC','#ff0000','#ff6600','#E8BB18','#4bC65e'],
			}
		},
		mounted() { 
			this.drawLine()
		},
		methods: {
			// 外层pie数据格式化
			getOutPieCount(){
				this.outPieCount = [];
				for (var i = 0; i < this.animalOutPieCount.length; i++) {
					var obj = {};
					Object.assign(obj,{
						name: this.animalOutPieCount[i].itemcn,
						value: this.animalOutPieCount[i].sum,
					});
					this.outPieCount.push(obj);
				}
			},

			async drawLine() {				
				var chart = echarts.init(document.getElementById("fishpiemap"));
				
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
				            color: ['#E8BB18','#ff3300'],
				            hoverAnimation: false,
				            data: this.animalCenterCount,
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
				            data: this.outPieCount,
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
				//清空画布
                chart.clear();
				// 使用刚指定的配置项和数据显示图表。
				chart.setOption(option);
			},
		}
	}
</script>