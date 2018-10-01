<template>
	<div id="main"></div>
</template>

<style scoped>
	div{
		height: 100%;
	}
	#mian{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';
	import world from '../../../assets/js/world.js';
	export default {
		props: {
			aliveproductmapdata: {
				type: Array,
				default: null
			},
		},
		watch: {
			aliveproductmapdata: function(newValue, oldValue){
				this.getWorldMapData(newValue)
				this.drawLine();		
			}
		},
		data() {
			return {
				worldMapData: [],
			}
		},
		mounted() { 
			// this.drawLine()
		},
		methods: {
			// 地图数据格式化函数
			getWorldMapData(sourcedata){
				this.worldMapData = [];
				this.maxNum = 0;
				for (var i = 0; i < sourcedata.length; i++) {
					this.maxNum = sourcedata[0].value;
					var obj = {};
					Object.assign(obj,{
						name: sourcedata[i].shortnameen,
						value: sourcedata[i].value,
					});
					this.worldMapData.push(obj);
				}
			},

			async drawLine() {

				var chart = echarts.init(document.getElementById("main"));
				

				
				//this.makeMapData(rawData);
				var option = {
					backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
						offset: 0,
						color: '#4b5769'
					}, {
						offset: 1,
						color: 'rgba(24, 24, 64, 0.2)'
					}]),
				    visualMap: {
				    	orient: 'horizontal',
				        min: 0,
				        max: this.maxNum,
				        bottom: 12,
				        right: 10,
				        itemWidth:20,                           //图形的宽度，即长条的宽度。
        				itemHeight:280,                         //图形的高度，即长条的高度。
				        text:['高','低'],
				        textStyle:{
                        	fontSize:14,
                        	color:'#FFF'
                    	},
				        realtime: false,
				        calculable: true,
				        splitNumber:0,
				        color: ['blue','deepskyblue','lightskyblue','white']
				    },
				    series: [
				    	{
				            name: 'World Population (2010)',
				            type: 'map',
				            mapType: 'world',
				            itemStyle:{
				               normal:{
					               	borderWidth: 0.6,
					                borderColor: '#505a69',
					                areaColor: 'rgba(24, 24, 24, 0.0)'
					            },
				            	// normal:{label:{show:true}},		//默认是否显示国家名
				            	emphasis:{label:{show:true}},	//鼠标移动显示国家名
				           	},
				            roam: true,
				            data: this.worldMapData,
				        }
				    ],
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