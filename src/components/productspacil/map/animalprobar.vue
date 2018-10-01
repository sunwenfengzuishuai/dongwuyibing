
<template>
    <div id="proanimalbar"></div>
</template>

<style scoped>
    #proanimalbar{
        width: 100%;
        height: 100%;
    }
</style>

<script>
    import echarts from 'echarts';

    export default {
        props: {
         animalLiveCount: {
             type: Array,
             default: null
         },
        },
        watch: {
         animalLiveCount: function(newValue, oldValue){
             this.drawLine(newValue);        
         },
        },
        data() {
            return {
                aniamlLiveName: [],
                animalLiveValue: [],
            }
        },
        mounted() {
            this.drawLine(this.animalLiveCount)

        },
        methods: {
        	// 动物科生产标准格式化
        	getAniamlProData(liveCount){
        		this.aniamlLiveName = [];
        		this.animalLiveValue = [];
        		for (var i = 0; i < liveCount.length; i++) {
        			this.aniamlLiveName.push(liveCount[i].oiefnamecn);
        			// var sum = parseInt(liveCount[i].sum);
        			this.animalLiveValue.push(liveCount[i].sum);
        		}
        	},

            async drawLine(animalLiveCount) {
            	this.getAniamlProData(animalLiveCount);
                var chart = echarts.init(document.getElementById("proanimalbar"));

                var option = {
                    grid: {  
					    left: '2%',  
					    right: '6%',  
					    bottom: '4%',  
					    top: '15%',
					    containLabel: true  
					},
                    tooltip : {
                        trigger: 'axis'
                    },

               //      legend: {
               //          x: 'left',
               //          y: 'top',
               //          padding: [8,0,0,20],
               //          data:['2017'],
               //          textStyle: {
			            //     color: '#eee',
			            // }
               //      },

                    calculable : true,

                    xAxis : [
                        {
                        	axisLabel: {
                                rotate: 30,
                                interval: 0
                            },
                            type : 'category',
                            data : this.aniamlLiveName, //'2015','2016','2017','2018'
                            axisLine: {
			                	lineStyle: {
			                   		color: '#eee'
			                	}
				            },
				            type: 'category',
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
			            	axisLine: {
				                lineStyle: {
				                    color: '#CECECE'
				                }
			           		},
			           		splitLine:{
						        show:false,  //不显示分割线         
						    },
                        }
                    ],
                    series : [
                        {
                            name:'2017',
                            type:'bar',
                            color:['#FD824D'],
                            itemStyle: {
				                normal: {
				                    color: new echarts.graphic.LinearGradient(
				                        0, 0, 0, 1,
				                        [
				                            {offset: 0, color: '#83bff6'},
				                            {offset: 0.5, color: '#188df0'},
				                            {offset: 1, color: '#188df0'}
				                        ]
				                    )
				                },
				                emphasis: {
				                    color: new echarts.graphic.LinearGradient(
				                        0, 0, 0, 1,
				                        [
				                            {offset: 0, color: '#2378f7'},
				                            {offset: 0.7, color: '#2378f7'},
				                            {offset: 1, color: '#83bff6'}
				                        ]
				                    )
				                }
				            },
                            data: this.animalLiveValue,

                        },
                    ]
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


